'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Meridian Finance',
    description:
      'A comprehensive financial dashboard for a fintech startup. Real-time data visualization, portfolio tracking, and automated reporting.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Aura Health',
    description:
      'Patient management platform for a digital health company. Appointment scheduling, telehealth integration, and secure records.',
    tags: ['Next.js', 'TailwindCSS', 'Supabase', 'Stripe'],
  },
  {
    title: 'Nomad Logistics',
    description:
      'Supply chain management tool with real-time shipment tracking, route optimization, and warehouse inventory management.',
    tags: ['React', 'Python', 'AWS', 'GraphQL'],
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">Selected projects</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Our Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="aspect-video bg-secondary/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{project.title}</h3>
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
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-sans text-primary hover:text-warm-beige-light transition-colors group/link"
                >
                  View project
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
