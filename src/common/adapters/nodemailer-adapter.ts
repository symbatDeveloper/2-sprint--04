import nodemailer from "nodemailer";
import {SETTINGS} from "../../settings";
import {emailTemplates} from "../templates/email-templates";

export const nodemailerAdapter = {
    sendEmail: async function (email: string, code: string) {
        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: SETTINGS.EMAIL,
                pass: SETTINGS.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false,
            }
        })
        return await transport.sendMail({
            from: 'Sender<code Sender>',
            to: email,
            subject: "Your code is here",
            html: emailTemplates.registrationEmail(code)
        })
    }
}