import { ProductDocument } from "../models/index";
import { repository } from "./DB.repository";
import { Model } from "mongoose";
export declare class ProductRepository extends repository<ProductDocument> {
    private _ProductModel;
    constructor(_ProductModel: Model<ProductDocument>);
}
