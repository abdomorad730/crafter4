import { userGender } from "src/common/types/types";
export declare class userDto {
    DOB: Date;
    email: string;
    password: string;
    cPassword: string;
    lastName: string;
    firstName: string;
    phone: string;
    address: string;
    gender: userGender;
    role: string;
}
export declare class confirmEmailDto {
    email: string;
    otp: string;
}
export declare class resetDto {
    email: string;
    code: string;
    password: string;
    cPassword: string;
}
export declare class updatePassDtoDto {
    email: string;
    oldPassword: string;
    password: string;
    cPassword: string;
}
export declare class paramDto {
    role: string;
}
export declare class forgetDto {
    email: string;
}
