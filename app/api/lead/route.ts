import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const form = await req.formData()
  const payload: Record<string, string> = {}
  for (const [k, v] of form.entries()) {
    if (typeof v === 'string') payload[k] = v
  }
  payload._timestamp = new Date().toISOString()
  payload._site = process.env.SITE_NAME || 'Academic Nest'

  const url = process.env.APPS_SCRIPT_URL
  if (!url) return NextResponse.json({ error: 'Missing APPS_SCRIPT_URL' }, { status: 500 })

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: 'Upstream failed', detail: text }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Unknown error' }, { status: 500 })
  }
}
