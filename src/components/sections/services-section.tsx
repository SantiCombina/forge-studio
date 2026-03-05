'use client';

import { motion } from 'framer-motion';
import { Layers, Workflow, LayoutDashboard, Boxes } from 'lucide-react';

import { useLanguage } from '@/contexts/language-context';
import { ease, fadeUp, stagger } from '@/lib/animations';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    { key: 'customDevelopment', icon: Layers, ...t.services.items.customDevelopment },
    { key: 'automationIntegrations', icon: Workflow, ...t.services.items.automationIntegrations },
    { key: 'strategicWeb', icon: LayoutDashboard, ...t.services.items.strategicWeb },
    { key: 'standardSolutions', icon: Boxes, ...t.services.items.standardSolutions },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[5fr_7fr] gap-12 lg:gap-24 max-w-6xl mx-auto items-start">

          {/* Left: sticky heading + statement */}
          <motion.div
            className="md:sticky md:top-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {t.services.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {t.services.heading}
            </h2>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">
              {t.services.subheading}
            </p>
          </motion.div>

          {/* Right: numbered service list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.key}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
                className="group border-t border-border/40 py-8"
              >
                <div className="flex items-start gap-5">
                  <service.icon size={18} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-base font-inter font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-border/40" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
