import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, business, challenge, service, message,
      utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("CONTACT_WEBHOOK_URL is not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

    const leadData = {
      name: name || "",
      email,
      phone: phone || "",
      business: business || "",
      challenge: challenge || "",
      service: service || "",
      message: message || "",
      utm_source: utm_source || "",
      utm_medium: utm_medium || "",
      utm_campaign: utm_campaign || "",
      utm_term: utm_term || "",
      utm_content: utm_content || "",
      gclid: gclid || "",
      fbclid: fbclid || "",
      source: "thomastowndigital.com/contact",
      timestamp,
    };

    // Send to Google Sheets
    const sheetPromise = fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
      redirect: "manual",
    });

    // Send email via Resend
    const emailPromise = process.env.RESEND_API_KEY
      ? new Resend(process.env.RESEND_API_KEY).emails.send({
          from: process.env.RESEND_FROM_EMAIL || "leads@thomastowndigital.com",
          to: process.env.LEAD_NOTIFY_EMAIL || "jared@thomastowndigital.com",
          subject: `New Lead: ${name || "Unknown"} — ${service || "No service selected"}`,
          html: `
            <h2 style="margin:0 0 16px">New Lead from Thomas Town Digital</h2>
            <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
              <tr><td style="padding:6px 12px;font-weight:bold;color:#666">Name</td><td style="padding:6px 12px">${name}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#666">Email</td><td style="padding:6px 12px"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#666">Phone</td><td style="padding:6px 12px"><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#666">Business</td><td style="padding:6px 12px">${business}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#666">Challenge</td><td style="padding:6px 12px">${challenge}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#666">Service</td><td style="padding:6px 12px">${service}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#666">Message</td><td style="padding:6px 12px">${message || "—"}</td></tr>
              ${gclid ? `<tr><td style="padding:6px 12px;font-weight:bold;color:#666">GCLID</td><td style="padding:6px 12px">${gclid}</td></tr>` : ""}
              ${utm_source ? `<tr><td style="padding:6px 12px;font-weight:bold;color:#666">Source</td><td style="padding:6px 12px">${utm_source} / ${utm_medium}</td></tr>` : ""}
            </table>
            <p style="color:#999;font-size:12px;margin-top:20px">${timestamp}</p>
          `,
        }).catch((err) => console.error("Resend error:", err))
      : Promise.resolve();

    // Send to Slack
    const slackPromise = process.env.SLACK_WEBHOOK_URL
      ? fetch(process.env.SLACK_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `🟢 *New Lead*\n*${name}* — ${business}\n📧 ${email} | 📞 ${phone}\n💬 ${challenge}\n🎯 ${service}\n${message ? `📝 ${message}` : ""}`,
          }),
        }).catch((err) => console.error("Slack error:", err))
      : Promise.resolve();

    // Send to Discord
    const discordPromise = process.env.DISCORD_WEBHOOK_URL
      ? fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [{
              title: "New Lead",
              color: 0x2D8A45,
              fields: [
                { name: "Name", value: name || "—", inline: true },
                { name: "Business", value: business || "—", inline: true },
                { name: "Service", value: service || "—", inline: true },
                { name: "Email", value: email, inline: true },
                { name: "Phone", value: phone || "—", inline: true },
                { name: "Challenge", value: challenge || "—", inline: false },
                ...(message ? [{ name: "Message", value: message, inline: false }] : []),
              ],
              timestamp: new Date().toISOString(),
            }],
          }),
        }).catch((err) => console.error("Discord error:", err))
      : Promise.resolve();

    await Promise.all([sheetPromise, emailPromise, slackPromise, discordPromise]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
