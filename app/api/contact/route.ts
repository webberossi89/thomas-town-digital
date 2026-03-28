import { NextRequest, NextResponse } from "next/server";

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

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
        timestamp: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
      }),
      redirect: "manual",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
