import { ProductRepository } from 'src/DB/repository';
import { cartDto, removeFromCartDto } from './dto/cartDto';
import { UserDocument } from 'src/DB/models';
import { CartRepository } from 'src/DB/repository/cart.Repository';
export declare class CartService {
    private readonly CartRepository;
    private readonly ProductRepository;
    constructor(CartRepository: CartRepository, ProductRepository: ProductRepository);
    createCart(body: cartDto, user: UserDocument): Promise<(import("mongoose").Document<unknown, {}, import("src/DB/models").Cart> & import("src/DB/models").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        cart: import("mongoose").Document<unknown, {}, import("src/DB/models").Cart> & import("src/DB/models").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    removeFromCart(body: removeFromCartDto, user: UserDocument): Promise<{
        cart: import("mongoose").Document<unknown, {}, import("src/DB/models").Cart> & import("src/DB/models").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    clearCart(user: UserDocument): Promise<{
        cart: import("mongoose").Document<unknown, {}, import("src/DB/models").Cart> & import("src/DB/models").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateQuantityCart(body: cartDto, user: UserDocument): Promise<{
        cart: import("mongoose").Document<unknown, {}, import("src/DB/models").Cart> & import("src/DB/models").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getCart(user: UserDocument): Promise<{
        cart: [] | (import("mongoose").Document<unknown, {}, import("src/DB/models").Cart> & import("src/DB/models").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
