"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryConfig = void 0;
const cloudinary_1 = require("cloudinary");
const cloudinaryConfig = () => {
    cloudinary_1.v2.config({
        api_key: process.env.API_KEY,
        cloud_name: process.env.CLOUD_NAME,
        api_secret: process.env.SECRET_KEY2
    });
    return cloudinary_1.v2;
};
exports.cloudinaryConfig = cloudinaryConfig;
//# sourceMappingURL=cloudnairy.js.map