"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const common_1 = require("@nestjs/common");
const hash_1 = require("../../common/security/hash");
const tokenService_1 = require("../../common/service/tokenService");
const types_1 = require("../../common/types/types");
const sendEmail_1 = require("../../common/utils/sendEmail");
const repository_1 = require("../../DB/repository");
const user_Repository_1 = require("../../DB/repository/user.Repository");
let userService = class userService {
    userRepository;
    tokenService;
    OTPRepository;
    ProductRepository;
    constructor(userRepository, tokenService, OTPRepository, ProductRepository) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
        this.OTPRepository = OTPRepository;
        this.ProductRepository = ProductRepository;
    }
    async dashboard(user) {
        const data = await Promise.allSettled([
            await this.ProductRepository.find({}),
            await this.userRepository.find({})
        ]);
        return { data };
    }
    async SignUp(body, ss) {
        try {
            const { role } = ss;
            const { firstName, lastName, email, password, gender, address, phone, DOB } = body;
            const userExist = await this.userRepository.findOne({ email });
            if (userExist) {
                throw new common_1.ConflictException('email already exist');
            }
            const user = await this.userRepository.create({ firstName, lastName, email, password, gender, address, phone, DOB, role });
            const code = Math.floor(Math.random() * (999 - 8) + 254).toString();
            await this.OTPRepository.createOtp({ otp: (0, hash_1.hash)(code, 12), userId: user['_id'], expireAt: new Date(Date.now() + 1000 * 60 * 10), type: types_1.userOtp.email });
            (0, sendEmail_1.sendEmail)({ to: email, subject: 'confirm email', html: `<h1>${code}</h1>` });
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async forgetPassword(body) {
        const { email } = body;
        const user = await this.userRepository.findOne({ email, confirmed: true });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        await this.OTPRepository.findOneAndDelete({ userId: user['_id'], type: types_1.userOtp.password });
        const code = Math.floor(Math.random() * (999 - 8) + 254).toString();
        await this.OTPRepository.createOtp({ otp: (0, hash_1.hash)(code, 12), userId: user['_id'], expireAt: new Date(Date.now() + 1000 * 60 * 10), type: types_1.userOtp.password });
        (0, sendEmail_1.sendEmail)({ to: email, subject: 'forget password', html: `<h1>${code}</h1>` });
        return { message: 'done' };
    }
    async resetPassword(body) {
        const { email, code, password, cPassword } = body;
        const user = await this.userRepository.findOne({ email, confirmed: true });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        const otp = await this.OTPRepository.findOne({ userId: user['_id'], type: types_1.userOtp.password });
        if (!otp) {
            throw new common_1.NotFoundException('otp not found');
        }
        const compareOTP = (0, hash_1.verifyHash)(code, otp.otp);
        if (!compareOTP) {
            throw new common_1.ForbiddenException('invalid code');
        }
        const hashPass = (0, hash_1.hash)(password, 12);
        const newUser = await this.userRepository.findOneAndUpdate({ email }, { password: hashPass });
        await this.OTPRepository.findOneAndDelete({ userId: user['_id'], type: types_1.userOtp.password });
        return { message: 'done', user: newUser };
    }
    async updatePassword(body, user) {
        const { oldPassword, password, cPassword } = body;
        const comparePassword = (0, hash_1.verifyHash)(oldPassword, user.password);
        if (!comparePassword) {
            throw new common_1.ForbiddenException('incorrect Password');
        }
        if (password != cPassword) {
            throw new common_1.ForbiddenException(' Password and cPassword not match');
        }
        const hashPass = (0, hash_1.hash)(password, 12);
        const newUser = await this.userRepository.findOneAndUpdate({ _id: user._id }, { password: hashPass });
        return { message: 'done', user: newUser };
    }
    async confirmEmail(body) {
        try {
            const { email, otp } = body;
            const user = await this.userRepository.findOne({ email, confirmed: false });
            if (!user) {
                throw new common_1.NotFoundException('user Not found');
            }
            const otpExist = await this.OTPRepository.findOne({ userId: user['_id'], type: types_1.userOtp.email });
            if (!otpExist) {
                throw new common_1.ForbiddenException('otp not exist');
            }
            if (!(0, hash_1.verifyHash)(otp, otpExist.otp)) {
                throw new common_1.ConflictException('otp is incorrect');
            }
            const expireAt = otpExist.expireAt || 17779034235;
            if (new Date() > expireAt) {
                throw new common_1.ConflictException('otp is expired');
            }
            const newUser = await this.userRepository.findOneAndUpdate({ email }, { confirmed: true });
            await this.OTPRepository.findOneAndDelete({ _id: otpExist._id });
            return newUser;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async SignIn(body) {
        try {
            const { email, password } = body;
            const userExist = await this.userRepository.findOne({ email, confirmed: true });
            if (!userExist) {
                throw new common_1.ConflictException('email not exist');
            }
            if (!(0, hash_1.verifyHash)(password, userExist.password)) {
                throw new common_1.ConflictException('password is incorrect');
            }
            const access_token = this.tokenService.generateToken({ email, id: userExist['_id'] }, { secret: process.env.SECRET_KEY, expiresIn: '1w' });
            const refresh_token = this.tokenService.generateToken({ email, id: userExist['_id'] }, { secret: process.env.SECRET_KEY, expiresIn: '1y' });
            return { msg: 'done', access_token, refresh_token };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
exports.userService = userService;
exports.userService = userService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_Repository_1.userRepository,
        tokenService_1.tokenService,
        repository_1.OTPRepository,
        repository_1.ProductRepository])
], userService);
//# sourceMappingURL=users.service.js.map