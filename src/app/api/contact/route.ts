import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: `פנייה מהאתר מאת ${name}`,
      text: `
      שם: ${name}
      אימייל: ${email}
      טלפון: ${phone}
      הודעה: ${message}
      `,
      html: `
      <div dir="rtl" style="font-family:Arial,sans-serif">
        <h2>פנייה חדשה מהאתר</h2>
        <p><b>שם:</b> ${name}</p>
        <p><b>אימייל:</b> ${email}</p>
        <p><b>טלפון:</b> ${phone}</p>
        <p><b>הודעה:</b><br>${message}</p>
      </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("שגיאת שליחת מייל:", error);
    return NextResponse.json({ ok: false, error: "שגיאה בשליחת ההודעה" });
  }
}