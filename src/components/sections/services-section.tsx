'use client';

import { motion } from 'framer-motion';
import { Globe, Code2, Plug, Palette } from 'lucide-react';

import { useLanguage } from '@/contexts/language-context';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    { icon: Globe, ...t.services.items.webApps },
    { icon: Code2, ...t.services.items.customSoftware },
    { icon: Plug, ...t.services.items.apiIntegrations },
    { icon: Palette, ...t.services.items.uxUiDesign },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">{t.services.eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">{t.services.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300"
            >
              <service.icon
                size={28}
                className="text-primary mb-6 group-hover:text-warm-beige-light transition-colors"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
