import { userRoles } from '../types/types';
export declare function Auth(...roles: userRoles[]): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
