import { UploadedFileService } from 'src/common/service/uploadService';
import { BrandRepository, CategoryRepository } from 'src/DB/repository';
import { brandDto, updateBrandDto } from './dto/brand.dto';
import { UserDocument } from 'src/DB/models';
import { Types } from 'mongoose';
export declare class BrandService {
    private readonly CategoryRepository;
    private readonly BrandRepository;
    private readonly UploadedFileService;
    constructor(CategoryRepository: CategoryRepository, BrandRepository: BrandRepository, UploadedFileService: UploadedFileService);
    createBrand(body: brandDto, user: UserDocument, file: Express.Multer.File): Promise<{
        Brand: import("mongoose").Document<unknown, {}, import("src/DB/models").Brand> & import("src/DB/models").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    UpdateBrand(body: updateBrandDto, user: UserDocument, file: Express.Multer.File, id: Types.ObjectId): Promise<{
        Brand: import("mongoose").Document<unknown, {}, import("src/DB/models").Brand> & import("src/DB/models").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    DeleteBrand(user: UserDocument, id: Types.ObjectId): Promise<{
        Brand: import("mongoose").Document<unknown, {}, import("src/DB/models").Brand> & import("src/DB/models").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getAllBrand(): Promise<{
        brands: [] | (import("mongoose").Document<unknown, {}, import("src/DB/models").Brand> & import("src/DB/models").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
