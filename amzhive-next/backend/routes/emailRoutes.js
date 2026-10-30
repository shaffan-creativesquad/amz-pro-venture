import express from "express";
import { Resend } from "resend";

const router = express.Router();

router.post("/", async (req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const TO_EMAIL = process.env.TO_EMAIL || "info@amzproventure.com";
  try {
    const { formType, ...fields } = req.body;

    const subject =
      formType === "audit"
        ? "New Free Operations Audit Request"
        : formType === "growth"
        ? "New $1M Growth Audit Request"
        : "New Contact Form Submission";

    const rows = Object.entries(fields)
      .map(
        ([k, v]) =>
          `<tr>
            <td style="padding:8px 12px;font-weight:600;color:#000;background:#f9f9f9;border:1px solid #eee;white-space:nowrap">${k}</td>
            <td style="padding:8px 12px;color:#444;border:1px solid #eee">${Array.isArray(v) ? v.join(", ") : v}</td>
          </tr>`
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#ff9900;padding:24px 32px">
          <h1 style="color:#fff;margin:0;font-size:20px">${subject}</h1>
        </div>
        <div style="padding:24px 32px;background:#fff">
          <table style="width:100%;border-collapse:collapse">${rows}</table>
        </div>
        <div style="padding:16px 32px;background:#f9f9f9;font-size:12px;color:#999">
          Sent from AMZ Pro Venture website
        </div>
      </div>`;

    await resend.emails.send({
      from: "AMZ Pro Venture <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject,
      html,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false });
  }
});

export default router;
