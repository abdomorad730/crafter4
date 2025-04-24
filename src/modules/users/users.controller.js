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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const user_dto_1 = require("./dto/user.dto");
const types_1 = require("../../common/types/types");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const auth_decorator_1 = require("../../common/decorator/auth.decorator");
let userController = class userController {
    _userService;
    constructor(_userService) {
        this._userService = _userService;
    }
    SignUp(body, ss) {
        return this._userService.SignUp(body, ss);
    }
    profile(user) {
        return { user };
    }
    confirmEmail(body) {
        return this._userService.confirmEmail(body);
    }
    SignIn(body) {
        return this._userService.SignIn(body);
    }
    forgetPassword(body) {
        return this._userService.forgetPassword(body);
    }
    resetPassword(body) {
        return this._userService.resetPassword(body);
    }
    updatePassword(body, user) {
        return this._userService.updatePassword(body, user);
    }
    dashboard(user) {
        return this._userService.dashboard(user);
    }
};
exports.userController = userController;
__decorate([
    (0, common_1.Post)('/signup/:role'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userDto, user_dto_1.paramDto]),
    __metadata("design:returntype", Promise)
], userController.prototype, "SignUp", null);
__decorate([
    (0, auth_decorator_1.Auth)(types_1.userRoles.user, types_1.userRoles.crafter, types_1.userRoles.admin),
    (0, common_1.Get)('/profile'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], userController.prototype, "profile", null);
__decorate([
    (0, common_1.Patch)('/confirmMail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.confirmEmailDto]),
    __metadata("design:returntype", Promise)
], userController.prototype, "confirmEmail", null);
__decorate([
    (0, common_1.Post)('/signin'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userDto]),
    __metadata("design:returntype", Promise)
], userController.prototype, "SignIn", null);
__decorate([
    (0, common_1.Post)('/forgetPassword'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.forgetDto]),
    __metadata("design:returntype", Object)
], userController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Patch)('/resetPassword'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.resetDto]),
    __metadata("design:returntype", Object)
], userController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Patch)('/UpdatePassword'),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin, types_1.userRoles.user, types_1.userRoles.crafter),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.updatePassDtoDto, Object]),
    __metadata("design:returntype", Object)
], userController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Get)('/dashboard'),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(types_1.userRoles.admin),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], userController.prototype, "dashboard", null);
exports.userController = userController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.userService])
], userController);
//# sourceMappingURL=users.controller.js.map