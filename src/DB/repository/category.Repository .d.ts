import { CategoryDocument } from "../models/index";
import { repository } from "./DB.repository";
import { Model } from "mongoose";
export declare class CategoryRepository extends repository<CategoryDocument> {
    private _CategoryModel;
    constructor(_CategoryModel: Model<CategoryDocument>);
}
