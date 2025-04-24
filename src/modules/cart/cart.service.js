"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const repository_1 = require("../../DB/repository");
const cart_Repository_1 = require("../../DB/repository/cart.Repository");
let CartService = class CartService {
    CartRepository;
    ProductRepository;
    constructor(CartRepository, ProductRepository) {
        this.CartRepository = CartRepository;
        this.ProductRepository = ProductRepository;
    }
    async createCart(body, user) {
        const { productId, quantity } = body;
        const product = await this.ProductRepository.findOne({ _id: productId, stock: { $gte: quantity } });
        if (!product) {
            throw new common_1.NotFoundException("product not found or out of stock");
        }
        const cart = await this.CartRepository.findOne({ userId: user._id });
        if (!cart) {
            return await this.CartRepository.create({ products: [{ productId, quantity, finalPrice: product.subPrice }], userId: user._id });
        }
        let productExist = cart.products.find(prod => prod.productId == productId);
        if (productExist) {
            throw new common_1.BadRequestException('product already exist in cart');
        }
        cart.products.push({ productId, quantity, finalPrice: product.subPrice });
        cart.save();
        return { cart };
    }
    async removeFromCart(body, user) {
        const { productId } = body;
        const product = await this.ProductRepository.findOne({ _id: productId });
        if (!product) {
            throw new common_1.NotFoundException("product not found");
        }
        const cart = await this.CartRepository.findOne({ userId: user._id, "products.productId": productId });
        if (!cart) {
            throw new common_1.NotFoundException("cart or product not found");
        }
        cart.products = cart.products.filter(prod => prod.productId != productId);
        cart.save();
        return { cart };
    }
    async clearCart(user) {
        const cart = await this.CartRepository.findOne({ userId: user._id });
        if (!cart) {
            throw new common_1.NotFoundException("cart or product not found");
        }
        cart.products = [];
        cart.save();
        return { cart };
    }
    async updateQuantityCart(body, user) {
        const { productId, quantity } = body;
        const cart = await this.CartRepository.findOne({ userId: user._id, "products.productId": productId });
        if (!cart) {
            throw new common_1.NotFoundException("cart or product not found");
        }
        let productInCart = cart.products.find(p => p.productId == productId);
        if (!productInCart) {
            throw new common_1.NotFoundException("product not found incart");
        }
        const product = await this.ProductRepository.findOne({ _id: productId, stock: { $gte: quantity } });
        if (!product) {
            throw new common_1.NotFoundException("product not found or out of stock");
        }
        productInCart.quantity = quantity;
        cart.save();
        return { cart };
    }
    async getCart(user) {
        const cart = await this.CartRepository.find({ filter: { userId: user._id }, populate: [{ path: 'products.productId', populate: [{ path: "category" }] }] });
        return { cart };
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_Repository_1.CartRepository,
        repository_1.ProductRepository])
], CartService);
//# sourceMappingURL=cart.service.js.map