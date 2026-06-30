/**
 * Cloudflare Pages Function — POST /api/careers
 * Same setup as /api/contact — requires RESEND_API_KEY environment variable.
 */

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.formData();

    if (data.get('_hp')) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const name       = String(data.get('name') ?? '').trim();
    const phone      = String(data.get('phone') ?? '').trim();
    const role       = String(data.get('role') ?? '').trim();
    const experience = String(data.get('experience') ?? '').trim();
    const message    = String(data.get('message') ?? '').trim();

    if (!name || !phone || !role) {
      return new Response(JSON.stringify({ error: 'Name, phone, and role are required' }), { status: 400 });
    }

    const body = `
New job application from PS Tech website

Name: ${name}
Phone: ${phone}
Role: ${role}
Experience: ${experience || 'Not specified'}
Message: ${message || '(none)'}
    `.trim();

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'website@pstech.in',          // TODO: confirm sending domain with Resend
        to: 'careers@pstech.in',             // TODO: CONFIRM careers email address
        subject: `Job application: ${role} — ${name}`,
        text: body,
      }),
    });

    if (!res.ok) {
      console.error('Resend error', await res.text());
      return new Response(JSON.stringify({ error: 'Email failed' }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('careers function error', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
