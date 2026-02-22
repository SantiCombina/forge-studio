"use client";

import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import type { Language } from "@/lib/i18n";

const LANGUAGES: { code: Language; label: string; ariaLabel: string }[] = [
  { code: "en", label: "EN", ariaLabel: "Switch to English" },
  { code: "es", label: "ES", ariaLabel: "Cambiar a Español" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center select-none" role="group" aria-label="Language selector">
      {LANGUAGES.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            aria-pressed={language === lang.code}
            aria-label={lang.ariaLabel}
            className={cn(
              "bg-transparent border-none p-0 font-sans text-sm tracking-widest cursor-pointer transition-colors duration-200",
              language === lang.code
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {lang.label}
          </button>
          {index < LANGUAGES.length - 1 && (
            <span className="mx-2 text-border/60 select-none" aria-hidden="true">
              |
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
