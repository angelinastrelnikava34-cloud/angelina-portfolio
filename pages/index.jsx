// pages/index.jsx
import { useMemo, useState } from 'react';
import Section from '@/components/Section';
import dict from '@/lib/i18n';
import CONTENT from '@/lib/content';
import clsx from 'clsx';

export default function Home({ toggleDark, dark }) {
  // Язык интерфейса
  const [lang, setLang] = useState('en');
  const t = dict[lang] || {};
  const { brand = {}, contact = {}, socials = {}, gallery = [], services = [], testimonials = [] } = CONTENT;

  // Пункты меню (fallback на английский, если в словаре нет)
  const menu = useMemo(
    () => [
      { href: '#work', label: t?.menu?.work || 'Work' },
      { href: '#services', label: t?.menu?.services || 'Services' },
      { href: '#about', label: t?.menu?.about || 'About' },
      { href: '#contact', label: t?.menu?.contact || 'Contact' },
    ],
    [t]
  );

  // Универсальный обработчик «убрать битое изображение»
  const hideIfBroken = (e) => {
    // Прячем сам <img>, чтобы не было «вопросительного» пиктограммы
    e.currentTarget.style.display = 'none';
    // Если нужно скрывать всю карточку — раскомментируй:
    // e.currentTarget.closest('.relative')?.remove();
  };

  return (
    <div className={clsx('min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black')}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-900/50">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-semibold tracking-tight text-sm md:text-base">
              {brand?.firstname || 'Angelina'} <span className="opacity-70">{brand?.lastName || 'Strelnikava'}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {menu.map((m) => (
              <a key={m.href} href={m.href} className="opacity-80 hover:opacity-100 transition">
                {m.label}
              </a>
            ))}

            {/* RU / EN переключатель */}
            <button
              className="px-3 py-1 rounded-full border text-sm opacity-80 hover:opacity-100"
              onClick={() => setLang((p) => (p === 'en' ? 'ru' : 'en'))}
              aria-label="Switch language"
              title="Switch language"
            >
              {lang?.toUpperCase()}
            </button>

            {/* Light / Dark */}
            <button
              className="px-3 py-1 rounded-full border text-sm opacity-80 hover:opacity-100"
              onClick={toggleDark}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {dark ? 'Light' : 'Dark'}
            </button>

            {/* Book now */}
            <a
              href={`mailto:${contact?.email || 'angelinastrelnikava34@gmail.com'}?subject=Photography%20booking`}
              className="btn btn-primary"
            >
              {t?.btn?.book || 'Book now'}
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1fr,560px] gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              {brand?.firstname || 'Angelina'} {brand?.lastName || 'Strelnikava'}
            </h1>
            <p className="mt-3 text-sm md:text-base opacity-80">
              {brand?.tagline || 'Travel, Portrait & Lifestyle Photography'}
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#work" className="btn btn-primary">
                {t?.btn?.seeWork || 'See my work'}
              </a>
              <a href="#packages" className="btn btn-outline">
                {t?.btn?.packages || 'Packages'}
              </a>
            </div>
          </div>

          {/* 5 мини-превью (анимированные, одинаковая высота; битые кадры скрываются) */}
          <div className="grid grid-cols-5 gap-4">
            {gallery.slice(0, 5).map((item, index) => (
              <div key={item.src} className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.src}
                  alt={item.alt || ''}
                  className="h-44 w-full object-cover rounded-2xl kb-animate"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  onError={hideIfBroken}
                  style={{ animationDelay: `${(index % 6) * 0.8}s`, objectPosition: item.focal || 'center' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / GALLERY */}
      <Section id="work" title={t?.work?.title || 'Featured Work'}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div key={item.src} className="relative overflow-hidden rounded-2xl">
              <img
                src={item.src}
                alt={item.alt || ''}
                className="w-full h-full object-cover rounded-2xl kb-animate"
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
                onError={hideIfBroken}
                style={{ animationDelay: `${(index % 6) * 0.8}s`, objectPosition: item.focal || 'center' }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section
        id="about"
        title={t?.about?.title || 'About me'}
        subtitle={t?.about?.subtitle || 'Travel, Portrait & Lifestyle Photography'}
      >
        <div className="prose prose-invert max-w-2xl text-sm sm:text-base">
          {(CONTENT?.about?.paragraphs || []).map((p, i) => (
            <p key={i} className="opacity-90">{p}</p>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={`mailto:${contact?.email || 'angelinastrelnikava34@gmail.com'}?subject=Photography%20booking`}
            className="btn btn-primary"
          >
            {t?.btn?.book || 'Book a session'}
          </a>

          {/* Instagram (иконка) */}
          {socials?.instagram && (
            <a
              className="btn btn-outline inline-flex items-center gap-2"
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.7.7.7.4 1.3.9 1.9 1.5.6.6 1.1 1.2 1.5 1.9.4.7.6 1.5.7 2.7.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.7 2.7-.4.7-.9 1.3-1.5 1.9-.6.6-1.2 1.1-1.9 1.5-.7.4-1.5.6-2.7.7-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.7-.7a6.9 6.9 0 0 1-1.9-1.5 6.9 6.9 0 0 1-1.5-1.9c-.4-.7-.6-1.5-.7-2.7-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .7-2.7.4-.7.9-1.3 1.5-1.9.6-.6 1.2-1.1 1.9-1.5.7-.4 1.5-.6 2.7-.7C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.2 0-3.6 0-4.8.1-.9.1-1.3.2-1.6.4-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.2.3-.3.7-.4 1.6-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c.1.9.2 1.3.4 1.6.2.4.4.7.7 1 .3.3.6.5 1 .7.3.2.7.3 1.6.4 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c.9-.1 1.3-.2 1.6-.4.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .2-.3.3-.7.4-1.6.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.1-.9-.2-1.3-.4-1.6a3.7 3.7 0 0 0-1.7-1.7c-.3-.2-.7-.3-1.6-.4-1.2-.1-1.6-.1-4.8-.1Zm0 3.5a6.5 6.5 0 1 1 0 13.1 6.5 6.5 0 0 1 0-13.1Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm5.3-2.3a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/></svg>
              Instagram
            </a>
          )}
        </div>
      </Section>

      {/* PACKAGES */}
      <Section id="packages" title={t?.packages?.title || 'Packages'}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card rounded-2xl p-5 group hover:scale-[1.01] transition">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-lg">{s.title}</h3>
                <span className="text-sm opacity-70">{s.price}</span>
              </div>
              {Array.isArray(s.features) && s.features.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm opacity-90">
                  {s.features.map((f, k) => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
              {Array.isArray(s.extras) && s.extras.length > 0 && (
                <ul className="mt-3 space-y-1 text-xs opacity-70">
                  {s.extras.map((f, k) => (
                    <li key={k}>— {f}</li>
                  ))}
                </ul>
              )}
              <div className="mt-5">
                <a
                  href={`mailto:${contact?.email || 'angelinastrelnikava34@gmail.com'}?subject=${encodeURIComponent(
                    `Package inquiry: ${s.title}`
                  )}`}
                  className="btn btn-primary w-full"
                >
                  {t?.btn?.book || 'Book this'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={t?.contact?.title || 'Contact'}>
        <div className="grid gap-4 text-sm">
          {/* E-mail иконкой */}
          <a
            href={`mailto:${contact?.email || 'angelinastrelnikava34@gmail.com'}`}
            className="inline-flex items-center gap-2 opacity-90 hover:opacity-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.5 7.3 5.3L18.8 6H4.2Zm15.3 2.1-7.6 5.5a1 1 0 0 1-1.2 0L3.1 8.1V17.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V8.1Z"/></svg>
            <span>{contact?.email || 'angelinastrelnikava34@gmail.com'}</span>
          </a>

          {/* Instagram иконкой */}
          {socials?.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 opacity-90 hover:opacity-100"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.7.7.7.4 1.3.9 1.9 1.5.6.6 1.1 1.2 1.5 1.9.4.7.6 1.5.7 2.7.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.7 2.7-.4.7-.9 1.3-1.5 1.9-.6.6-1.2 1.1-1.9 1.5-.7.4-1.5.6-2.7.7-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.7-.7a6.9 6.9 0 0 1-1.9-1.5 6.9 6.9 0 0 1-1.5-1.9c-.4-.7-.6-1.5-.7-2.7-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .7-2.7.4-.7.9-1.3 1.5-1.9.6-.6 1.2-1.1 1.9-1.5.7-.4 1.5-.6 2.7-.7C8.4 2.2 8.8 2.2 12 2.2Z"/></svg>
              <span>@strelnikava_ph</span>
            </a>
          )}
        </div>
      </Section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-10 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} {brand?.firstname || 'Angelina'} {brand?.lastName || 'Strelnikava'}
      </footer>
    </div>
  );
}
