'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react';

import { useLanguage } from '@/contexts/language-context';
import { fadeUp, stagger } from '@/lib/animations';

const CHANNELS = [
  {
    key: 'instagram' as const,
    icon: Instagram,
    href: 'https://www.instagram.com/forgestudio.tech/',
    handle: '@forgestudio.tech',
  },
  {
    key: 'linkedin' as const,
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/forgestudio-tech',
    handle: 'Forge Studio',
  },
  {
    key: 'email' as const,
    icon: Mail,
    href: 'mailto:forgestudiotech@gmail.com',
    handle: 'forgestudiotech@gmail.com',
  },
];

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="flex flex-col items-center gap-14"
        >
          <motion.div variants={fadeUp} className="text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">{t.contact.heading}</h2>
            <p className="text-sm md:text-base font-sans text-muted-foreground">{t.contact.subheading}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col w-full divide-y divide-border rounded-xl border border-border overflow-hidden"
          >
            {CHANNELS.map(({ key, icon: Icon, href, handle }) => {
              const channel = t.contact.channels[key];
              return (
                <motion.a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 bg-secondary px-6 py-5 transition-colors duration-200 hover:bg-secondary/70"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-serif text-base font-semibold text-foreground leading-tight">
                        {channel.label}
                      </span>
                      <span className="text-xs font-sans text-muted-foreground">{channel.description}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-mono text-foreground/70 group-hover:text-primary transition-colors duration-200 hidden sm:block">
                      {handle}
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-muted-foreground/30 transition-all duration-200 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
