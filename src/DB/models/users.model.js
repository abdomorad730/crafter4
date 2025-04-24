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
exports.UserModel = exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hash_1 = require("../../common/security/hash");
const crypto_1 = require("../../common/service/crypto");
const types_1 = require("../../common/types/types");
const productModel_1 = require("./productModel");
let User = class User {
    firstName;
    lastName;
    name;
    DOB;
    email;
    password;
    phone;
    address;
    gender;
    confirmed;
    isDeleted;
    role;
    washlist;
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ type: String, minlength: 3, required: true }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, minlength: 3, required: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], User.prototype, "DOB", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, minlength: 8 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: types_1.userGender }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "confirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: types_1.userRoles, default: types_1.userRoles.user }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: productModel_1.Product.name }),
    __metadata("design:type", Array)
], User.prototype, "washlist", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.pre("save", function (next) {
    if (this.isDirectModified("password")) {
        this.password = (0, hash_1.hash)(this.password, 12);
    }
    if (this.isDirectModified("phone")) {
        this.phone = (0, crypto_1.encrypt)(this.phone, process.env.encrypt_key);
    }
    next();
});
exports.UserModel = mongoose_1.MongooseModule.forFeature([{ name: User.name, schema: exports.UserSchema }]);
//# sourceMappingURL=users.model.js.map