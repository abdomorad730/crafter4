import { Types } from "mongoose";
export declare class orderDto {
    phone: string;
    address: string;
    paymentMethod: string;
}
export declare class paymentDto {
    orderId: Types.ObjectId;
    code: string;
}
