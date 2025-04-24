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
exports.SubCategoryService = void 0;
const common_1 = require("@nestjs/common");
const uploadService_1 = require("../../common/service/uploadService");
const repository_1 = require("../../DB/repository");
const slugify_1 = require("slugify");
let SubCategoryService = class SubCategoryService {
    CategoryRepository;
    SubCategoryRepository;
    UploadedFileService;
    constructor(CategoryRepository, SubCategoryRepository, UploadedFileService) {
        this.CategoryRepository = CategoryRepository;
        this.SubCategoryRepository = SubCategoryRepository;
        this.UploadedFileService = UploadedFileService;
    }
    async createSubCategory(body, user, file) {
        const { name, category } = body;
        const categoryExist = await this.CategoryRepository.findOne({ _id: category });
        const SubCategoryExist = await this.SubCategoryRepository.findOne({ name: name.toLowerCase() });
        if (SubCategoryExist) {
            throw new common_1.ForbiddenException('SubCategory already exist');
        }
        if (!categoryExist) {
            throw new common_1.NotFoundException('category not found');
        }
        let dummyData = { name, userId: user._id, category };
        if (file) {
            const { secure_url, public_id } = await this.UploadedFileService.uploadFile(file, { folder: `${process.env.folder}/category/${categoryExist.customId}/subCategories` });
            dummyData["image"] = { secure_url, public_id };
        }
        const SubCategory = await this.SubCategoryRepository.create(dummyData);
        return { SubCategory };
    }
    async UpdateSubCategory(body, user, file, id) {
        const { name } = body;
        const SubCategory = await this.SubCategoryRepository.findOne({ _id: id, userId: user._id });
        if (!SubCategory) {
            throw new common_1.ForbiddenException('SubCategory not exist');
        }
        const categoryExist = await this.CategoryRepository.findOne({ _id: SubCategory.category });
        if (name) {
            if (await this.SubCategoryRepository.findOne({ name })) {
                throw new common_1.ForbiddenException('SubCategory already exist');
            }
            SubCategory.name = name;
            SubCategory.slug = (0, slugify_1.default)(name, { replacement: '-', trim: true, lower: true, });
        }
        if (file) {
            await this.UploadedFileService.deleteFile(SubCategory.image['public_id']);
            const { secure_url, public_id } = await this.UploadedFileService.uploadFile(file, { folder: `${process.env.folder}/category/${categoryExist?.customId}/subCategories` });
            SubCategory.image = { secure_url, public_id };
        }
        await SubCategory.save();
        return { SubCategory };
    }
    async DeleteSubCategory(user, id) {
        const SubCategory = await this.SubCategoryRepository.findOneAndDelete({ _id: id, userId: user._id });
        if (!SubCategory) {
            throw new common_1.NotFoundException('SubCategory not found');
        }
        const categoryExist = await this.CategoryRepository.findOne({ _id: SubCategory.category });
        if (SubCategory?.image) {
            await this.UploadedFileService.deleteFolder(`${process.env.folder}/category/${categoryExist?.customId}/subCategories`);
        }
        return { SubCategory };
    }
    async getAllSubCategory(id) {
        const subCategories = await this.SubCategoryRepository.find({ filter: { category: id }, populate: [{ path: 'category' }] });
        return { subCategories };
    }
};
exports.SubCategoryService = SubCategoryService;
exports.SubCategoryService = SubCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_1.CategoryRepository,
        repository_1.SubCategoryRepository,
        uploadService_1.UploadedFileService])
], SubCategoryService);
//# sourceMappingURL=sub-category.service.js.map