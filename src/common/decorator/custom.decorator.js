"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customPasswordConstraint = void 0;
exports.customPasswordDecorator = customPasswordDecorator;
const class_validator_1 = require("class-validator");
let customPasswordConstraint = class customPasswordConstraint {
    validate(cPassword, args) {
        console.log(cPassword, args);
        if (cPassword !== args.object[args.constraints[0]]) {
            return false;
        }
        return true;
    }
    ;
};
exports.customPasswordConstraint = customPasswordConstraint;
exports.customPasswordConstraint = customPasswordConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], customPasswordConstraint);
function customPasswordDecorator(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: ['password'],
            validator: customPasswordConstraint,
        });
    };
}
//# sourceMappingURL=custom.decorator.js.map