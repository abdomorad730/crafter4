import { z } from "zod";
export declare const userValidation: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    cPassword: z.ZodString;
    age: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    cPassword: string;
    age: number;
}, {
    email: string;
    password: string;
    name: string;
    cPassword: string;
    age: number;
}>, {
    email: string;
    password: string;
    name: string;
    cPassword: string;
    age: number;
}, {
    email: string;
    password: string;
    name: string;
    cPassword: string;
    age: number;
}>;
export type userValidationDto = z.infer<typeof userValidation>;
