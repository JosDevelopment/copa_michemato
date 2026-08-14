// HomePricing.tsx
'use client';

import React from 'react';
import type { HomePricingContentType } from '../../types/content/homeTypes';
import aboutImg from '../../assets/img/about.jpeg';

interface HomePricingProps {
  content: HomePricingContentType;
  className?: string;
}

const HomePricing: React.FC<HomePricingProps> = ({ content, className = '' }) => {
  const { heading, plans, cta } = content;

  return (
    <section id="products" className={`py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 whitespace-pre-line text-3xl font-bold text-white">{heading}</h2>

        <img
          src={aboutImg}
          alt=""
          aria-hidden="true"
          className="mb-10 block w-full max-w-md mx-auto rounded-2xl object-contain shadow-xl md:hidden"
          loading="lazy"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-6 backdrop-blur-sm transition hover:shadow-xl ${
                p.highlight
                  ? 'bg-surface-2/95 border-brand-strong text-fg'
                  : 'bg-primary-950/55 border-white/20 text-white'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-4 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-fg shadow">
                  {p.badge}
                </span>
              )}

              <h3 className={`text-2xl font-bold ${p.highlight ? 'text-fg' : 'text-white'}`}>{p.name}</h3>
              <p className={`mt-2 text-4xl font-extrabold ${p.highlight ? 'text-brand' : 'text-white'}`}>{p.price}</p>

              <ul className={`mt-6 space-y-2 text-sm ${p.highlight ? 'text-muted' : 'text-white/85'}`}>
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-current/60" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={cta.url}
                className={`mt-6 inline-block w-full rounded-xl px-4 py-2 text-center font-semibold transition hover:opacity-90 ${
                  p.highlight
                    ? 'bg-brand text-cta-text'
                    : 'bg-transparent text-white border border-white/40 hover:bg-white/10'
                }`}
              >
                {cta.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
