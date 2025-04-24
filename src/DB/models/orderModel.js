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
exports.OrderModel = exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const index_1 = require("./index");
const types_1 = require("../../common/types/types");
let Order = class Order {
    userId;
    cartId;
    TotalPrice;
    phone;
    address;
    paymentMethod;
    status;
    arrivedAt;
    orderChanged;
    paymentIntent;
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: index_1.User.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: index_1.Cart.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "cartId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Order.prototype, "TotalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Order.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Order.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: types_1.paymentMethods, required: true }),
    __metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: types_1.status, required: true }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now() + 3 * 24 * 60 * 60 * 1000 }),
    __metadata("design:type", Date)
], Order.prototype, "arrivedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: {
            paidAt: Date,
            delveredAt: Date,
            deliveredBy: { type: mongoose_2.Types.ObjectId, ref: index_1.User.name },
            cancelledAt: Date,
            cancelledBy: { type: mongoose_2.Types.ObjectId, ref: index_1.User.name },
            refundedAt: Date,
            refundedBy: { type: mongoose_2.Types.ObjectId, ref: index_1.User.name },
        } }),
    __metadata("design:type", Object)
], Order.prototype, "orderChanged", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Order.prototype, "paymentIntent", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
exports.OrderModel = mongoose_1.MongooseModule.forFeature([{ name: Order.name, schema: exports.OrderSchema }]);
//# sourceMappingURL=orderModel.js.map