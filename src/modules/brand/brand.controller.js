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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const auth_decorator_1 = require("../../common/decorator/auth.decorator");
const multer_1 = require("../../common/utils/multer");
const platform_express_1 = require("@nestjs/platform-express");
const types_1 = require("../../common/types/types");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const brand_dto_1 = require("./dto/brand.dto");
const mongoose_1 = require("mongoose");
let BrandController = class BrandController {
    _BrandService;
    constructor(_BrandService) {
        this._BrandService = _BrandService;
    }
    async createBrand(body, user, file) {
        return this._BrandService.createBrand(body, user, file);
    }
    async UpdateBrand(body, id, user, file) {
        return this._BrandService.UpdateBrand(body, user, file, id);
    }
    async DeleteBrand(id, user) {
        return this._BrandService.DeleteBrand(user, id);
    }
    async getAllCategories() {
        return this._BrandService.getAllBrand();
    }
};
exports.BrandController = BrandController;
__decorate([
    (0, common_1.Post)("/create"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', (0, multer_1.MulterHost)(['image/png', 'image/jpeg', 'image/JPG']))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.brandDto, Object, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "createBrand", null);
__decorate([
    (0, common_1.Patch)("/update/:id"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', (0, multer_1.MulterHost)(['image/png', 'image/jpeg', 'image/JPG']))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, user_decorator_1.User)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.updateBrandDto, mongoose_1.Types.ObjectId, Object, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "UpdateBrand", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "DeleteBrand", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getAllCategories", null);
exports.BrandController = BrandController = __decorate([
    (0, common_1.Controller)('brand'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
//# sourceMappingURL=brand.controller.js.map