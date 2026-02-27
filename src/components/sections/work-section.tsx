'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useLanguage } from '@/contexts/language-context';
import { ease, fadeUp, stagger } from '@/lib/animations';

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
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const isHovered = useRef(false);
  const activeRef = useRef(0);

  const projects = [
    { key: 'gomezProducciones', ...t.work.projects.gomezProducciones },
    { key: 'talkeezi', ...t.work.projects.talkeezi },
    { key: 'beepsystem', ...t.work.projects.beepsystem },
    { key: 'radiante', ...t.work.projects.radiante },
    { key: 'sadonetech', ...t.work.projects.sadonetech },
    { key: 'pedana', ...t.work.projects.pedana },
  ];

  const goTo = (index: number) => {
    setDirection(index > activeRef.current ? 1 : -1);
    setActive(index);
    activeRef.current = index;
  };

  const prev = () => goTo((activeRef.current - 1 + projects.length) % projects.length);
  const next = () => goTo((activeRef.current + 1) % projects.length);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered.current) {
        const next = (activeRef.current + 1) % projects.length;
        setDirection(1);
        setActive(next);
        activeRef.current = next;
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [projects.length]);

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

        {/* ── Desktop: numbered list + live preview ── */}
        <div className="hidden md:grid grid-cols-[5fr_5fr] gap-16 items-start">
          {/* Left: project list */}
          <motion.div
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            onMouseEnter={() => {
              isHovered.current = true;
            }}
            onMouseLeave={() => {
              isHovered.current = false;
            }}
          >
            {projects.map((project, i) => (
              <motion.button
                key={project.key}
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
                }}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex items-center gap-6 py-5 border-b border-border/30 text-left"
              >
                <span
                  className="text-xs font-mono tabular-nums transition-colors duration-300"
                  style={{ color: active === i ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground) / 0.4)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span
                  className="text-base font-inter font-medium transition-all duration-300 origin-left"
                  style={{
                    color: active === i ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                    transform: active === i ? 'translateX(4px) scale(1.1)' : 'translateX(0) scale(1)',
                  }}
                >
                  {project.title}
                </span>

                {active === i && (
                  <motion.span layoutId="dot" className="ml-auto block w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Right: image + description */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={projectImages[projects[active].key]}
                    alt={projects[active].title}
                    fill
                    sizes="58vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative h-14 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-x-0 text-sm font-sans text-muted-foreground leading-relaxed"
                >
                  {projects[active].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile: swipeable carousel ── */}
        <div className="md:hidden">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary/20 mb-5">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -48 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40) next();
                  if (info.offset.x > 40) prev();
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={projectImages[projects[active].key]}
                  alt={projects[active].title}
                  fill
                  sizes="100vw"
                  className="object-cover pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Title + navigation */}
          <div className="flex items-start justify-between">
            <p className="text-xs font-mono text-muted-foreground/50 pt-0.5">
              {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>

            <div className="flex gap-2 shrink-0 ml-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="mt-3"
            >
              <h3 className="text-lg font-inter font-bold text-foreground">{projects[active].title}</h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed mt-1">
                {projects[active].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicators */}
          <div className="flex gap-1.5 mt-4">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-px transition-all duration-400 rounded-full"
                style={{
                  width: i === active ? '24px' : '12px',
                  backgroundColor: i === active ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground) / 0.3)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
