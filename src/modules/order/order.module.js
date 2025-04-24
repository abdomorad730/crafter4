"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const cart_Repository_1 = require("../../DB/repository/cart.Repository");
const repository_1 = require("../../DB/repository");
const models_1 = require("../../DB/models");
const payment_service_1 = require("./sevice/payment.service");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [models_1.CartModel, models_1.OrderModel, models_1.CouponModel, models_1.ProductModel],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, cart_Repository_1.CartRepository, repository_1.OrderRepository, payment_service_1.paymentService, repository_1.CouponRepository, repository_1.ProductRepository]
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map