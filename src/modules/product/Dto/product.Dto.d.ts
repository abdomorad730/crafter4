import { Types } from "mongoose";
import { QueryFilterDto } from "src/common/utils/QueryFilterDto";
export declare class ProductDto {
    name: string;
    describtion: string;
    price: number;
    category: Types.ObjectId;
    subCategory: Types.ObjectId;
    brand: Types.ObjectId;
    imageCover: object;
    discount: number;
    stock: number;
    quantity: number;
    rate: number;
    avgRating: number;
    images: object[];
}
export declare class updateProductDto {
    name: string;
    describtion: string;
    price: number;
    category: Types.ObjectId;
    subCategory: Types.ObjectId;
    brand: Types.ObjectId;
    imageCover: object;
    discount: number;
    stock: number;
    quantity: number;
    rate: number;
    avgRating: number;
    images: object[];
}
export declare class queryDto extends QueryFilterDto {
    name: string;
}
