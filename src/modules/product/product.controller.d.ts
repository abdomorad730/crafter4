import { ProductService } from './product.service';
import { UserDocument } from 'src/DB/models';
import { ProductDto, queryDto, updateProductDto } from './Dto/product.Dto';
import { Types } from 'mongoose';
export declare class ProductController {
    private readonly _ProductService;
    constructor(_ProductService: ProductService);
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
    updateProduct(body: updateProductDto, productId: Types.ObjectId, user: UserDocument, files: {
        imageCover?: Express.Multer.File[];
        images?: Express.Multer.File[];
    }): Promise<{
        product: import("mongoose").Document<unknown, {}, import("src/DB/models").Product> & import("src/DB/models").Product & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    deleteProduct(productId: Types.ObjectId, user: UserDocument): Promise<{
        msg: string;
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
    addOrdeleteProduct(productId: Types.ObjectId, user: UserDocument): Promise<{
        user: import("mongoose").Document<unknown, {}, import("src/DB/models").User> & import("src/DB/models").User & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getWashlist(user: UserDocument): Promise<{
        user: import("src/DB/models").User | null;
    }>;
}
