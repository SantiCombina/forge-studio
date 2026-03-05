'use client';

import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { StaggeredMenu } from '@/components/ui/staggered-menu';
import { useLanguage } from '@/contexts/language-context';
import { scrollToSection } from '@/lib/scroll';

const ACCENT_COLOR = '#c9b49a'; // ≈ oklch(0.75 0.04 80) — primary warm beige

const ForgeLogoElement = (
  <span
    style={{
      fontFamily: 'var(--font-playfair), Georgia, serif',
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#f0ede8',
      letterSpacing: '-0.02em',
      lineHeight: 1,
    }}
  >
    Forge<span style={{ color: ACCENT_COLOR }}>.</span>
  </span>
);

const PanelFooter = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
    <Globe size={13} color="#c9b8a0" strokeWidth={1.5} />
    <LanguageSwitcher />
  </div>
);

export function MobileMenu() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.navbar.services, ariaLabel: t.navbar.services, link: '#services' },
    { label: t.navbar.work, ariaLabel: t.navbar.work, link: '#work' },
    { label: t.navbar.about, ariaLabel: t.navbar.about, link: '#about' },
    { label: t.navbar.contact, ariaLabel: t.navbar.contact, link: '#contact' },
  ];

  return (
    <StaggeredMenu
      isFixed={true}
      position="right"
      items={navItems}
      logoElement={ForgeLogoElement}
      colors={['#2a2a2a', '#1c1c1c']}
      accentColor={ACCENT_COLOR}
      menuButtonColor="#f0ede8"
      openMenuButtonColor="#f0ede8"
      changeMenuColorOnOpen={false}
      displayItemNumbering={true}
      displaySocials={false}
      closeOnClickAway={true}
      closeOnItemClick={true}
      panelFooterContent={PanelFooter}
      scrolled={scrolled}
      onItemClick={(item) => scrollToSection(item.link.replace('#', ''))}
    />
  );
}
