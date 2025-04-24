"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.paymentMethods = exports.userOtp = exports.userGender = exports.userQueryRoles = exports.userRoles = void 0;
var userRoles;
(function (userRoles) {
    userRoles["user"] = "user";
    userRoles["admin"] = "admin";
    userRoles["crafter"] = "crafter";
})(userRoles || (exports.userRoles = userRoles = {}));
var userQueryRoles;
(function (userQueryRoles) {
    userQueryRoles["user"] = "user";
    userQueryRoles["crafter"] = "crafter";
})(userQueryRoles || (exports.userQueryRoles = userQueryRoles = {}));
var userGender;
(function (userGender) {
    userGender["male"] = "male";
    userGender["female"] = "female";
})(userGender || (exports.userGender = userGender = {}));
var userOtp;
(function (userOtp) {
    userOtp["email"] = "email";
    userOtp["password"] = "password";
})(userOtp || (exports.userOtp = userOtp = {}));
var paymentMethods;
(function (paymentMethods) {
    paymentMethods["cash"] = "cash";
    paymentMethods["card"] = "card";
})(paymentMethods || (exports.paymentMethods = paymentMethods = {}));
var status;
(function (status) {
    status["pending"] = "pending";
    status["placed"] = "placed";
    status["onWay"] = "onWay";
    status["delivered"] = "delivered";
    status["cancelled"] = "cancelled";
    status["rejected"] = "rejected";
    status["refunded"] = "refunded";
    status["paid"] = "paid";
})(status || (exports.status = status = {}));
//# sourceMappingURL=types.js.map