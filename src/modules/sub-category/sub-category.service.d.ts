import { UploadedFileService } from 'src/common/service/uploadService';
import { CategoryRepository, SubCategoryRepository } from 'src/DB/repository';
import { subCategoryDto, updateSubCategoryDto } from './dto/subCategoryDto';
import { UserDocument } from 'src/DB/models';
import { Types } from 'mongoose';
export declare class SubCategoryService {
    private readonly CategoryRepository;
    private readonly SubCategoryRepository;
    private readonly UploadedFileService;
    constructor(CategoryRepository: CategoryRepository, SubCategoryRepository: SubCategoryRepository, UploadedFileService: UploadedFileService);
    createSubCategory(body: subCategoryDto, user: UserDocument, file: Express.Multer.File): Promise<{
        SubCategory: import("mongoose").Document<unknown, {}, import("src/DB/models").SubCategory> & import("src/DB/models").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    UpdateSubCategory(body: updateSubCategoryDto, user: UserDocument, file: Express.Multer.File, id: Types.ObjectId): Promise<{
        SubCategory: import("mongoose").Document<unknown, {}, import("src/DB/models").SubCategory> & import("src/DB/models").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    DeleteSubCategory(user: UserDocument, id: Types.ObjectId): Promise<{
        SubCategory: import("mongoose").Document<unknown, {}, import("src/DB/models").SubCategory> & import("src/DB/models").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getAllSubCategory(id: Types.ObjectId): Promise<{
        subCategories: [] | (import("mongoose").Document<unknown, {}, import("src/DB/models").SubCategory> & import("src/DB/models").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
