'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { fadeUp, stagger } from '@/lib/animations';
import { scrollToSection } from '@/lib/scroll';

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.footer.services, id: 'services' },
    { label: t.footer.work, id: 'work' },
    { label: t.footer.about, id: 'about' },
    { label: t.footer.contact, id: 'contact' },
  ];

  return (
    <motion.footer
      className="border-t border-border py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={stagger}
    >
      <motion.div
        variants={fadeUp}
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-8">
          <span className="font-serif text-lg font-semibold text-foreground">
            Forge<span className="text-primary">.</span>
          </span>
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-sans text-muted-foreground hover:text-foreground hover:bg-transparent p-0 h-auto"
              >
                {link.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/forgestudio.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/forge-studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="container mx-auto px-6 mt-8">
        <p className="text-xs font-sans text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Forge Studio. {t.footer.copyright}
        </p>
      </motion.div>
    </motion.footer>
  );
}
