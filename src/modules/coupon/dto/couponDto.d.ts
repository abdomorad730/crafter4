import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
export declare class toDateValidation implements ValidatorConstraintInterface {
    validate(toDate: Date, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class fromDateValidation implements ValidatorConstraintInterface {
    validate(fromDate: Date, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class couponDto {
    code: string;
    amount: number;
    fromDate: Date;
    toDate: Date;
}
