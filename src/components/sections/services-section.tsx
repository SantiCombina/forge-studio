'use client';

import { motion } from 'framer-motion';
import { Globe, Code2, Plug, Palette } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern, performant web apps built with cutting-edge frameworks. From dashboards to SaaS platforms.',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Tailored solutions engineered from the ground up to solve your specific business challenges.',
  },
  {
    icon: Plug,
    title: 'API & Integrations',
    description: 'Robust APIs and seamless third-party integrations that connect your systems and data.',
  },
  {
    icon: Palette,
    title: 'UX/UI Design & Dev',
    description: 'User-centered design paired with pixel-perfect development for experiences that convert.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export function ServicesSection() {
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
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">What we do</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Services</h2>
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
