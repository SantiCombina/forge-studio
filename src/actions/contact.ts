'use server';

import { Resend } from 'resend';

import { actionClient } from '@/lib/safe-actions';
import { contactSchema } from '@/lib/schemas/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'hello@forgestudio.dev';

export const sendContactEmail = actionClient.schema(contactSchema).action(async ({ parsedInput }) => {
  const { name, email, message } = parsedInput;

  await resend.emails.send({
    from: 'Forge Studio Contact <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return { success: true };
});
