import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../adapters/mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b7c5b78e751b99",
    pass: "b02c6d3897a8dc"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail ({subject, body}: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Paula Correa Silva <paula.correapcs@gmail.com>',
      subject,
      html: body
  })
  }
}