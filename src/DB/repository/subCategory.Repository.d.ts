import { SubCategoryDocument } from "../models/index";
import { repository } from "./DB.repository";
import { Model } from "mongoose";
export declare class SubCategoryRepository extends repository<SubCategoryDocument> {
    private _SubCategoryModel;
    constructor(_SubCategoryModel: Model<SubCategoryDocument>);
}
