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
exports.couponDto = exports.fromDateValidation = exports.toDateValidation = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let toDateValidation = class toDateValidation {
    validate(toDate, args) {
        if (toDate < args.object['fromDate']) {
            return false;
        }
        return true;
    }
    defaultMessage(args) {
        return `${args.property}must be after ${args.object['fromDate']}`;
    }
};
exports.toDateValidation = toDateValidation;
exports.toDateValidation = toDateValidation = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], toDateValidation);
let fromDateValidation = class fromDateValidation {
    validate(fromDate, args) {
        return fromDate >= new Date();
    }
    defaultMessage(args) {
        return `FromDate must be in Future`;
    }
};
exports.fromDateValidation = fromDateValidation;
exports.fromDateValidation = fromDateValidation = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], fromDateValidation);
class couponDto {
    code;
    amount;
    fromDate;
    toDate;
}
exports.couponDto = couponDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], couponDto.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], couponDto.prototype, "amount", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.Validate)(fromDateValidation),
    __metadata("design:type", Date)
], couponDto.prototype, "fromDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.Validate)(toDateValidation),
    __metadata("design:type", Date)
], couponDto.prototype, "toDate", void 0);
//# sourceMappingURL=couponDto.js.map