"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModule = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("./DB/models");
const jwt_1 = require("@nestjs/jwt");
const tokenService_1 = require("./common/service/tokenService");
const repository_1 = require("./DB/repository");
let GlobalModule = class GlobalModule {
};
exports.GlobalModule = GlobalModule;
exports.GlobalModule = GlobalModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [models_1.UserModel],
        controllers: [],
        providers: [jwt_1.JwtService, tokenService_1.tokenService, repository_1.userRepository],
        exports: [jwt_1.JwtService, tokenService_1.tokenService, repository_1.userRepository, models_1.UserModel],
    })
], GlobalModule);
//# sourceMappingURL=global.module.js.map