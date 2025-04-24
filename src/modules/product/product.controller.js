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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../../common/decorator/auth.decorator");
const types_1 = require("../../common/types/types");
const product_service_1 = require("./product.service");
const platform_express_1 = require("@nestjs/platform-express");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const product_Dto_1 = require("./Dto/product.Dto");
const multer_1 = require("../../common/utils/multer");
const mongoose_1 = require("mongoose");
let ProductController = class ProductController {
    _ProductService;
    constructor(_ProductService) {
        this._ProductService = _ProductService;
    }
    async createProduct(body, user, files) {
        return this._ProductService.createProduct(body, user, files);
    }
    async updateProduct(body, productId, user, files) {
        return this._ProductService.updateProduct(body, user, files, productId);
    }
    async deleteProduct(productId, user) {
        return this._ProductService.deleteProduct(user, productId);
    }
    async getAllProducts(query) {
        return this._ProductService.getAllProducts(query);
    }
    async addOrdeleteProduct(productId, user) {
        return this._ProductService.addOrdeleteProduct(user, productId);
    }
    async getWashlist(user) {
        return this._ProductService.getWashlist(user);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)("/create"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'imageCover', maxCount: 1 },
        { name: 'images', maxCount: 5 },
    ], (0, multer_1.MulterHost)(['image/png', 'image/jpeg', 'image/JPG']))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_Dto_1.ProductDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Patch)("/update/:productId"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'imageCover', maxCount: 1 },
        { name: 'images', maxCount: 5 },
    ], (0, multer_1.MulterHost)(['image/png', 'image/jpeg', 'image/JPG']))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('productId')),
    __param(2, (0, user_decorator_1.User)()),
    __param(3, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_Dto_1.updateProductDto, mongoose_1.Types.ObjectId, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)("/delete/:productId"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_Dto_1.queryDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Patch)("/washlist/:productId"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addOrdeleteProduct", null);
__decorate([
    (0, common_1.Get)("/washlist"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getWashlist", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map