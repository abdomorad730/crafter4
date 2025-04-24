import { CartService } from './cart.service';
import { cartDto, removeFromCartDto } from './dto/cartDto';
import { UserDocument } from 'src/DB/models';
export declare class CartController {
    private readonly _CartService;
    constructor(_CartService: CartService);
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
