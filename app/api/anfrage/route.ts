import { NextResponse } from "next/server";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function notifyTelegram(data: any) {
  const text = `
    <b>📩 Neue Anfrage</b>

    <b>👤 Name:</b> ${data.name}
    <b>📧 E-Mail:</b> <a href="mailto:${data.email}">${data.email}</a>
    <b>📞 Telefon:</b> ${data.phone ? `<a href="tel:${data.phone}">${data.phone}</a>` : "-"}
    <b>🏢 Firma:</b> ${data.company || "-"}
    <b>📝 Nachricht:</b>
    
    ${data.message}
  `;

  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
    }),
  });

  const result = await res.json();
  if (!result.ok) {
    console.error("Telegram Error:", result);
  } else {
    console.log("Telegram Nachricht gesendet:", result);
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "missing data" }, { status: 400 });
    }

    await notifyTelegram(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
