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
exports.BrandModel = exports.BrandSchema = exports.Brand = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const slugify_1 = require("slugify");
const zod_1 = require("zod");
let Brand = class Brand {
    name;
    slug;
    userId;
    category;
    image;
    customId;
};
exports.Brand = Brand;
__decorate([
    (0, mongoose_1.Prop)({ type: String, minlength: 3, trim: true, required: true, unique: true }),
    __metadata("design:type", String)
], Brand.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: function () {
            return (0, slugify_1.default)(this.name, { lower: true, trim: true });
        } }),
    __metadata("design:type", String)
], Brand.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Brand.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Category', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Brand.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: zod_1.object }),
    __metadata("design:type", Object)
], Brand.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Brand.prototype, "customId", void 0);
exports.Brand = Brand = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
], Brand);
exports.BrandSchema = mongoose_1.SchemaFactory.createForClass(Brand);
exports.BrandModel = mongoose_1.MongooseModule.forFeature([{ name: Brand.name, schema: exports.BrandSchema }]);
//# sourceMappingURL=brand.model.js.map