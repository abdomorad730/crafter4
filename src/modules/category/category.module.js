"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const category_controller_1 = require("./category.controller");
const category_service_1 = require("./category.service");
const userGuard_1 = require("../../common/guard/userGuard");
const repository_1 = require("../../DB/repository");
const models_1 = require("../../DB/models");
const uploadService_1 = require("../../common/service/uploadService");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [models_1.CategoryModel],
        controllers: [category_controller_1.CategoryController],
        providers: [category_service_1.CategoryService, userGuard_1.AuthGuard, repository_1.CategoryRepository, uploadService_1.UploadedFileService]
    })
], CategoryModule);
//# sourceMappingURL=category.module.js.map