import { categoryDto } from './Dto/category.dto';
import { UserDocument } from 'src/DB/models';
import { CategoryRepository } from 'src/DB/repository';
import { UploadedFileService } from 'src/common/service/uploadService';
import { Types } from 'mongoose';
export declare class CategoryService {
    private readonly CategoryRepository;
    private readonly UploadedFileService;
    constructor(CategoryRepository: CategoryRepository, UploadedFileService: UploadedFileService);
    createCategory(body: categoryDto, user: UserDocument, file: Express.Multer.File): Promise<{
        category: import("mongoose").Document<unknown, {}, import("src/DB/models").Category> & import("src/DB/models").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    UpdateCategory(body: categoryDto, user: UserDocument, file: Express.Multer.File, id: Types.ObjectId): Promise<{
        category: import("mongoose").Document<unknown, {}, import("src/DB/models").Category> & import("src/DB/models").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    DeleteCategory(user: UserDocument, id: Types.ObjectId): Promise<{
        category: import("mongoose").Document<unknown, {}, import("src/DB/models").Category> & import("src/DB/models").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getAllCategory(): Promise<{
        categories: [] | (import("mongoose").Document<unknown, {}, import("src/DB/models").Category> & import("src/DB/models").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
