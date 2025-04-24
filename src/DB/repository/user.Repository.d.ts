import { User } from "../models/users.model";
import { repository } from "./DB.repository";
import { Model } from "mongoose";
export declare class userRepository extends repository<User> {
    private _userModel;
    constructor(_userModel: Model<User>);
}
