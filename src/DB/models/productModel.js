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
exports.ProductModel = exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const slugify_1 = require("slugify");
const zod_1 = require("zod");
const subCategory_model_1 = require("./subCategory.model");
const brand_model_1 = require("./brand.model");
let Product = class Product {
    name;
    slug;
    describtion;
    customId;
    userId;
    category;
    subCategory;
    brand;
    imageCover;
    images;
    price;
    discount;
    stock;
    quantity;
    subPrice;
    rate;
    avgRating;
};
exports.Product = Product;
__decorate([
    (0, mongoose_1.Prop)({ type: String, minlength: 3, trim: true, required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: function () {
            return (0, slugify_1.default)(this.name, { replacement: '-', lower: true, trim: true });
        } }),
    __metadata("design:type", String)
], Product.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, minlength: 3, trim: true, required: true }),
    __metadata("design:type", String)
], Product.prototype, "describtion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, minlength: 3, trim: true, required: true }),
    __metadata("design:type", String)
], Product.prototype, "customId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Product.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Category', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Product.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: subCategory_model_1.SubCategory.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Product.prototype, "subCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: brand_model_1.Brand.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Product.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: zod_1.object, required: true }),
    __metadata("design:type", Object)
], Product.prototype, "imageCover", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [zod_1.object] }),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 1, max: 100 }),
    __metadata("design:type", Number)
], Product.prototype, "discount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "subPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "rate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "avgRating", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
], Product);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
exports.ProductModel = mongoose_1.MongooseModule.forFeature([{ name: Product.name, schema: exports.ProductSchema }]);
//# sourceMappingURL=productModel.js.map