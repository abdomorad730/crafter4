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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const uploadService_1 = require("../../common/service/uploadService");
const repository_1 = require("../../DB/repository");
let ProductService = class ProductService {
    ProductRepository;
    CategoryRepository;
    BrandRepository;
    SubCategoryRepository;
    userRepository;
    UploadedFileService;
    constructor(ProductRepository, CategoryRepository, BrandRepository, SubCategoryRepository, userRepository, UploadedFileService) {
        this.ProductRepository = ProductRepository;
        this.CategoryRepository = CategoryRepository;
        this.BrandRepository = BrandRepository;
        this.SubCategoryRepository = SubCategoryRepository;
        this.userRepository = userRepository;
        this.UploadedFileService = UploadedFileService;
    }
    async createProduct(body, user, files) {
        const { name, stock, subCategory, brand, quantity, category, describtion, price, discount, rate, avgRating } = body;
        const categoryExist = await this.CategoryRepository.findOne({ _id: category });
        if (!category) {
            throw new common_1.NotFoundException('category not found');
        }
        if (!files.imageCover) {
            throw new common_1.BadRequestException('imegeCover is required');
        }
        if (!await this.BrandRepository.findOne({ _id: brand })) {
            throw new common_1.NotFoundException('brand not found');
        }
        if (!await this.SubCategoryRepository.findOne({ _id: subCategory })) {
            throw new common_1.NotFoundException('subCategory not found');
        }
        const customId = Math.random().toString(36).substring(2, 7);
        const { secure_url, public_id } = await this.UploadedFileService.uploadFile(files.imageCover[0], { folder: `${process.env.folder}/category/${categoryExist?.customId}/products/${customId}/main_image` });
        let subImages = [];
        if (files.images) {
            const result = await this.UploadedFileService.uploadFiles(files.images, { folder: `${process.env.folder}/category/${categoryExist?.customId}/products/${customId}/sub_images` });
            subImages.push(...result);
        }
        console.log(subImages);
        console.log(files.images);
        const subPrice = price - (price * ((discount || 0) / 100));
        const product = await this.ProductRepository.create({
            name,
            describtion,
            category,
            subCategory,
            brand,
            price,
            discount,
            subPrice,
            stock,
            quantity,
            customId,
            imageCover: { secure_url, public_id },
            images: subImages,
            userId: user._id,
            rate,
            avgRating,
        });
        return { product };
    }
    async updateProduct(body, user, files, productId) {
        const { name, stock, subCategory, brand, quantity, category, describtion, price, discount, rate, avgRating } = body;
        const product = await this.ProductRepository.findOne({ _id: productId, userId: user._id });
        if (!product) {
            throw new common_1.NotFoundException('product not found');
        }
        let categoryExist;
        if (category) {
            categoryExist = await this.CategoryRepository.findOne({ _id: category });
            if (!categoryExist) {
                throw new common_1.NotFoundException('category not found');
            }
        }
        if (name) {
            if (name == product.name) {
                throw new common_1.BadRequestException("name is dublicated");
            }
            product.name = name;
        }
        if (describtion) {
            product.describtion = describtion;
        }
        if (files.imageCover) {
            await this.UploadedFileService.deleteFile(product.imageCover['public_id']);
            const { secure_url, public_id } = await this.UploadedFileService.uploadFile(files.imageCover[0], { folder: `${process.env.folder}/category/${categoryExist?.customId}/products/${product.customId}/main_image` });
            product.imageCover = { secure_url, public_id };
        }
        let subImages = [];
        if (files.images) {
            await this.UploadedFileService.deleteFolder(`${process.env.folder}/category/${categoryExist?.customId}/products/${product.customId}/sub_images`);
            const result = await this.UploadedFileService.uploadFiles(files.images, { folder: `${process.env.folder}/category/${categoryExist?.customId}/products/${product.customId}/sub_images` });
            subImages.push(...result);
        }
        if (price && discount) {
            product.subPrice = price - (price * ((discount || 0) / 100));
            product.price = price;
            product.discount = discount;
        }
        else if (price) {
            product.subPrice = price - (price * ((product.discount || 0) / 100));
            product.price = price;
        }
        else if (discount) {
            product.subPrice = product.price - (product.price * ((discount || 0) / 100));
            product.discount = discount;
        }
        if (quantity) {
            product.quantity = quantity;
        }
        if (stock) {
            if (stock > quantity) {
                throw new common_1.ForbiddenException("stock should be less than quantity");
            }
            product.stock = stock;
        }
        product.save();
        return { product };
    }
    async getAllProducts(query) {
        const { name, select, sort, page } = query;
        let filterObject = {};
        if (name) {
            filterObject = {
                $or: [{ name: { $regex: name, $options: 'i' } }, { slug: { $regex: name, $options: 'i' } }]
            };
        }
        const products = await this.ProductRepository.find({ filter: filterObject, populate: [{ path: 'category' }, { path: 'brand' }, { path: 'subCategory' }], select, sort, page });
        return { products };
    }
    async addOrdeleteProduct(user, productId) {
        const product = await this.ProductRepository.findOne({ _id: productId });
        if (!product) {
            throw new common_1.NotFoundException('product not found');
        }
        if (user.washlist.includes(productId)) {
            user.washlist.splice(user.washlist.indexOf(productId), 1);
            user.save();
            return { user };
        }
        user.washlist.push(productId);
        user.save();
        return { user };
    }
    async getWashlist(user) {
        const washlist = await this.userRepository.findOne({ _id: user._id }, [{ path: 'washlist' }], 'washlist firstName lastName');
        return { user: washlist };
    }
    async deleteProduct(user, productId) {
        const product = await this.ProductRepository.findOneAndDelete({ _id: productId });
        if (!product) {
            throw new common_1.NotFoundException('product not found');
        }
        const categoryExist = await this.CategoryRepository.findOne({ _id: product.category });
        await this.UploadedFileService.deleteFolder(`${process.env.folder}/category/${categoryExist?.customId}/products/${product.customId}`);
        return { msg: 'done', product };
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_1.ProductRepository,
        repository_1.CategoryRepository,
        repository_1.BrandRepository,
        repository_1.SubCategoryRepository,
        repository_1.userRepository,
        uploadService_1.UploadedFileService])
], ProductService);
//# sourceMappingURL=product.service.js.map