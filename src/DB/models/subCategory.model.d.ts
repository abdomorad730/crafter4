import { HydratedDocument, Types } from 'mongoose';
export declare class SubCategory {
    name: string;
    slug: string;
    userId: Types.ObjectId;
    category: Types.ObjectId;
    image: object;
}
export declare const SubCategorySchema: import("mongoose").Schema<SubCategory, import("mongoose").Model<SubCategory, any, any, any, import("mongoose").Document<unknown, any, SubCategory> & SubCategory & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SubCategory, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SubCategory>> & import("mongoose").FlatRecord<SubCategory> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const SubCategoryModel: import("@nestjs/common").DynamicModule;
export type SubCategoryDocument = HydratedDocument<SubCategory>;
