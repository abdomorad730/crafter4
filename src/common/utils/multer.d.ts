import { Request } from "express";
interface multerOptions {
    filePath: string;
    allowedExtentions: string[];
}
export declare const MulterLocal: ({ filePath, allowedExtentions }: multerOptions) => {
    storage: import("multer").StorageEngine;
    fileFilter: (req: Request, file: Express.Multer.File, cb: Function) => void;
};
export declare const MulterHost: (allowedExtentions: string[]) => {
    storage: import("multer").StorageEngine;
    fileFilter: (req: Request, file: Express.Multer.File, cb: Function) => void;
};
export {};
