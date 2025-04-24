import { couponDto } from './dto/couponDto';
import { UserDocument } from 'src/DB/models';
import { CouponService } from './coupon.service';
export declare class CouponController {
    private readonly _CouponService;
    constructor(_CouponService: CouponService);
    createCoupon(body: couponDto, user: UserDocument): Promise<{
        coupon: import("mongoose").Document<unknown, {}, import("src/DB/models").Coupon> & import("src/DB/models").Coupon & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
}
