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
exports.CouponModel = exports.CouponSchema = exports.Coupon = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_model_1 = require("./users.model");
let Coupon = class Coupon {
    code;
    amount;
    userId;
    fromDate;
    toDate;
    usedBy;
};
exports.Coupon = Coupon;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true, minlength: 1, unique: true }),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 1, max: 100 }),
    __metadata("design:type", Number)
], Coupon.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: users_model_1.User.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Coupon.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], Coupon.prototype, "fromDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], Coupon.prototype, "toDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: users_model_1.User.name }),
    __metadata("design:type", Array)
], Coupon.prototype, "usedBy", void 0);
exports.Coupon = Coupon = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
], Coupon);
exports.CouponSchema = mongoose_1.SchemaFactory.createForClass(Coupon);
exports.CouponModel = mongoose_1.MongooseModule.forFeature([{ name: Coupon.name, schema: exports.CouponSchema }]);
//# sourceMappingURL=couponModel.js.map