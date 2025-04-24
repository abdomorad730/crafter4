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
exports.CartModel = exports.CartSchema = exports.Cart = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_model_1 = require("./users.model");
const productModel_1 = require("./productModel");
let Cart = class Cart {
    userId;
    products;
    subTotal;
};
exports.Cart = Cart;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: users_model_1.User.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Cart.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)([{
            productId: { type: mongoose_2.Types.ObjectId, ref: productModel_1.Product.name },
            quantity: { type: Number, required: true },
            finalPrice: { type: Number, required: true },
        }]),
    __metadata("design:type", Array)
], Cart.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Cart.prototype, "subTotal", void 0);
exports.Cart = Cart = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
], Cart);
exports.CartSchema = mongoose_1.SchemaFactory.createForClass(Cart);
exports.CartSchema.pre("save", function (next) {
    this.subTotal = this.products.reduce((acc, prod) => acc + (prod.finalPrice * prod.quantity), 0);
    next();
});
exports.CartModel = mongoose_1.MongooseModule.forFeature([{ name: Cart.name, schema: exports.CartSchema }]);
//# sourceMappingURL=cartModel.js.map