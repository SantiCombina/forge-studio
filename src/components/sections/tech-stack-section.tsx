'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/language-context';

const techs = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Python', 'AWS'];

export function TechStackSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{t.techStack.heading}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mx-auto"
        >
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-sm md:text-base font-sans text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
