import { CouponDocument } from "../models/index";
import { repository } from "./DB.repository";
import { Model } from "mongoose";
export declare class CouponRepository extends repository<CouponDocument> {
    private _CouponModel;
    constructor(_CouponModel: Model<CouponDocument>);
}
