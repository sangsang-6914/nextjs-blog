import { EmailInfo } from './contact';
import nodemailer from 'nodemailer';

export async function sendEmail({ subject, message, email }: EmailInfo) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
  });

  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from: email,
    html: `<h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>Send: ${email}</p>`,
  };

  return transporter.sendMail(mailData);
}
