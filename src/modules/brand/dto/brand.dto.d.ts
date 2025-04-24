import { Types } from "mongoose";
export declare class updateBrandDto {
    name: string;
}
export declare class brandDto {
    name: string;
    category: Types.ObjectId;
}
