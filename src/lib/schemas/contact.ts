import { z } from 'zod';

import type { Translations } from '@/lib/i18n';

export function createContactSchema(v: Translations['contact']['validation']) {
  return z.object({
    name: z.string().min(2, v.nameMin),
    email: z.string().email(v.emailInvalid),
    message: z.string().min(10, v.messageMin),
  });
}

// Static schema used server-side (language doesn't matter there)
export const contactSchema = createContactSchema({
  nameMin: 'Name must be at least 2 characters.',
  emailInvalid: 'Please enter a valid email address.',
  messageMin: 'Message must be at least 10 characters.',
});

export type ContactFormValues = z.infer<typeof contactSchema>;
