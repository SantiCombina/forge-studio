'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useAction } from 'next-safe-action/hooks';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { sendContactEmail } from '@/actions/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import { createContactSchema, type ContactFormValues } from '@/lib/schemas/contact';

export function ContactSection() {
  const { t, language } = useLanguage();

  const schema = useMemo(() => createContactSchema(t.contact.validation), [t.contact.validation]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' },
  });

  useEffect(() => {
    if (form.formState.isSubmitted) {
      form.trigger();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const { execute, isPending } = useAction(sendContactEmail, {
    onSuccess: () => {
      toast.success(t.contact.successMessage);
      form.reset();
    },
    onError: ({ error }) => {
      toast.error(error.serverError ?? t.contact.errorMessage);
    },
  });

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">{t.contact.heading}</h2>
          <p className="text-sm md:text-base font-sans text-muted-foreground mb-12">{t.contact.subheading}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-left"
          onSubmit={form.handleSubmit((values) => execute(values))}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Input
                {...form.register('name')}
                placeholder={t.contact.namePlaceholder}
                disabled={isPending}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-sans h-12"
              />
              {form.formState.errors.name && (
                <p className="text-xs text-destructive font-sans">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Input
                {...form.register('email')}
                type="email"
                placeholder={t.contact.emailPlaceholder}
                disabled={isPending}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-sans h-12"
              />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive font-sans">{form.formState.errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <Textarea
              {...form.register('message')}
              placeholder={t.contact.messagePlaceholder}
              disabled={isPending}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-sans resize-none min-h-28"
            />
            {form.formState.errors.message && (
              <p className="text-xs text-destructive font-sans">{form.formState.errors.message.message}</p>
            )}
          </div>

          <div className="text-center pt-2">
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans px-10 py-6 text-sm tracking-wide"
            >
              {isPending ? t.contact.submitting : t.contact.submitButton}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
