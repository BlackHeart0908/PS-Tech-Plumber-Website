/**
 * Cloudflare Pages Function — POST /api/contact
 * Receives the contact form and emails it via the RESEND_API_KEY environment variable.
 *
 * Setup in Cloudflare Pages dashboard:
 *   Settings → Environment variables → Add: RESEND_API_KEY = <your Resend API key>
 *   (Resend free tier: 100 emails/day — sign up at resend.com)
 *
 * Alternatively swap to Web3Forms by replacing the fetch call below with:
 *   fetch('https://api.web3forms.com/submit', { method:'POST', body: JSON.stringify({...}) })
 *   and setting WEB3FORMS_KEY environment variable.
 */

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.formData();

    // Honeypot check — bots fill the hidden _hp field
    if (data.get('_hp')) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const name    = String(data.get('name') ?? '').trim();
    const phone   = String(data.get('phone') ?? '').trim();
    const service = String(data.get('service') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: 'Name and phone are required' }), { status: 400 });
    }

    const body = `
New contact form submission from PS Tech website

Name: ${name}
Phone: ${phone}
Service: ${service || 'Not specified'}
Message: ${message || '(none)'}
    `.trim();

    // Send via Resend (https://resend.com)
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'website@pstech.in',          // TODO: confirm sending domain with Resend
        to: 'contact@pstech.in',             // TODO: CONFIRM notification email address
        subject: `New enquiry from ${name} — PS Tech website`,
        text: body,
      }),
    });

    if (!res.ok) {
      console.error('Resend error', await res.text());
      return new Response(JSON.stringify({ error: 'Email failed' }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('contact function error', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
