'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { useLanguage } from '@/contexts/language-context';
import { ease, fadeUp, stagger } from '@/lib/animations';

const teamNames = ['Santiago Combina', 'Bruno Cé', 'Gino Novello', 'Martin Giaveno'];

export function AboutSection() {
  const { t } = useLanguage();

  const team = [
    {
      name: teamNames[0],
      image: '/fotoSantiago.webp',
      ...t.about.team.santiago,
    },
    {
      name: teamNames[1],
      image: '/fotoBruno.webp',
      ...t.about.team.bruno,
    },
    {
      name: teamNames[2],
      image: '/fotoGino.webp',
      ...t.about.team.gino,
    },
    {
      name: teamNames[3],
      image: '/fotoMartin.webp',
      ...t.about.team.martin,
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={fadeUp} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border border-border"
                  sizes="96px"
                />
              </div>{' '}
              <h3 className="text-lg font-inter font-bold text-foreground">{member.name}</h3>
              <p className="text-sm font-sans text-primary mb-2 min-h-10 flex items-center justify-center">
                {member.role}
              </p>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed min-h-18">{member.bio}</p>
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
