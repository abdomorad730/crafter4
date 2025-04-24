import { OrderDocument } from "../models/index";
import { repository } from "./DB.repository";
import { Model } from "mongoose";
export declare class OrderRepository extends repository<OrderDocument> {
    private _OrderModel;
    constructor(_OrderModel: Model<OrderDocument>);
}
