"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = Auth;
const common_1 = require("@nestjs/common");
const userGuard_1 = require("../guard/userGuard");
const authorization_1 = require("../guard/authorization");
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', roles), (0, common_1.UseGuards)(userGuard_1.AuthGuard, authorization_1.RolesGuard));
}
//# sourceMappingURL=auth.decorator.js.map