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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const types_1 = require("../../common/types/types");
const auth_decorator_1 = require("../../common/decorator/auth.decorator");
const cartDto_1 = require("./dto/cartDto");
const user_decorator_1 = require("../../common/decorator/user.decorator");
let CartController = class CartController {
    _CartService;
    constructor(_CartService) {
        this._CartService = _CartService;
    }
    async createCart(body, user) {
        return this._CartService.createCart(body, user);
    }
    async removeFromCart(body, user) {
        return this._CartService.removeFromCart(body, user);
    }
    async clearCart(user) {
        return this._CartService.clearCart(user);
    }
    async updateQuantityCart(body, user) {
        return this._CartService.updateQuantityCart(body, user);
    }
    async getCart(user) {
        return this._CartService.getCart(user);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)("create"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cartDto_1.cartDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "createCart", null);
__decorate([
    (0, common_1.Delete)("remove"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cartDto_1.removeFromCartDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "removeFromCart", null);
__decorate([
    (0, common_1.Delete)("clear"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "clearCart", null);
__decorate([
    (0, common_1.Patch)("update"),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cartDto_1.cartDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateQuantityCart", null);
__decorate([
    (0, common_1.Get)(""),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCart", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map