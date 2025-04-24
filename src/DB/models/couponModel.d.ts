import { HydratedDocument, Types } from "mongoose";
export declare class Coupon {
    code: string;
    amount: number;
    userId: Types.ObjectId;
    fromDate: Date;
    toDate: Date;
    usedBy: Types.ObjectId[];
}
export declare const CouponSchema: import("mongoose").Schema<Coupon, import("mongoose").Model<Coupon, any, any, any, import("mongoose").Document<unknown, any, Coupon> & Coupon & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Coupon, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Coupon>> & import("mongoose").FlatRecord<Coupon> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CouponModel: import("@nestjs/common").DynamicModule;
export type CouponDocument = HydratedDocument<Coupon>;
