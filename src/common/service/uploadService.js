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
exports.UploadedFileService = void 0;
const common_1 = require("@nestjs/common");
const cloudnairy_1 = require("../cloudnairy/cloudnairy");
let UploadedFileService = class UploadedFileService {
    constructor() { }
    cloudnairy = (0, cloudnairy_1.cloudinaryConfig)();
    async uploadFile(file, options) {
        return await this.cloudnairy.uploader.upload(file.path, options);
    }
    async uploadFiles(files, options) {
        let result = [];
        for (const element of files) {
            const { secure_url, public_id } = await this.uploadFile(element, options);
            result.push({ secure_url, public_id });
        }
        return result;
    }
    async deleteFile(public_id) {
        return await this.cloudnairy.uploader.destroy(public_id);
    }
    async deleteFolder(filePath) {
        await this.cloudnairy.api.delete_resources_by_prefix(filePath);
        await this.cloudnairy.api.delete_folder(filePath);
    }
};
exports.UploadedFileService = UploadedFileService;
exports.UploadedFileService = UploadedFileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UploadedFileService);
//# sourceMappingURL=uploadService.js.map