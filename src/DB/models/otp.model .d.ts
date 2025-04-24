import { HydratedDocument, Types } from 'mongoose';
export declare class OTP {
    otp: string;
    type: string;
    expireAt?: Date;
    userId: Types.ObjectId;
}
export declare const OTPSchema: import("mongoose").Schema<OTP, import("mongoose").Model<OTP, any, any, any, import("mongoose").Document<unknown, any, OTP> & OTP & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OTP, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OTP>> & import("mongoose").FlatRecord<OTP> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const OTPModel: import("@nestjs/common").DynamicModule;
export type OTPDocument = HydratedDocument<OTP>;
