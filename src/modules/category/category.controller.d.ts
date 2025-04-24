import { CategoryService } from './category.service';
import { categoryDto } from './Dto/category.dto';
import { UserDocument } from 'src/DB/models';
import { updateCategoryDto } from './Dto/updateCategoryDto';
import { Types } from 'mongoose';
export declare class CategoryController {
    private readonly _CategoryService;
    constructor(_CategoryService: CategoryService);
    createCategory(body: categoryDto, user: UserDocument, file: Express.Multer.File): Promise<{
        category: import("mongoose").Document<unknown, {}, import("src/DB/models").Category> & import("src/DB/models").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    UpdateCategory(body: updateCategoryDto, id: Types.ObjectId, user: UserDocument, file: Express.Multer.File): Promise<{
        category: import("mongoose").Document<unknown, {}, import("src/DB/models").Category> & import("src/DB/models").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    DeleteCategory(id: Types.ObjectId, user: UserDocument): Promise<{
        category: import("mongoose").Document<unknown, {}, import("src/DB/models").Category> & import("src/DB/models").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getAllCategories(): Promise<{
        categories: [] | (import("mongoose").Document<unknown, {}, import("src/DB/models").Category> & import("src/DB/models").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
