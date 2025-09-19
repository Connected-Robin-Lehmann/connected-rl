// api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // z.B. smtp.gmail.com
  port: Number(process.env.SMTP_PORT || 465),
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, subject, website, message } = req.body || {};
    if (!name || !email || !message)
      return res.status(400).json({ error: "Missing required fields" });

    await transporter.sendMail({
      from: `"Kontaktformular" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: subject?.trim() || `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nWebsite: ${website}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Mailer error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
