"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyHash = exports.hash = void 0;
const bcrypt = require("bcrypt");
const hash = (plainText, saltRoundes) => {
    return bcrypt.hashSync(plainText, saltRoundes);
};
exports.hash = hash;
const verifyHash = (plainText, hash) => {
    return bcrypt.compareSync(plainText, hash);
};
exports.verifyHash = verifyHash;
//# sourceMappingURL=hash.js.map