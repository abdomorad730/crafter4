import { couponDto } from './dto/couponDto';
import { UserDocument } from 'src/DB/models';
import { CouponRepository } from 'src/DB/repository';
export declare class CouponService {
    private readonly CouponRepository;
    constructor(CouponRepository: CouponRepository);
    createCoupon(body: couponDto, user: UserDocument): Promise<{
        coupon: import("mongoose").Document<unknown, {}, import("src/DB/models").Coupon> & import("src/DB/models").Coupon & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
}
