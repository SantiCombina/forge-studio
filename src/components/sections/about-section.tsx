'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

import { useLanguage } from '@/contexts/language-context';
import { ease, fadeUp, stagger } from '@/lib/animations';

const teamLinkedIn: Record<string, string> = {
  'Santiago Combina': 'https://www.linkedin.com/in/santiago-combina/',
  'Bruno Cé': 'https://www.linkedin.com/in/bruno-ce/',
  'Gino Novello': 'https://www.linkedin.com/in/ginonovello/',
  'Martin Giaveno': 'https://www.linkedin.com/in/martin-giaveno-88ba36310/',
};

const teamNames = ['Santiago Combina', 'Bruno Cé', 'Gino Novello', 'Martin Giaveno'];

export function AboutSection() {
  const { t } = useLanguage();

  const team = [
    {
      name: teamNames[0],
      image: '/team/santiago.webp',
      ...t.about.team.santiago,
    },
    {
      name: teamNames[1],
      image: '/team/bruno.webp',
      ...t.about.team.bruno,
    },
    {
      name: teamNames[2],
      image: '/team/gino.webp',
      ...t.about.team.gino,
    },
    {
      name: teamNames[3],
      image: '/team/martin.webp',
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={fadeUp} className="text-center">
              <a
                href={teamLinkedIn[member.name]}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
                aria-label={`LinkedIn de ${member.name}`}
              >
                <div className="relative w-28 h-28 md:w-44 md:h-44 mx-auto mb-4 md:mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 112px, 176px"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-border transition-all duration-500 group-hover:ring-2 group-hover:ring-primary/60" />
                </div>
                <h3 className="inline-flex items-center gap-1 text-sm md:text-lg font-inter font-bold text-foreground leading-snug">
                  {member.name}
                  <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary opacity-0 -translate-y-0.5 transition-all duration-300 group-hover:opacity-100" />
                </h3>
              </a>
              <p className="text-xs md:text-sm font-sans text-primary mb-2 mt-1">{member.role}</p>
              <p className="text-xs md:text-sm font-sans text-muted-foreground leading-relaxed">{member.bio}</p>
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
