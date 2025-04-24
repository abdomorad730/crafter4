import { CartDocument } from "../models/index";
import { repository } from "./DB.repository";
import { Model } from "mongoose";
export declare class CartRepository extends repository<CartDocument> {
    private _CartModel;
    constructor(_CartModel: Model<CartDocument>);
}
