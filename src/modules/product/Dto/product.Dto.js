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
exports.queryDto = exports.updateProductDto = exports.ProductDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const QueryFilterDto_1 = require("../../../common/utils/QueryFilterDto");
class ProductDto {
    name;
    describtion;
    price;
    category;
    subCategory;
    brand;
    imageCover;
    discount;
    stock;
    quantity;
    rate;
    avgRating;
    images;
}
exports.ProductDto = ProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductDto.prototype, "describtion", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)((value) => {
        return mongoose_1.Types.ObjectId.isValid(value);
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], ProductDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.Validate)((value) => {
        return mongoose_1.Types.ObjectId.isValid(value);
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], ProductDto.prototype, "subCategory", void 0);
__decorate([
    (0, class_validator_1.Validate)((value) => {
        return mongoose_1.Types.ObjectId.isValid(value);
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], ProductDto.prototype, "brand", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "discount", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "stock", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "quantity", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "rate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "avgRating", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ProductDto.prototype, "images", void 0);
class updateProductDto {
    name;
    describtion;
    price;
    category;
    subCategory;
    brand;
    imageCover;
    discount;
    stock;
    quantity;
    rate;
    avgRating;
    images;
}
exports.updateProductDto = updateProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], updateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateProductDto.prototype, "describtion", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], updateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Validate)((value) => {
        return mongoose_1.Types.ObjectId.isValid(value);
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], updateProductDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.Validate)((value) => {
        return mongoose_1.Types.ObjectId.isValid(value);
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], updateProductDto.prototype, "subCategory", void 0);
__decorate([
    (0, class_validator_1.Validate)((value) => {
        return mongoose_1.Types.ObjectId.isValid(value);
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], updateProductDto.prototype, "brand", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], updateProductDto.prototype, "discount", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], updateProductDto.prototype, "stock", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], updateProductDto.prototype, "quantity", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], updateProductDto.prototype, "rate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], updateProductDto.prototype, "avgRating", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], updateProductDto.prototype, "images", void 0);
class queryDto extends QueryFilterDto_1.QueryFilterDto {
    name;
}
exports.queryDto = queryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], queryDto.prototype, "name", void 0);
//# sourceMappingURL=product.Dto.js.map