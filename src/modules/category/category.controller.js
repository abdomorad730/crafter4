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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const category_dto_1 = require("./Dto/category.dto");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const auth_decorator_1 = require("../../common/decorator/auth.decorator");
const types_1 = require("../../common/types/types");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("../../common/utils/multer");
const updateCategoryDto_1 = require("./Dto/updateCategoryDto");
const mongoose_1 = require("mongoose");
let CategoryController = class CategoryController {
    _CategoryService;
    constructor(_CategoryService) {
        this._CategoryService = _CategoryService;
    }
    async createCategory(body, user, file) {
        return this._CategoryService.createCategory(body, user, file);
    }
    async UpdateCategory(body, id, user, file) {
        return this._CategoryService.UpdateCategory(body, user, file, id);
    }
    async DeleteCategory(id, user) {
        return this._CategoryService.DeleteCategory(user, id);
    }
    async getAllCategories() {
        return this._CategoryService.getAllCategory();
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)("/create"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', (0, multer_1.MulterHost)(['image/png', 'image/jpeg', 'image/JPG']))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.categoryDto, Object, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
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
    __metadata("design:paramtypes", [updateCategoryDto_1.updateCategoryDto, mongoose_1.Types.ObjectId, Object, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "UpdateCategory", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "DeleteCategory", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCategories", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map