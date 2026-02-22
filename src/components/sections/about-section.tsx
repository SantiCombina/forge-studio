'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/language-context';
import { ease, fadeUp, stagger } from '@/lib/animations';

const teamNames = ['Alex Rivera', 'Jordan Chen'];

export function AboutSection() {
  const { t } = useLanguage();

  const team = [
    { name: teamNames[0], ...t.about.team.alex },
    { name: teamNames[1], ...t.about.team.jordan },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">{t.about.eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">{t.about.heading}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={fadeUp} className="text-center">
              <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-5 border border-border" />
              <h3 className="text-lg font-serif font-bold text-foreground">{member.name}</h3>
              <p className="text-sm font-sans text-primary mb-2">{member.role}</p>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease }}
          className="text-center max-w-2xl mx-auto text-sm md:text-base font-sans text-muted-foreground leading-relaxed"
        >
          {t.about.closingStatement}
        </motion.p>
      </div>
    </section>
  );
}
