import { ProductDto, queryDto, updateProductDto } from './Dto/product.Dto';
import { UserDocument } from 'src/DB/models';
import { UploadedFileService } from 'src/common/service/uploadService';
import { BrandRepository, CategoryRepository, ProductRepository, SubCategoryRepository, userRepository } from 'src/DB/repository';
import { Types } from 'mongoose';
export declare class ProductService {
    private readonly ProductRepository;
    private readonly CategoryRepository;
    private readonly BrandRepository;
    private readonly SubCategoryRepository;
    private readonly userRepository;
    private readonly UploadedFileService;
    constructor(ProductRepository: ProductRepository, CategoryRepository: CategoryRepository, BrandRepository: BrandRepository, SubCategoryRepository: SubCategoryRepository, userRepository: userRepository, UploadedFileService: UploadedFileService);
    createProduct(body: ProductDto, user: UserDocument, files: {
        imageCover?: Express.Multer.File[];
        images?: Express.Multer.File[];
    }): Promise<{
        product: import("mongoose").Document<unknown, {}, import("src/DB/models").Product> & import("src/DB/models").Product & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateProduct(body: updateProductDto, user: UserDocument, files: {
        imageCover?: Express.Multer.File[];
        images?: Express.Multer.File[];
    }, productId: Types.ObjectId): Promise<{
        product: import("mongoose").Document<unknown, {}, import("src/DB/models").Product> & import("src/DB/models").Product & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getAllProducts(query: queryDto): Promise<{
        products: [] | (import("mongoose").Document<unknown, {}, import("src/DB/models").Product> & import("src/DB/models").Product & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addOrdeleteProduct(user: UserDocument, productId: Types.ObjectId): Promise<{
        user: import("mongoose").Document<unknown, {}, import("src/DB/models").User> & import("src/DB/models").User & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getWashlist(user: UserDocument): Promise<{
        user: import("src/DB/models").User | null;
    }>;
    deleteProduct(user: UserDocument, productId: Types.ObjectId): Promise<{
        msg: string;
        product: import("mongoose").Document<unknown, {}, import("src/DB/models").Product> & import("src/DB/models").Product & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
}
