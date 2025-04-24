import { HydratedDocument, Types } from 'mongoose';
export declare class Category {
    name: string;
    slug: string;
    userId: Types.ObjectId;
    image: object;
    customId: string;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, import("mongoose").Document<unknown, any, Category> & Category & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Category>> & import("mongoose").FlatRecord<Category> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CategoryModel: import("@nestjs/common").DynamicModule;
export type CategoryDocument = HydratedDocument<Category>;
