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
    href: 'https://www.linkedin.com/in/forge-studio/',
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

      <div className="container mx-auto px-6 max-w-4xl">
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

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {CHANNELS.map(({ key, icon: Icon, href, handle }) => {
              const channel = t.contact.channels[key];
              return (
                <motion.a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col gap-5 rounded-xl border border-border bg-secondary p-7 transition-colors duration-300 hover:border-primary/60"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground/40 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-lg font-semibold text-foreground">{channel.label}</span>
                    <span className="text-xs font-sans text-muted-foreground">{channel.description}</span>
                  </div>

                  <span className="text-xs font-mono text-muted-foreground/60 border-t border-border pt-4 mt-auto">
                    {handle}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
