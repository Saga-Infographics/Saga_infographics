import { json } from '@sveltejs/kit';
import { sendAdminMail } from '#lib/server/mail';

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
    await sendAdminMail({
      subject: `[Saga] ${TITLES[type]} — ${oneLine(values.name)}`,
      text,
      replyTo: { name: oneLine(values.name), email: values.email }
    });
  } catch (err) {
    console.error('enquiry mail failed', err);
    return json({ error: 'Could not send your message' }, { status: 502 });
  }
  return json({ ok: true });
};
