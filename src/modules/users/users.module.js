"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const users_model_1 = require("../../DB/models/users.model");
const user_Repository_1 = require("../../DB/repository/user.Repository");
const tokenService_1 = require("../../common/service/tokenService");
const jwt_1 = require("@nestjs/jwt");
const repository_1 = require("../../DB/repository");
const models_1 = require("../../DB/models");
let userModule = class userModule {
};
exports.userModule = userModule;
exports.userModule = userModule = __decorate([
    (0, common_1.Module)({
        imports: [users_model_1.UserModel, models_1.OTPModel, models_1.ProductModel],
        controllers: [users_controller_1.userController],
        providers: [users_service_1.userService, user_Repository_1.userRepository, tokenService_1.tokenService, jwt_1.JwtService, repository_1.OTPRepository, repository_1.ProductRepository]
    })
], userModule);
//# sourceMappingURL=users.module.js.map