"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const CryptoJS = require("crypto-js");
const encrypt = (plainText, secret = process.env.encrypt_key) => {
    return CryptoJS.AES.encrypt(plainText, secret).toString();
};
exports.encrypt = encrypt;
const decrypt = (plainText, secret = process.env.encrypt_key) => {
    const bytes = CryptoJS.AES.decrypt(plainText, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
};
exports.decrypt = decrypt;
//# sourceMappingURL=crypto.js.map