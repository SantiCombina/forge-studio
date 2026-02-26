'use client';

import { type ReactNode } from 'react';
import {
  SiAmazonwebservices,
  SiDocker,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { LogoLoop, type LogoItem } from '@/components/ui/logo-loop';

const FADE_COLOR = '#0b0b0b';

const TechIcon = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 w-24 h-24 rounded-xl bg-card border border-border text-foreground/60 hover:text-foreground transition-colors duration-200 cursor-default shrink-0">
    <span className="text-3xl leading-none">{icon}</span>
    <span className="text-[10px] font-sans text-muted-foreground leading-none">{label}</span>
  </div>
);

const row1 = [
  { node: <TechIcon icon={<SiReact />} label="React" />, title: 'React' },
  { node: <TechIcon icon={<SiNextdotjs />} label="Next.js" />, title: 'Next.js' },
  { node: <TechIcon icon={<SiTypescript />} label="TypeScript" />, title: 'TypeScript' },
  { node: <TechIcon icon={<SiNodedotjs />} label="Node.js" />, title: 'Node.js' },
  { node: <TechIcon icon={<SiPostgresql />} label="PostgreSQL" />, title: 'PostgreSQL' },
  { node: <TechIcon icon={<SiPython />} label="Python" />, title: 'Python' },
];

const row2 = [
  { node: <TechIcon icon={<SiTailwindcss />} label="Tailwind" />, title: 'Tailwind' },
  { node: <TechIcon icon={<SiAmazonwebservices />} label="AWS" />, title: 'AWS' },
  { node: <TechIcon icon={<SiDocker />} label="Docker" />, title: 'Docker' },
  { node: <TechIcon icon={<SiGraphql />} label="GraphQL" />, title: 'GraphQL' },
  { node: <TechIcon icon={<SiPrisma />} label="Prisma" />, title: 'Prisma' },
  { node: <TechIcon icon={<SiRedis />} label="Redis" />, title: 'Redis' },
];

const loopProps = {
  speed: 10,
  logoHeight: 96,
  gap: 8,
  hoverSpeed: 0,
  fadeOut: true,
  fadeOutColor: FADE_COLOR,
} as const;

const renderTechItem = (item: LogoItem): ReactNode => ('node' in item ? (item as { node: ReactNode }).node : null);

export function TechStackSection() {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-24 overflow-hidden">
        <LogoLoop
          {...loopProps}
          logos={row1}
          renderItem={renderTechItem}
          direction="left"
          ariaLabel="Technologies row 1"
        />
      </div>
      <div className="h-24 overflow-hidden">
        <LogoLoop
          {...loopProps}
          logos={row2}
          renderItem={renderTechItem}
          direction="right"
          speed={7}
          ariaLabel="Technologies row 2"
        />
      </div>
    </div>
  );
}
