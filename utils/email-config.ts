import nodemailer from "nodemailer";
import { AttachmentLike } from "nodemailer/lib/mailer";
import { Readable } from "stream";

type toEmail = string;
type template = string | Buffer | Readable | AttachmentLike | undefined;

export const sendEmailService = async (
  toEmail: toEmail,
  template: template,
  subject: string = "Welcome to Zod! Discover Trendy & Affordable Modest Wear for Your Brand"
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    tls: {
      rejectUnauthorized: false,
    },
    port: 465,
    secure: true,
    auth: {
      user: "connect@zod.media",
      pass: process.env.NEXT_PUBLIC_MAIL_SERVER_PASS,
    },
  });
  const mailOptionsToSender = {
    from: "connect@zod.media",
    to: toEmail,
    subject,
    html: template,
    // attachments: [
    //   {
    //     filename: 'zod-modest-wear-catalogue.pdf',
    //     path: 'https://dev.zod.fashion/zod-modest-wear-catalogue.pdf'
    //   }
    // ]
  };
  await transporter.sendMail(mailOptionsToSender);
};
