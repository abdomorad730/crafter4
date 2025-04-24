import { userService } from "./users.service";
import { confirmEmailDto, forgetDto, paramDto, resetDto, updatePassDtoDto, userDto } from "./dto/user.dto";
import { UserDocument } from "src/DB/models/users.model";
export declare class userController {
    private readonly _userService;
    constructor(_userService: userService);
    SignUp(body: userDto, ss: paramDto): Promise<UserDocument>;
    profile(user: UserDocument): any;
    confirmEmail(body: confirmEmailDto): Promise<UserDocument>;
    SignIn(body: userDto): Promise<UserDocument>;
    forgetPassword(body: forgetDto): any;
    resetPassword(body: resetDto): any;
    updatePassword(body: updatePassDtoDto, user: UserDocument): any;
    dashboard(user: UserDocument): any;
}
