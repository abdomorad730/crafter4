import { OrderService } from './order.service';
import { UserDocument } from 'src/DB/models';
import { orderDto, paymentDto } from './dto/orderDto';
export declare class OrderController {
    private readonly _OrderService;
    constructor(_OrderService: OrderService);
    createCoupon(body: orderDto, user: UserDocument): Promise<{
        order: import("mongoose").Document<unknown, {}, import("src/DB/models").Order> & import("src/DB/models").Order & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    createPaymentWithStripe(body: paymentDto, user: UserDocument): Promise<{
        data: import("stripe").Stripe.Response<import("stripe").Stripe.Checkout.Session>;
    }>;
    webhook(data: any): Promise<{
        order: (import("mongoose").Document<unknown, {}, import("src/DB/models").Order> & import("src/DB/models").Order & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null;
    }>;
    cancelPayment(body: paymentDto, user: UserDocument): Promise<{
        msg: string;
    }>;
    getAllorders(): Promise<{
        orders: [] | (import("mongoose").Document<unknown, {}, import("src/DB/models").Order> & import("src/DB/models").Order & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
