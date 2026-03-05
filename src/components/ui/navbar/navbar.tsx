'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { MobileMenu } from '@/components/ui/navbar/mobile-menu';
import { useLanguage } from '@/contexts/language-context';
import { ease } from '@/lib/animations';
import { scrollToSection } from '@/lib/scroll';

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navLinks = [
    { label: t.navbar.services, id: 'services' },
    { label: t.navbar.work, id: 'work' },
    { label: t.navbar.about, id: 'about' },
    { label: t.navbar.contact, id: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setShowMobileMenu(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <>
      {/* Desktop navbar — hidden on mobile */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-20 px-6">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-2xl font-bold text-foreground tracking-tight hover:bg-transparent p-0 h-auto"
          >
            Forge<span className="text-primary">.</span>
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-transparent p-0 h-auto"
              >
                {link.label}
              </Button>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      </motion.nav>

      {/* Mobile nav — mounted only on mobile viewports via JS media query */}
      {showMobileMenu && <MobileMenu />}
    </>
  );
}
