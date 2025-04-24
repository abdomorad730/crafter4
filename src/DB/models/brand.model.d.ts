import { HydratedDocument, Types } from 'mongoose';
export declare class Brand {
    name: string;
    slug: string;
    userId: Types.ObjectId;
    category: Types.ObjectId;
    image: object;
    customId: string;
}
export declare const BrandSchema: import("mongoose").Schema<Brand, import("mongoose").Model<Brand, any, any, any, import("mongoose").Document<unknown, any, Brand> & Brand & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Brand, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Brand>> & import("mongoose").FlatRecord<Brand> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const BrandModel: import("@nestjs/common").DynamicModule;
export type BrandDocument = HydratedDocument<Brand>;
