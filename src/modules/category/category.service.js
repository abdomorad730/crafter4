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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const repository_1 = require("../../DB/repository");
const uploadService_1 = require("../../common/service/uploadService");
const slugify_1 = require("slugify");
let CategoryService = class CategoryService {
    CategoryRepository;
    UploadedFileService;
    constructor(CategoryRepository, UploadedFileService) {
        this.CategoryRepository = CategoryRepository;
        this.UploadedFileService = UploadedFileService;
    }
    async createCategory(body, user, file) {
        const { name } = body;
        const categoryExist = await this.CategoryRepository.findOne({ name: name.toLowerCase() });
        if (categoryExist) {
            throw new common_1.ForbiddenException('category already exist');
        }
        let dummyData = { name, userId: user._id };
        const customId = Math.random().toString(36).substring(2, 7);
        if (file) {
            const { secure_url, public_id } = await this.UploadedFileService.uploadFile(file, { folder: `${process.env.folder}/category/${customId}` });
            dummyData["image"] = { secure_url, public_id };
            dummyData["customId"] = customId;
        }
        const category = await this.CategoryRepository.create(dummyData);
        return { category };
    }
    async UpdateCategory(body, user, file, id) {
        const { name } = body;
        const category = await this.CategoryRepository.findOne({ _id: id, userId: user._id });
        if (!category) {
            throw new common_1.ForbiddenException('category not exist');
        }
        if (name) {
            if (await this.CategoryRepository.findOne({ name })) {
                throw new common_1.ForbiddenException('category already exist');
            }
            category.name = name;
            category.slug = (0, slugify_1.default)(name, { replacement: '-', trim: true, lower: true, });
        }
        if (file) {
            await this.UploadedFileService.deleteFile(category.image['public_id']);
            const { secure_url, public_id } = await this.UploadedFileService.uploadFile(file, { folder: `${process.env.folder}/category/${category.customId}` });
            category.image = { secure_url, public_id };
        }
        await category.save();
        return { category };
    }
    async DeleteCategory(user, id) {
        const category = await this.CategoryRepository.findOneAndDelete({ _id: id, userId: user._id });
        if (!category) {
            throw new common_1.NotFoundException('category not found');
        }
        if (category?.image) {
            await this.UploadedFileService.deleteFolder(`${process.env.folder}/category/${category.customId}`);
        }
        return { category };
    }
    async getAllCategory() {
        const categories = await this.CategoryRepository.find({});
        return { categories };
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_1.CategoryRepository,
        uploadService_1.UploadedFileService])
], CategoryService);
//# sourceMappingURL=category.service.js.map