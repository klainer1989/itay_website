// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name = "", email = "", phone = "", message = "" } = await req.json();

    // very quick guard
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // transporter from env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465, // 465=true, 587/25=false
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // build the email
    const html = `
      <h2>New message from your website</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b></p>
      <pre>${message}</pre>
    `;

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,           // e.g. 'Itay Nutrition <itay.health@gmail.com>'
      to:   process.env.SMTP_TO,             // where you want to receive the mail
      subject: `Website contact: ${name}`,
      replyTo: email,
      html,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json({ ok: false, error: err?.message || "server error" }, { status: 500 });
  }
}
