"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./modules/users/users.module");
const category_module_1 = require("./modules/category/category.module");
const product_module_1 = require("./modules/product/product.module");
const global_module_1 = require("./global.module");
const coupon_module_1 = require("./modules/coupon/coupon.module");
const cart_module_1 = require("./modules/cart/cart.module");
const order_module_1 = require("./modules/order/order.module");
const brand_module_1 = require("./modules/brand/brand.module");
const sub_category_module_1 = require("./modules/sub-category/sub-category.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot(process.env.URL_DB), global_module_1.GlobalModule, users_module_1.userModule, category_module_1.CategoryModule, product_module_1.ProductModule, coupon_module_1.CouponModule, cart_module_1.CartModule, order_module_1.OrderModule, brand_module_1.BrandModule, sub_category_module_1.SubCategoryModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map