"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = require("nodemailer");
const sendEmail = async (data) => {
    const transporter = (0, nodemailer_1.createTransport)({
        host: "smtp.gmail.email",
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
    const info = await transporter.sendMail({
        from: `"Maddison Foo Koch 👻" <${process.env.EMAIL}>`,
        ...data
    });
    console.log("Message sent: %s", info);
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map