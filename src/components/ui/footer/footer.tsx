'use client';

import { motion } from 'framer-motion';
import { LucideInstagram, LucideLinkedin } from 'lucide-react';

import { useLanguage } from '@/contexts/language-context';
import { fadeUp, stagger } from '@/lib/animations';

export function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      className="relative pt-10 pb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={stagger}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-6 flex flex-col gap-8">
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-serif text-xl font-semibold text-foreground">
            Forge<span className="text-primary">.</span>
          </span>

          <div className="flex items-center gap-5">
            <a
              href="mailto:forgestudiotech@gmail.com"
              className="text-xs font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              forgestudiotech@gmail.com
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="https://www.instagram.com/forgestudio.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <LucideInstagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/forge-studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LucideLinkedin size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="text-xs font-sans text-muted-foreground/60 text-center">
            © {new Date().getFullYear()} Forge Studio. {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
