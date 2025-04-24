import { BrandDocument } from "../models/index";
import { repository } from "./DB.repository";
import { Model } from "mongoose";
export declare class BrandRepository extends repository<BrandDocument> {
    private _BrandModel;
    constructor(_BrandModel: Model<BrandDocument>);
}
