'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { useLanguage } from '@/contexts/language-context';
import { fadeUp, stagger } from '@/lib/animations';

const projectImages: Record<string, string> = {
  gomezProducciones: '/works/gomezprod.png',
  talkeezi: '/works/talkeezi.png',
  beepsystem: '/works/beepsystem.png',
  radiante: '/works/radiante.png',
  sadonetech: '/works/sadonetech.png',
  pedana: '/works/pedana.png',
};

export function WorkSection() {
  const { t } = useLanguage();

  const projects = [
    { key: 'gomezProducciones', ...t.work.projects.gomezProducciones },
    { key: 'talkeezi', ...t.work.projects.talkeezi },
    { key: 'beepsystem', ...t.work.projects.beepsystem },
    { key: 'radiante', ...t.work.projects.radiante },
    { key: 'sadonetech', ...t.work.projects.sadonetech },
    { key: 'pedana', ...t.work.projects.pedana },
  ];

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">{t.work.eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">{t.work.heading}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          {projects.map((project) => (
            <motion.div key={project.key} variants={fadeUp} className="glass-card overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={projectImages[project.key]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-inter font-bold text-foreground">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
