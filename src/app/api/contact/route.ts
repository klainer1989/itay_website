// src/app/api/contact/route.ts
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";          // נדרש ל-nodemailer בוורצל
export const dynamic = "force-dynamic";   // מבטיח ריצת פונקציה דינמית

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function required(v?: string) {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(req: NextRequest) {
  try {
    const body: Payload = await req.json();

    if (!required(body.name) || !required(body.email) || !required(body.message)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields (name, email, message)" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // --- קריאה למשתני סביבה ---
    const host = process.env.SMTP_HOST!;
    const port = Number(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER!;
    const pass = process.env.SMTP_PASS!;
    const from = process.env.SMTP_FROM || user; // ברירת מחדל: המשתמש המחובר
    const to = process.env.SMTP_TO || user;     // ברירת מחדל: שלח לעצמך

    if (!host || !user || !pass) {
      return new Response(
        JSON.stringify({ ok: false, error: "SMTP env vars are missing" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // --- טרנספורטר של nodemailer ---
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,         // 465 = TLS
      auth: { user, pass },
    });

    // ניתן לאמת חיבור (אופציונלי; טוב לדיבוג לוקאלי)
    // await transporter.verify();

    const subject = `New contact from ${body.name} (${body.email})`;
    const text = [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      body.phone ? `Phone: ${body.phone}` : "",
      `Message:\n${body.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 8px">New contact message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
        <p style="white-space:pre-wrap;margin-top:12px">${(body.message || "").replace(/</g,"&lt;")}</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo: body.email, // כך אפשר לענות ישירות לשולח
    });

    return new Response(
      JSON.stringify({ ok: true, id: info.messageId }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ ok: false, error: err?.message || "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}