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
exports.SubCategoryModel = exports.SubCategorySchema = exports.SubCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const slugify_1 = require("slugify");
let SubCategory = class SubCategory {
    name;
    slug;
    userId;
    category;
    image;
};
exports.SubCategory = SubCategory;
__decorate([
    (0, mongoose_1.Prop)({ type: String, minlength: 3, trim: true, required: true }),
    __metadata("design:type", String)
], SubCategory.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: function () {
            return (0, slugify_1.default)(this.name, { lower: true, trim: true });
        } }),
    __metadata("design:type", String)
], SubCategory.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SubCategory.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Category', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SubCategory.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], SubCategory.prototype, "image", void 0);
exports.SubCategory = SubCategory = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
], SubCategory);
exports.SubCategorySchema = mongoose_1.SchemaFactory.createForClass(SubCategory);
exports.SubCategoryModel = mongoose_1.MongooseModule.forFeature([{ name: SubCategory.name, schema: exports.SubCategorySchema }]);
//# sourceMappingURL=subCategory.model.js.map