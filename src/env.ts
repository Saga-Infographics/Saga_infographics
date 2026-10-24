import { defineEnvVars } from '@sveltejs/kit/env';

// Optional at startup so the site builds and runs without SMTP; the enquiry
// endpoint reports a send failure if these are missing.
const optional = (value: string | undefined) => value ?? '';

export const variables = defineEnvVars({
  SMTP_HOST: { schema: optional },
  SMTP_PORT: { schema: optional },
  SMTP_USER: { schema: optional },
  SMTP_PASS: { schema: optional },
  MAIL_FROM: { schema: optional },
  MAIL_TO: { schema: optional }
});
