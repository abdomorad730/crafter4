import { HydratedDocument, Types } from "mongoose";
export declare class Order {
    userId: Types.ObjectId;
    cartId: Types.ObjectId;
    TotalPrice: number;
    phone: string;
    address: string;
    paymentMethod: string;
    status: string;
    arrivedAt: Date;
    orderChanged: object;
    paymentIntent: string;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, import("mongoose").Document<unknown, any, Order> & Order & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Order>> & import("mongoose").FlatRecord<Order> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const OrderModel: import("@nestjs/common").DynamicModule;
export type OrderDocument = HydratedDocument<Order>;
