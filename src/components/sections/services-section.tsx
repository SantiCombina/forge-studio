'use client';

import { motion } from 'framer-motion';
import { Code2, Globe, Palette, Plug } from 'lucide-react';

import { useLanguage } from '@/contexts/language-context';
import { fadeUp, stagger } from '@/lib/animations';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    { key: 'webApps', icon: Globe, ...t.services.items.webApps },
    { key: 'customSoftware', icon: Code2, ...t.services.items.customSoftware },
    { key: 'apiIntegrations', icon: Plug, ...t.services.items.apiIntegrations },
    { key: 'uxUiDesign', icon: Palette, ...t.services.items.uxUiDesign },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t.services.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">{t.services.heading}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          {services.map((service) => (
            <motion.div key={service.key} variants={fadeUp} className="glass-card p-8 group cursor-default">
              <service.icon
                size={28}
                className="text-primary mb-6 group-hover:text-warm-beige-light transition-colors"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
