import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class customPasswordConstraint implements ValidatorConstraintInterface {
    validate(cPassword: string, args: ValidationArguments): boolean;
}
export declare function customPasswordDecorator(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
