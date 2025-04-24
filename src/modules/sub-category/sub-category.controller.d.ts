import { subCategoryDto, updateSubCategoryDto } from './dto/subCategoryDto';
import { UserDocument } from 'src/DB/models';
import { Types } from 'mongoose';
import { SubCategoryService } from './sub-category.service';
export declare class SubCategoryController {
    private readonly SubCategoryService;
    constructor(SubCategoryService: SubCategoryService);
    createSubCategory(body: subCategoryDto, user: UserDocument, file: Express.Multer.File): Promise<{
        SubCategory: import("mongoose").Document<unknown, {}, import("src/DB/models").SubCategory> & import("src/DB/models").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    UpdateSubCategory(body: updateSubCategoryDto, id: Types.ObjectId, user: UserDocument, file: Express.Multer.File): Promise<{
        SubCategory: import("mongoose").Document<unknown, {}, import("src/DB/models").SubCategory> & import("src/DB/models").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    DeleteSubCategory(id: Types.ObjectId, user: UserDocument): Promise<{
        SubCategory: import("mongoose").Document<unknown, {}, import("src/DB/models").SubCategory> & import("src/DB/models").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getAllCategories(id: Types.ObjectId): Promise<{
        subCategories: [] | (import("mongoose").Document<unknown, {}, import("src/DB/models").SubCategory> & import("src/DB/models").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
