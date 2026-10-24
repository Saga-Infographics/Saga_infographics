import * as env from '$app/env/private';

export type AdminMail = {
  subject: string;
  text: string;
  replyTo?: { name?: string; email: string };
};

/** Send a plain-text notification to the admin over SMTP (Cloudflare TCP sockets). */
export async function sendAdminMail({ subject, text, replyTo }: AdminMail) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    throw new Error('SMTP is not configured');
  }

  const port = Number(SMTP_PORT ?? 465);
  const { WorkerMailer } = await import('worker-mailer');
  await WorkerMailer.send(
    {
      host: SMTP_HOST,
      port,
      // 465 = implicit TLS, anything else (587) = STARTTLS
      secure: port === 465,
      startTls: port !== 465,
      credentials: { username: SMTP_USER, password: SMTP_PASS },
      authType: 'plain'
    },
    {
      from: { name: 'Saga Website', email: MAIL_FROM ?? SMTP_USER },
      to: MAIL_TO.split(',').map((e) => e.trim()),
      reply: replyTo,
      subject,
      text
    }
  );
}
