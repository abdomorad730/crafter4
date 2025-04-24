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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../../common/decorator/auth.decorator");
const types_1 = require("../../common/types/types");
const couponDto_1 = require("./dto/couponDto");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const coupon_service_1 = require("./coupon.service");
let CouponController = class CouponController {
    _CouponService;
    constructor(_CouponService) {
        this._CouponService = _CouponService;
    }
    async createCoupon(body, user) {
        return this._CouponService.createCoupon(body, user);
    }
};
exports.CouponController = CouponController;
__decorate([
    (0, common_1.Post)("/create"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [couponDto_1.couponDto, Object]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "createCoupon", null);
exports.CouponController = CouponController = __decorate([
    (0, common_1.Controller)('coupon'),
    __metadata("design:paramtypes", [coupon_service_1.CouponService])
], CouponController);
//# sourceMappingURL=coupon.controller.js.map