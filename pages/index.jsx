// pages/index.jsx

import { useMemo, useState } from 'react';
import Section from '@/components/Section';
import dict from '@/lib/i18n';
import { CONTENT } from '@/lib/content';
import clsx from 'clsx';

const { brand, contact, socials, gallery = [], services = [], testimonials = [] } = CONTENT;

export default function Home({ toggleDark, dark }) {
  const [lang, setLang] = useState('en');
  const t = dict?.[lang] ?? {};

  // Верхнее меню (безопасные подписи)
  const menu = useMemo(
    () => ([
      { label: t?.menu?.work ?? 'Work', href: '#work' },
      { label: t?.menu?.services ?? 'Services', href: '#services' },
      { label: t?.menu?.about ?? 'About', href: '#about' },
      { label: t?.menu?.contact ?? 'Contact', href: '#contact' },
    ]),
    [t]
  );

  return (
    <div className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Шапка */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-lg font-semibold tracking-tight">
              {brand?.firstName ?? 'Angelina'} <span className="opacity-70">{brand?.lastName ?? 'Strelnikava'}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {menu.map((m) => (
              <a key={m.href} href={m.href} className="text-sm opacity-80 hover:opacity-100 transition">
                {m.label}
              </a>
            ))}
            <button
              aria-label="Toggle theme"
              className="text-sm opacity-80 hover:opacity-100 transition"
              onClick={() => toggleDark?.(!dark)}
            >
              {dark ? 'Light' : 'Dark'}
            </button>
            <button
              className="ml-2 text-sm opacity-80 hover:opacity-100 transition"
              onClick={() => setLang((p) => (p === 'en' ? 'ru' : 'en'))}
              aria-label="Switch language"
            >
              {lang.toUpperCase()}
            </button>
          </nav>
        </div>
      </header>

      {/* Герой/титульный блок */}
      <section id="home">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 py-16 px-4 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              {brand?.firstName ?? 'Angelina'} {brand?.lastName ?? 'Strelnikava'}
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-80">
              {t?.tagline ?? 'Travel, Portrait & Lifestyle Photography'}
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#work" className="btn btn-primary px-4 py-2 rounded-full bg-rose-700 text-white hover:bg-rose-600">
                {t?.btn?.see ?? 'See my work'}
              </a>
              <a href="#packages" className="btn px-4 py-2 rounded-full border border-white/20 hover:bg-white/10">
                {t?.btn?.packages ?? 'Packages'}
              </a>
            </div>
          </div>

          {/* Три крупных карточки наверху (используют те же стили, что и общая галерея) */}
          <div className="grid grid-cols-3 gap-4">
            {(gallery.slice(0, 3)).map((item, i) => (
              <div
                key={`top-${i}-${item.src}`}
                className="relative overflow-hidden rounded-2xl group"
                style={{ aspectRatio: item?.ratio || (i === 0 ? '3 / 4' : '3 / 5') }}
              >
                <img
                  src={item?.src}
                  alt={item?.alt || ''}
                  className="w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out group-hover:scale-110"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  style={{ objectPosition: item?.focal || 'center' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея работ */}
      <Section
        id="work"
        title={t?.work?.title ?? 'Featured Work'}
        subtitle={t?.work?.subtitle ?? 'A selection of travel, portrait, and story moments.'}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((item, index) => (
            <div
              key={item.src}
              className="relative overflow-hidden rounded-2xl group shadow"
              style={{ aspectRatio: item?.ratio || '3 / 4' }}
            >
              <img
                src={item.src}
                alt={item.alt || ''}
                className={clsx(
                  'w-full h-full object-cover',
                  'transition-transform duration-[7000ms] ease-in-out group-hover:scale-110'
                )}
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
                style={{
                  objectPosition: item?.focal || 'center',
                }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Остальные секции можно добавить позже */}
      {/* <Section id="services" title="Services">...</Section> */}
      {/* <Section id="about" title="About">...</Section> */}
      {/* <Section id="contact" title="Contact">...</Section> */}

      <footer className="mt-16 py-10 text-center opacity-60">
        © {new Date().getFullYear()} {brand?.firstName ?? 'Angelina'} {brand?.lastName ?? 'Strelnikava'}
      </footer>
    </div>
  );
}
