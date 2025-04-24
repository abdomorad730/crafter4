"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
exports.userValidation = zod_1.z.object({
    name: zod_1.z.string().min(3),
    email: zod_1.z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    password: zod_1.z.string().min(8),
    cPassword: zod_1.z.string().min(8),
    age: zod_1.z.number()
}).superRefine((value, ctx) => {
    if (value.password !== value.cPassword) {
        throw new common_1.ForbiddenException('invalidPassword or cpassword');
    }
});
//# sourceMappingURL=userValidation.js.map