import { Stripe } from 'stripe';
export declare class paymentService {
    constructor();
    private readonly stripe;
    createCheckoutSession({ customer_email, metadata, success_url, cancel_url, line_items, discounts }: {
        customer_email: any;
        metadata: any;
        success_url: any;
        cancel_url: any;
        line_items: any;
        discounts: any;
    }): Promise<Stripe.Response<Stripe.Checkout.Session>>;
    createCoupon(percent_off: number): Promise<Stripe.Response<Stripe.Coupon>>;
    refunded({ payment_intent, reason }: {
        payment_intent: any;
        reason: any;
    }): Promise<Stripe.Response<Stripe.Refund>>;
}
