import { NextResponse } from 'next/server';

type Lead = { name?: unknown; email?: unknown; company?: unknown; challenge?: unknown };

function getText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please send a valid inquiry.' }, { status: 400 });
  }

  const lead = {
    name: getText(body.name, 100),
    email: getText(body.email, 254),
    company: getText(body.company, 150),
    challenge: getText(body.challenge, 2_000),
    submittedAt: new Date().toISOString(),
  };

  if (!lead.name || !lead.email || !lead.challenge || !/^\S+@\S+\.\S+$/.test(lead.email)) {
    return NextResponse.json({ error: 'Name, a valid email, and your project details are required.' }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) return NextResponse.json({ error: 'Lead relay is not configured.' }, { status: 503 });

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
  } catch {
    return NextResponse.json({ error: 'Unable to send your inquiry right now.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
