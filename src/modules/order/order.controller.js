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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const auth_decorator_1 = require("../../common/decorator/auth.decorator");
const types_1 = require("../../common/types/types");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const orderDto_1 = require("./dto/orderDto");
let OrderController = class OrderController {
    _OrderService;
    constructor(_OrderService) {
        this._OrderService = _OrderService;
    }
    async createCoupon(body, user) {
        return this._OrderService.createOrder(body, user);
    }
    async createPaymentWithStripe(body, user) {
        return this._OrderService.createPaymentWithStripe(body, user);
    }
    async webhook(data) {
        return this._OrderService.webhook(data);
    }
    async cancelPayment(body, user) {
        return this._OrderService.cancelPayment(body, user);
    }
    async getAllorders() {
        return this._OrderService.getAllorders();
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)("/create"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [orderDto_1.orderDto, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createCoupon", null);
__decorate([
    (0, common_1.Post)("/create-payment"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [orderDto_1.paymentDto, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createPaymentWithStripe", null);
__decorate([
    (0, common_1.Post)("webhook"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "webhook", null);
__decorate([
    (0, common_1.Patch)("/cancel-payment"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [orderDto_1.paymentDto, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "cancelPayment", null);
__decorate([
    (0, common_1.Get)(""),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAllorders", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map