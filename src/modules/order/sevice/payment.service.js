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
exports.paymentService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
let paymentService = class paymentService {
    constructor() { }
    stripe = new stripe_1.Stripe(process.env.stripe_key);
    async createCheckoutSession({ customer_email, metadata, success_url, cancel_url, line_items, discounts }) {
        return await this.stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: "payment",
            customer_email,
            metadata,
            success_url,
            cancel_url,
            line_items,
            discounts
        });
    }
    async createCoupon(percent_off) {
        return await this.stripe.coupons.create({
            percent_off,
            duration: "once"
        });
    }
    async refunded({ payment_intent, reason }) {
        return await this.stripe.refunds.create({
            payment_intent,
            reason
        });
    }
};
exports.paymentService = paymentService;
exports.paymentService = paymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], paymentService);
//# sourceMappingURL=payment.service.js.map