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
exports.forgetDto = exports.paramDto = exports.updatePassDtoDto = exports.resetDto = exports.confirmEmailDto = exports.userDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const custom_decorator_1 = require("../../../common/decorator/custom.decorator");
const types_1 = require("../../../common/types/types");
class userDto {
    DOB;
    email;
    password;
    cPassword;
    lastName;
    firstName;
    phone;
    address;
    gender;
    role;
}
exports.userDto = userDto;
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", Date)
], userDto.prototype, "DOB", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], userDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], userDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    (0, custom_decorator_1.customPasswordDecorator)({ message: 'password not match' }),
    __metadata("design:type", String)
], userDto.prototype, "cPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], userDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], userDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(11),
    (0, class_validator_1.MaxLength)(13),
    __metadata("design:type", String)
], userDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], userDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(types_1.userGender),
    __metadata("design:type", String)
], userDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(types_1.userRoles),
    __metadata("design:type", String)
], userDto.prototype, "role", void 0);
class confirmEmailDto {
    email;
    otp;
}
exports.confirmEmailDto = confirmEmailDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], confirmEmailDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], confirmEmailDto.prototype, "otp", void 0);
class resetDto {
    email;
    code;
    password;
    cPassword;
}
exports.resetDto = resetDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], resetDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], resetDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], resetDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    (0, custom_decorator_1.customPasswordDecorator)({ message: 'password not match' }),
    __metadata("design:type", String)
], resetDto.prototype, "cPassword", void 0);
class updatePassDtoDto {
    email;
    oldPassword;
    password;
    cPassword;
}
exports.updatePassDtoDto = updatePassDtoDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updatePassDtoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], updatePassDtoDto.prototype, "oldPassword", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], updatePassDtoDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    (0, custom_decorator_1.customPasswordDecorator)({ message: 'password not match' }),
    __metadata("design:type", String)
], updatePassDtoDto.prototype, "cPassword", void 0);
class paramDto {
    role;
}
exports.paramDto = paramDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(types_1.userQueryRoles),
    __metadata("design:type", String)
], paramDto.prototype, "role", void 0);
class forgetDto {
    email;
}
exports.forgetDto = forgetDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], forgetDto.prototype, "email", void 0);
//# sourceMappingURL=user.dto.js.map