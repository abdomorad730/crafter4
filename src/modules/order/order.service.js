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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const repository_1 = require("../../DB/repository");
const cart_Repository_1 = require("../../DB/repository/cart.Repository");
const types_1 = require("../../common/types/types");
const payment_service_1 = require("./sevice/payment.service");
let OrderService = class OrderService {
    CartRepository;
    OrderRepository;
    CouponRepository;
    ProductRepository;
    paymentService;
    constructor(CartRepository, OrderRepository, CouponRepository, ProductRepository, paymentService) {
        this.CartRepository = CartRepository;
        this.OrderRepository = OrderRepository;
        this.CouponRepository = CouponRepository;
        this.ProductRepository = ProductRepository;
        this.paymentService = paymentService;
    }
    async createOrder(body, user) {
        const { phone, paymentMethod, address } = body;
        const cart = await this.CartRepository.findOne({ userId: user._id });
        if (!cart || cart.products.length == 0) {
            throw new common_1.BadRequestException('Cart is empty');
        }
        const order = await this.OrderRepository.create({
            userId: user._id,
            cartId: cart._id,
            phone,
            paymentMethod,
            address,
            TotalPrice: cart.subTotal,
            status: paymentMethod == types_1.paymentMethods.cash ? types_1.status.placed : types_1.status.pending
        });
        for (const element of cart.products) {
            await this.ProductRepository.findOneAndUpdate({ _id: element.productId }, { $inc: { stock: -element.quantity } });
        }
        cart.products = [];
        cart.save;
        return { order };
    }
    async createPaymentWithStripe(body, user) {
        const { orderId, code } = body;
        const order = await this.OrderRepository.findOne({ _id: orderId, userId: user._id, status: types_1.status.pending, paymentMethod: types_1.paymentMethods.card }, [{ path: 'cartId', populate: [{ path: "products.productId" }] }]);
        if (!order) {
            throw new common_1.BadRequestException('order not found');
        }
        if (code) {
            const couponExist = await this.CouponRepository.findOne({ code, usedBy: { $nin: [user._id] } });
            if (!couponExist) {
                throw new common_1.NotFoundException('coupon not found');
            }
            if (new Date(couponExist.toDate).getTime() < Date.now()) {
                throw new common_1.ForbiddenException('coupon is expired');
            }
            const coupon = await this.paymentService.createCoupon(couponExist.amount);
            const data = await this.paymentService.createCheckoutSession({
                customer_email: user.email,
                metadata: { orderId: orderId.toString() },
                success_url: 'http://localhost:3000',
                cancel_url: 'http://localhost:3000',
                line_items: order.cartId['products'].map(product => ({
                    price_data: {
                        currency: "egp",
                        product_data: {
                            name: product.productId?.name,
                            images: [product.productId?.imageCover.secure_url]
                        },
                        unit_amount: product.productId?.subPrice * 100
                    },
                    quantity: product.quantity
                })),
                discounts: [{ coupon: coupon.id }]
            });
            couponExist.usedBy.push(user._id);
            couponExist.save();
            return { data };
        }
        const data = await this.paymentService.createCheckoutSession({
            customer_email: user.email,
            metadata: { orderId: orderId.toString() },
            success_url: 'http://localhost:3000',
            cancel_url: 'http://localhost:3000',
            line_items: order.cartId['products'].map(product => ({
                price_data: {
                    currency: "egp",
                    product_data: {
                        name: product.productId?.name,
                        images: [product.productId?.imageCover.secure_url]
                    },
                    unit_amount: product.productId?.subPrice * 100
                },
                quantity: product.quantity
            })),
            discounts: []
        });
        return { data };
    }
    async webhook(data) {
        const orderId = data.data.object.metadata.orderId;
        const order = await this.OrderRepository.findOneAndUpdate({ _id: orderId }, { status: types_1.status.paid, orderChanged: { paidAt: Date.now() }, paymentIntent: data.data.object.payment_intent });
        return { order };
    }
    async cancelPayment(body, user) {
        const { orderId } = body;
        const order = await this.OrderRepository.findOneAndUpdate({ _id: orderId, status: { $in: [types_1.status.pending, types_1.status.paid, types_1.status.placed] } }, { status: types_1.status.cancelled, orderChanged: {
                cancelledAt: Date.now(),
                cancelledBy: user._id
            } });
        if (!order) {
            throw new common_1.NotFoundException('order not found');
        }
        if (order.paymentMethod == 'card') {
            await this.paymentService.refunded({ payment_intent: order.paymentIntent, reason: "requested_by_customer" });
            order.orderChanged = {
                refundedAt: Date.now(),
                refundedBy: user._id
            };
            order.status = types_1.status.refunded;
            order.save();
        }
        return { msg: 'done' };
    }
    async getAllorders() {
        const orders = await this.OrderRepository.find({});
        return { orders };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_Repository_1.CartRepository,
        repository_1.OrderRepository,
        repository_1.CouponRepository,
        repository_1.ProductRepository,
        payment_service_1.paymentService])
], OrderService);
//# sourceMappingURL=order.service.js.map