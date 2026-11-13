import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Default bot & chat credentials (can be overridden by environment variables)
const DEFAULT_TELEGRAM_BOT_TOKEN = "9296605058:AAGNq_Jw1ZEPqmG1oJAsxl5RX7ouh7OD5Og";
const DEFAULT_TELEGRAM_CHAT_ID = "8123552123";
const DEFAULT_RECEIVER_EMAIL = "tusar.imran.dev@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, topic, message } = body;

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN || DEFAULT_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || DEFAULT_TELEGRAM_CHAT_ID;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || DEFAULT_RECEIVER_EMAIL;

    let telegramSent = false;
    let emailSent = false;
    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // 1. Send Telegram Notification
    if (botToken && chatId) {
      try {
        const textMessage = `📬 <b>New Contact Form Submission - ShadMinimal</b>\n\n` +
          `👤 <b>Name:</b> ${escapeHtml(name)}\n` +
          `📧 <b>Email:</b> ${escapeHtml(email)}\n` +
          `🏷️ <b>Topic:</b> ${escapeHtml(topic || "General Inquiry")}\n\n` +
          `💬 <b>Message:</b>\n${escapeHtml(message)}\n\n` +
          `⏱️ <b>Time:</b> ${submissionTime} (BST)\n` +
          `🌐 <b>Source:</b> shadminimal-landing.vercel.app`;

        const telegramRes = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: textMessage,
              parse_mode: "HTML",
            }),
          }
        );

        const telegramData = await telegramRes.json();
        telegramSent = Boolean(telegramData.ok);
      } catch (tgErr: any) {
        console.error("Telegram notification error:", tgErr.message);
      }
    }

    // 2. Send Email via Nodemailer
    const smtpUser = process.env.SMTP_USER || DEFAULT_RECEIVER_EMAIL;
    const smtpPass = process.env.SMTP_PASS;
    let emailError: string | null = null;

    if (smtpPass) {
      try {
        const isGmail = !process.env.SMTP_HOST || process.env.SMTP_HOST === "smtp.gmail.com";
        const transportOptions = isGmail
          ? {
              service: "gmail",
              auth: {
                user: smtpUser,
                pass: smtpPass,
              },
            }
          : {
              host: process.env.SMTP_HOST,
              port: parseInt(process.env.SMTP_PORT || "465", 10),
              secure: (process.env.SMTP_PORT || "465") === "465",
              auth: {
                user: smtpUser,
                pass: smtpPass,
              },
            };

        const transporter = nodemailer.createTransport(transportOptions as any);

        await transporter.sendMail({
          from: `"ShadMinimal Contact" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: `[ShadMinimal] New message from ${name} (${topic || "General"})`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #DFE3E8; border-radius: 16px; overflow: hidden; background-color: #FFFFFF;">
              <div style="background: linear-gradient(135deg, #00A76F 0%, #00B8D9 100%); padding: 24px; color: #FFFFFF;">
                <h2 style="margin: 0; font-size: 20px; font-weight: 700;">ShadMinimal Contact Inquiry</h2>
                <p style="margin: 4px 0 0; opacity: 0.9; font-size: 13px;">New message received from your landing page form</p>
              </div>
              <div style="padding: 24px; color: #1C252E; font-size: 14px; line-height: 1.6;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 8px 0; color: #637381; width: 100px;"><strong>Name:</strong></td>
                    <td style="padding: 8px 0; color: #1C252E; font-weight: 600;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #637381;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #00A76F; text-decoration: none;">${escapeHtml(email)}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #637381;"><strong>Topic:</strong></td>
                    <td style="padding: 8px 0; color: #1C252E;">${escapeHtml(topic || "General Inquiry")}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #637381;"><strong>Time:</strong></td>
                    <td style="padding: 8px 0; color: #1C252E;">${submissionTime}</td>
                  </tr>
                </table>
                <div style="background-color: #F9FAFB; border: 1px solid #DFE3E8; border-radius: 12px; padding: 16px; margin-top: 16px;">
                  <h4 style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #637381;">Message Content</h4>
                  <p style="margin: 0; white-space: pre-wrap; color: #1C252E;">${escapeHtml(message)}</p>
                </div>
              </div>
              <div style="background-color: #F4F6F8; padding: 16px 24px; text-align: center; font-size: 12px; color: #919EAB; border-top: 1px solid #DFE3E8;">
                You can reply directly to this email to respond to ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;.
              </div>
            </div>
          `,
        });

        emailSent = true;
      } catch (mailErr: any) {
        console.error("Nodemailer send error:", mailErr.message);
        emailError = mailErr.message;
      }
    } else {
      emailError = "SMTP_PASS (Gmail App Password) not configured in environment variables.";
      console.log(
        `[ShadMinimal] Contact received for ${receiverEmail}. Nodemailer is ready; waiting for SMTP_PASS. Telegram dispatch status: ${telegramSent}`
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      telegramSent,
      emailSent,
      emailError: emailSent ? undefined : emailError,
    });
  } catch (error: any) {
    console.error("Contact API handler error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
