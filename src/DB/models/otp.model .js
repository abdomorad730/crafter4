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
exports.OTPModel = exports.OTPSchema = exports.OTP = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const index_1 = require("./index");
const types_1 = require("../../common/types/types");
let OTP = class OTP {
    otp;
    type;
    expireAt;
    userId;
};
exports.OTP = OTP;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], OTP.prototype, "otp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: types_1.userOtp, required: true }),
    __metadata("design:type", String)
], OTP.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], OTP.prototype, "expireAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: index_1.User.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], OTP.prototype, "userId", void 0);
exports.OTP = OTP = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
], OTP);
exports.OTPSchema = mongoose_1.SchemaFactory.createForClass(OTP);
exports.OTPModel = mongoose_1.MongooseModule.forFeature([{ name: OTP.name, schema: exports.OTPSchema }]);
//# sourceMappingURL=otp.model%20.js.map