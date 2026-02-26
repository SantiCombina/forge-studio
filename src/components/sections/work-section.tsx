'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { fadeUp, stagger } from '@/lib/animations';

const projectTags = [
  ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  ['Next.js', 'TailwindCSS', 'Supabase', 'Stripe'],
  ['React', 'Python', 'AWS', 'GraphQL'],
];

export function WorkSection() {
  const { t } = useLanguage();

  const projects = [
    { ...t.work.projects.meridian, tags: projectTags[0] },
    { ...t.work.projects.aura, tags: projectTags[1] },
    { ...t.work.projects.nomad, tags: projectTags[2] },
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
            <motion.div key={project.title} variants={fadeUp} className="glass-card overflow-hidden group">
              <div className="aspect-video bg-secondary/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-inter font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary text-muted-foreground border-border font-sans text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-sans text-muted-foreground/50 cursor-default select-none">
                  {t.work.viewProject}
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
