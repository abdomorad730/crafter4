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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const uploadService_1 = require("../../common/service/uploadService");
const repository_1 = require("../../DB/repository");
const slugify_1 = require("slugify");
let BrandService = class BrandService {
    CategoryRepository;
    BrandRepository;
    UploadedFileService;
    constructor(CategoryRepository, BrandRepository, UploadedFileService) {
        this.CategoryRepository = CategoryRepository;
        this.BrandRepository = BrandRepository;
        this.UploadedFileService = UploadedFileService;
    }
    async createBrand(body, user, file) {
        const { name, category } = body;
        const BrandExist = await this.BrandRepository.findOne({ name: name.toLowerCase() });
        if (BrandExist) {
            throw new common_1.ForbiddenException('Brand already exist');
        }
        if (!await this.CategoryRepository.findOne({ _id: category })) {
            throw new common_1.NotFoundException('category not found');
        }
        const customId = Math.random().toString(36).substring(2, 7);
        let dummyData = { name, userId: user._id, category, customId };
        if (file) {
            const { secure_url, public_id } = await this.UploadedFileService.uploadFile(file, { folder: `${process.env.folder}/Brands/${customId}` });
            dummyData["image"] = { secure_url, public_id };
        }
        const Brand = await this.BrandRepository.create(dummyData);
        return { Brand };
    }
    async UpdateBrand(body, user, file, id) {
        const { name } = body;
        const Brand = await this.BrandRepository.findOne({ _id: id, userId: user._id });
        if (!Brand) {
            throw new common_1.ForbiddenException('Brand not exist');
        }
        if (name) {
            if (await this.BrandRepository.findOne({ name })) {
                throw new common_1.ForbiddenException('Brand already exist');
            }
            Brand.name = name;
            Brand.slug = (0, slugify_1.default)(name, { replacement: '-', trim: true, lower: true, });
        }
        if (file) {
            await this.UploadedFileService.deleteFile(Brand.image['public_id']);
            const { secure_url, public_id } = await this.UploadedFileService.uploadFile(file, { folder: `${process.env.folder}/Brands/${Brand.customId}` });
            Brand.image = { secure_url, public_id };
        }
        await Brand.save();
        return { Brand };
    }
    async DeleteBrand(user, id) {
        const Brand = await this.BrandRepository.findOneAndDelete({ _id: id, userId: user._id });
        if (!Brand) {
            throw new common_1.NotFoundException('Brand not found');
        }
        if (Brand?.image) {
            await this.UploadedFileService.deleteFolder(`${process.env.folder}/Brands/${Brand.customId}`);
        }
        return { Brand };
    }
    async getAllBrand() {
        const brands = await this.BrandRepository.find({});
        return { brands };
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_1.CategoryRepository,
        repository_1.BrandRepository,
        uploadService_1.UploadedFileService])
], BrandService);
//# sourceMappingURL=brand.service.js.map