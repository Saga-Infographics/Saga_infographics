import { json } from '@sveltejs/kit';
import { sendMail } from '#lib/server/mail';

const LABELS: Record<string, Record<string, string>> = {
  contact: {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    subject: 'Topic',
    message: 'Message'
  },
  booking: {
    name: 'Name',
    email: 'Email',
    service: 'Service',
    budget: 'Budget',
    date: 'Preferred slot',
    notes: 'Notes',
    quote: 'Calculator quote'
  }
};
const TITLES: Record<string, string> = {
  contact: 'New contact form message',
  booking: 'New strategy call booking'
};

const CONFIRMATIONS: Record<string, { subject: string; intro: string }> = {
  contact: {
    subject: 'We received your message — Saga Infographics',
    intro: "Thanks for reaching out to Saga. We've received your message and our team will reply within one business day."
  },
  booking: {
    subject: 'We received your call request — Saga Infographics',
    intro:
      "Thanks for booking a discovery call with Saga. We've received your request and will email you shortly to confirm the time."
  }
};

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/\r/g, '').trim().slice(0, max) : '';
// Single-line values go in headers (subject/reply-to): strip anything that could inject headers.
const oneLine = (v: string) => v.replace(/[\r\n]+/g, ' ');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request' }, { status: 400 });
  }

  const type = clean(body.type, 20);
  const labels = LABELS[type];
  if (!labels) return json({ error: 'Invalid form type' }, { status: 400 });

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (clean(body.website, 100)) return json({ ok: true });

  const values = Object.fromEntries(
    Object.keys(labels).map((k) => [k, clean(body[k], k === 'message' || k === 'notes' ? 5000 : 300)])
  );
  if (!values.name || !EMAIL_RE.test(values.email)) {
    return json({ error: 'Name and a valid email are required' }, { status: 400 });
  }
  if (type === 'contact' && !values.message) {
    return json({ error: 'Message is required' }, { status: 400 });
  }

  const text = Object.entries(labels)
    .filter(([k]) => values[k])
    .map(([k, label]) => `${label}: ${values[k]}`)
    .join('\n');

  try {
    await sendMail({
      subject: `[Saga] ${TITLES[type]} — ${oneLine(values.name)}`,
      text,
      replyTo: { name: oneLine(values.name), email: values.email }
    });
  } catch (err) {
    console.error('enquiry mail failed', err);
    return json({ error: 'Could not send your message' }, { status: 502 });
  }

  // Confirmation to the visitor. The admin already has the enquiry, so a failure here is not fatal.
  const confirmation = CONFIRMATIONS[type];
  try {
    await sendMail({
      to: [values.email],
      subject: confirmation.subject,
      text: `Hi ${oneLine(values.name)},\n\n${confirmation.intro}\n\nHere is a copy of what you sent us:\n\n${text}\n\n— Saga Infographics\nhttps://saga.com.np`
    });
  } catch (err) {
    console.error('confirmation mail failed', err);
  }
  return json({ ok: true });
};
