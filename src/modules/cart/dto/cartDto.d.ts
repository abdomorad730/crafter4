import { Types } from "mongoose";
export declare class cartDto {
    productId: Types.ObjectId;
    quantity: number;
}
export declare class removeFromCartDto {
    productId: Types.ObjectId;
}
