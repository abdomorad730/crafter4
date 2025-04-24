import { HydratedDocument, Types } from 'mongoose';
import { userGender } from 'src/common/types/types';
export declare class User {
    firstName: string;
    lastName: string;
    name: string;
    DOB: Date;
    email: string;
    password: string;
    phone: string;
    address: string;
    gender: userGender;
    confirmed: boolean;
    isDeleted: boolean;
    role: string;
    washlist: Types.ObjectId[];
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UserModel: import("@nestjs/common").DynamicModule;
export type UserDocument = HydratedDocument<User>;
