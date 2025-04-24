import { BrandService } from './brand.service';
import { UserDocument } from 'src/DB/models';
import { brandDto, updateBrandDto } from './dto/brand.dto';
import { Types } from 'mongoose';
export declare class BrandController {
    private readonly _BrandService;
    constructor(_BrandService: BrandService);
    createBrand(body: brandDto, user: UserDocument, file: Express.Multer.File): Promise<{
        Brand: import("mongoose").Document<unknown, {}, import("src/DB/models").Brand> & import("src/DB/models").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    UpdateBrand(body: updateBrandDto, id: Types.ObjectId, user: UserDocument, file: Express.Multer.File): Promise<{
        Brand: import("mongoose").Document<unknown, {}, import("src/DB/models").Brand> & import("src/DB/models").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    DeleteBrand(id: Types.ObjectId, user: UserDocument): Promise<{
        Brand: import("mongoose").Document<unknown, {}, import("src/DB/models").Brand> & import("src/DB/models").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getAllCategories(): Promise<{
        brands: [] | (import("mongoose").Document<unknown, {}, import("src/DB/models").Brand> & import("src/DB/models").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
