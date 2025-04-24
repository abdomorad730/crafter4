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
exports.SubCategoryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const auth_decorator_1 = require("../../common/decorator/auth.decorator");
const multer_1 = require("../../common/utils/multer");
const subCategoryDto_1 = require("./dto/subCategoryDto");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const types_1 = require("../../common/types/types");
const mongoose_1 = require("mongoose");
const sub_category_service_1 = require("./sub-category.service");
let SubCategoryController = class SubCategoryController {
    SubCategoryService;
    constructor(SubCategoryService) {
        this.SubCategoryService = SubCategoryService;
    }
    async createSubCategory(body, user, file) {
        return this.SubCategoryService.createSubCategory(body, user, file);
    }
    async UpdateSubCategory(body, id, user, file) {
        return this.SubCategoryService.UpdateSubCategory(body, user, file, id);
    }
    async DeleteSubCategory(id, user) {
        return this.SubCategoryService.DeleteSubCategory(user, id);
    }
    async getAllCategories(id) {
        return this.SubCategoryService.getAllSubCategory(id);
    }
};
exports.SubCategoryController = SubCategoryController;
__decorate([
    (0, common_1.Post)("/create"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', (0, multer_1.MulterHost)(['image/png', 'image/jpeg', 'image/JPG']))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subCategoryDto_1.subCategoryDto, Object, Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "createSubCategory", null);
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
    __metadata("design:paramtypes", [subCategoryDto_1.updateSubCategoryDto, mongoose_1.Types.ObjectId, Object, Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "UpdateSubCategory", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "DeleteSubCategory", null);
__decorate([
    (0, common_1.Get)("/:id"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "getAllCategories", null);
exports.SubCategoryController = SubCategoryController = __decorate([
    (0, common_1.Controller)('sub-category'),
    __metadata("design:paramtypes", [sub_category_service_1.SubCategoryService])
], SubCategoryController);
//# sourceMappingURL=sub-category.controller.js.map