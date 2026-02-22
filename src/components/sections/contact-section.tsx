//TODO: Implement form submission logic and validation
'use client';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
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
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              placeholder={t.contact.namePlaceholder}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-sans h-12"
            />
            <Input
              type="email"
              placeholder={t.contact.emailPlaceholder}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-sans h-12"
            />
          </div>
          <Textarea
            placeholder={t.contact.messagePlaceholder}
            rows={5}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-sans resize-none"
          />
          <div className="text-center pt-2">
            <Button
              type="submit"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans px-10 py-6 text-sm tracking-wide"
            >
              {t.contact.submitButton}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
