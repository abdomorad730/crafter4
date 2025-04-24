import { OTP, OTPDocument } from "../models/index";
import { repository } from "./DB.repository";
import { Model, Types } from "mongoose";
import { userOtp } from "src/common/types/types";
interface otpOptions {
    otp: string;
    expireAt: Date;
    type: userOtp;
    userId: Types.ObjectId;
}
export declare class OTPRepository extends repository<OTPDocument> {
    private _OTPModel;
    constructor(_OTPModel: Model<OTPDocument>);
    createOtp({ otp, expireAt, type, userId }: otpOptions): Promise<import("mongoose").Document<unknown, {}, OTP> & OTP & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
}
export {};
