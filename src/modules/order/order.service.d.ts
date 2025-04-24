import { CouponRepository, OrderRepository, ProductRepository } from 'src/DB/repository';
import { CartRepository } from 'src/DB/repository/cart.Repository';
import { orderDto, paymentDto } from './dto/orderDto';
import { UserDocument } from 'src/DB/models';
import { paymentService } from './sevice/payment.service';
export declare class OrderService {
    private readonly CartRepository;
    private readonly OrderRepository;
    private readonly CouponRepository;
    private readonly ProductRepository;
    private readonly paymentService;
    constructor(CartRepository: CartRepository, OrderRepository: OrderRepository, CouponRepository: CouponRepository, ProductRepository: ProductRepository, paymentService: paymentService);
    createOrder(body: orderDto, user: UserDocument): Promise<{
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
