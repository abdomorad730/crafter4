"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterHost = exports.MulterLocal = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const multer_1 = require("multer");
const path_1 = require("path");
const MulterLocal = ({ filePath = 'generals', allowedExtentions }) => {
    const storage = (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const destPath = (0, path_1.resolve)(`uplodes/${filePath}`);
            if (!(0, fs_1.existsSync)(destPath)) {
                (0, fs_1.mkdirSync)(destPath, { recursive: true });
            }
            cb(null, destPath);
        }, filename: (req, file, cb) => {
            const filename = `${Date.now()}-${file.originalname}`;
            cb(null, filename);
        }
    });
    const fileFilter = (req, file, cb) => {
        if (!allowedExtentions.includes(file.mimetype)) {
            cb(new common_1.BadRequestException('unallowed file'));
        }
        cb(null, true);
    };
    return { storage, fileFilter };
};
exports.MulterLocal = MulterLocal;
const MulterHost = (allowedExtentions) => {
    const storage = (0, multer_1.diskStorage)({});
    const fileFilter = (req, file, cb) => {
        if (!allowedExtentions.includes(file.mimetype)) {
            cb(new common_1.BadRequestException('unallowed file'));
        }
        cb(null, true);
    };
    return { storage, fileFilter };
};
exports.MulterHost = MulterHost;
//# sourceMappingURL=multer.js.map