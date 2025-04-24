import { HydratedDocument, Types } from "mongoose";
export declare class Cart {
    userId: Types.ObjectId;
    products: {
        productId: Types.ObjectId;
        quantity: number;
        finalPrice: number;
    }[];
    subTotal: number;
}
export declare const CartSchema: import("mongoose").Schema<Cart, import("mongoose").Model<Cart, any, any, any, import("mongoose").Document<unknown, any, Cart> & Cart & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cart, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Cart>> & import("mongoose").FlatRecord<Cart> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CartModel: import("@nestjs/common").DynamicModule;
export type CartDocument = HydratedDocument<Cart>;
