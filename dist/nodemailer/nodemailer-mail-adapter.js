"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b7c5b78e751b99",
        pass: "b02c6d3897a8dc"
    }
});
class NodeMailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Paula Correa Silva <paula.correapcs@gmail.com>',
            subject,
            html: body
        });
    }
}
exports.NodeMailerMailAdapter = NodeMailerMailAdapter;
