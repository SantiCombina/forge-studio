'use client';

import { motion } from 'framer-motion';

import Beams from '@/components/ui/beams';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { ease } from '@/lib/animations';
import { scrollToSection } from '@/lib/scroll';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-between">
      <div className="absolute inset-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#bcac92"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="absolute inset-0 bg-background/30" />

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-6"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold text-foreground leading-[1.1] mb-8"
        >
          {t.hero.heading} <span className="italic text-primary">{t.hero.headingItalic}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          className="text-base md:text-lg font-sans text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="flex flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans px-8 py-6 text-sm tracking-wide"
            onClick={() => scrollToSection('work')}
          >
            {t.hero.ctaPrimary}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-muted-foreground hover:text-foreground font-sans px-8 py-6 text-sm tracking-wide border border-border hover:border-foreground/20 hover:bg-transparent"
            onClick={() => scrollToSection('contact')}
          >
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
