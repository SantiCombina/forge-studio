'use client';

import { Github, Linkedin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scroll';

const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <span className="font-serif text-lg font-semibold text-foreground">
            Forge<span className="text-primary">.</span>
          </span>
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-sans text-muted-foreground hover:text-foreground hover:bg-transparent p-0 h-auto"
              >
                {link.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">
        <p className="text-xs font-sans text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Forge Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
