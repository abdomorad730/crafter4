import { UploadApiOptions } from "cloudinary";
export declare class UploadedFileService {
    constructor();
    private cloudnairy;
    uploadFile(file: Express.Multer.File, options: UploadApiOptions): Promise<import("cloudinary").UploadApiResponse>;
    uploadFiles(files: Express.Multer.File[], options: UploadApiOptions): Promise<{
        secure_url: string;
        public_id: string;
    }[]>;
    deleteFile(public_id: string): Promise<any>;
    deleteFolder(filePath: string): Promise<void>;
}
