import { Types } from "mongoose";
export declare class updateSubCategoryDto {
    name: string;
}
export declare class subCategoryDto {
    name: string;
    category: Types.ObjectId;
}
