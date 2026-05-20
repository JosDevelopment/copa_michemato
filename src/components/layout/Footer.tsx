import React from "react";
import type { FooterContentType } from "../../types/content/globalTypes";

interface FooterProps {
  content: FooterContentType;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ content, className = "" }) => {
  return (
    <footer className={`border-t border-border bg-bg ${className}`}>
      {content.image?.src && (
        <div className="mx-auto max-w-7xl px-4 pt-10">
          <img
            src={content.image.src}
            alt={content.image.alt || content.brand}
            title={content.image.title}
            className="mx-auto w-full max-w-3xl rounded-2xl object-cover shadow-sm"
            loading="lazy"
          />
        </div>
      )}

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        <div className="flex items-center gap-3 text-muted">
          {content.logo.src && (
            <img
              src={content.logo.src}
              alt={content.logo.alt || content.brand}
              title={content.logo.title}
              className="h-7 w-7 shrink-0 rounded-md object-contain"
              loading="lazy"
            />
          )}
          <span className="text-sm">
            © {content.year} {content.brand}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted">
          {content.social && content.social.map((link, i) => (
            <a key={i} href={link.url} className="hover:text-fg transition">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
