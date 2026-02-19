'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scroll';

const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight hover:bg-transparent p-0 h-auto"
        >
          Forge<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-transparent p-0 h-auto"
            >
              {link.label}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNavClick('contact')}
            className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-sans"
          >
            Let's talk
          </Button>
        </div>

        <Button
          variant="ghost"
          className="md:hidden text-foreground hover:bg-transparent p-0 h-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              onClick={() => handleNavClick(link.id)}
              className="block w-full justify-start py-3 text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-transparent"
            >
              {link.label}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNavClick('contact')}
            className="mt-3 w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-sans"
          >
            Let's talk
          </Button>
        </div>
      )}
    </nav>
  );
}
