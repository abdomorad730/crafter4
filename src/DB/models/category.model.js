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
exports.CategoryModel = exports.CategorySchema = exports.Category = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const slugify_1 = require("slugify");
const users_model_1 = require("./users.model");
const zod_1 = require("zod");
let Category = class Category {
    name;
    slug;
    userId;
    image;
    customId;
};
exports.Category = Category;
__decorate([
    (0, mongoose_1.Prop)({ type: String, minlength: 3, trim: true, unique: true, required: true, lowercase: true }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: function () {
            return (0, slugify_1.default)(this.name, { lower: true, trim: true });
        } }),
    __metadata("design:type", String)
], Category.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: users_model_1.User.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Category.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: zod_1.object }),
    __metadata("design:type", Object)
], Category.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Category.prototype, "customId", void 0);
exports.Category = Category = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
], Category);
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);
exports.CategoryModel = mongoose_1.MongooseModule.forFeature([{ name: Category.name, schema: exports.CategorySchema }]);
//# sourceMappingURL=category.model.js.map