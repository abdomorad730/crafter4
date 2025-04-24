import { tokenService } from "src/common/service/tokenService";
import { User, UserDocument } from "src/DB/models/users.model";
import { OTPRepository, ProductRepository } from "src/DB/repository";
import { userRepository } from "src/DB/repository/user.Repository";
import { confirmEmailDto, forgetDto, paramDto, resetDto, updatePassDtoDto, userDto } from "./dto/user.dto";
export declare class userService {
    private readonly userRepository;
    private readonly tokenService;
    private readonly OTPRepository;
    private readonly ProductRepository;
    constructor(userRepository: userRepository, tokenService: tokenService, OTPRepository: OTPRepository, ProductRepository: ProductRepository);
    dashboard(user: UserDocument): Promise<{
        data: [PromiseSettledResult<[] | (import("mongoose").Document<unknown, {}, import("../../DB/models").Product> & import("../../DB/models").Product & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>, PromiseSettledResult<[] | User[]>];
    }>;
    SignUp(body: userDto, ss: paramDto): Promise<any>;
    forgetPassword(body: forgetDto): Promise<{
        message: string;
    }>;
    resetPassword(body: resetDto): Promise<{
        message: string;
        user: User | null;
    }>;
    updatePassword(body: updatePassDtoDto, user: UserDocument): Promise<{
        message: string;
        user: User | null;
    }>;
    confirmEmail(body: confirmEmailDto): Promise<any>;
    SignIn(body: any): Promise<any>;
}
