"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandModule = void 0;
const common_1 = require("@nestjs/common");
const brand_controller_1 = require("./brand.controller");
const uploadService_1 = require("../../common/service/uploadService");
const repository_1 = require("../../DB/repository");
const userGuard_1 = require("../../common/guard/userGuard");
const category_service_1 = require("../category/category.service");
const models_1 = require("../../DB/models");
const brand_service_1 = require("./brand.service");
let BrandModule = class BrandModule {
};
exports.BrandModule = BrandModule;
exports.BrandModule = BrandModule = __decorate([
    (0, common_1.Module)({
        imports: [models_1.CategoryModel, models_1.BrandModel],
        controllers: [brand_controller_1.BrandController],
        providers: [category_service_1.CategoryService, userGuard_1.AuthGuard, repository_1.CategoryRepository, uploadService_1.UploadedFileService, repository_1.BrandRepository, brand_service_1.BrandService]
    })
], BrandModule);
//# sourceMappingURL=brand.module.js.map