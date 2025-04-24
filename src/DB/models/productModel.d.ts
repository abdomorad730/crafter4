import { HydratedDocument, Types } from 'mongoose';
export declare class Product {
    name: string;
    slug: string;
    describtion: string;
    customId: string;
    userId: Types.ObjectId;
    category: Types.ObjectId;
    subCategory: Types.ObjectId;
    brand: Types.ObjectId;
    imageCover: object;
    images: object[];
    price: number;
    discount: number;
    stock: number;
    quantity: number;
    subPrice: number;
    rate: number;
    avgRating: number;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, import("mongoose").Document<unknown, any, Product> & Product & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Product>> & import("mongoose").FlatRecord<Product> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ProductModel: import("@nestjs/common").DynamicModule;
export type ProductDocument = HydratedDocument<Product>;
