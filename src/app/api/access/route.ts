import { NextResponse } from "next/server";

export async function POST() {
  const form = new URLSearchParams();
  form.append("offer_id", process.env.ZENEDU_OFFER_ID!);
  form.append("usage_limit", "1");

  const expire = new Date(Date.now() + 72 * 60 * 60 * 1000)
    .toISOString().slice(0, 19).replace("T", " ");
  form.append("expire_date", expire);

  const res = await fetch(
    `https://app.zenedu.io/api/v1/bot/${process.env.ZENEDU_BOT_ID}/links/offer`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.ZENEDU_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form.toString(),
    }
  );

  const data = await res.json();
  return NextResponse.json({ link: data.data.link });
}