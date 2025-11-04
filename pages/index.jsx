import { useMemo, useState } from 'react';
import Section from '@/components/Section';
import dict from '@/lib/i18n';
import CONTENT from '@/lib/content';
import clsx from 'clsx';

function SafeImg({ src, alt = '', className = '', style, eager = false, focal = 'center' }) {
  const onError = (e) => e?.currentTarget && (e.currentTarget.style.display = 'none');
  if (!src) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ objectPosition: focal, ...(style || {}) }}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={onError}
    />
  );
}

export default function Home({ toggleDark = () => {}, dark = false }) {
  const [lang, setLang] = useState('en');
  const t = dict?.[lang] || {};

  const brand = CONTENT?.brand || { firstname: 'Angelina', lastName: 'Strelnikava', tagline: 'Travel, Portrait & Lifestyle Photography' };
  const contact = CONTENT?.contact || { email: 'angelinastrelnikava34@gmail.com' };
  const socials = CONTENT?.socials || { instagram: 'https://www.instagram.com/strelnikava_ph' };
  const gallery = Array.isArray(CONTENT?.gallery) ? CONTENT.gallery : [];
  const services = Array.isArray(CONTENT?.services) ? CONTENT.services : [];
  const aboutParagraphs = Array.isArray(CONTENT?.about?.paragraphs) ? CONTENT.about.paragraphs : [];

  const labels = {
    work: t?.menu?.work || 'Work',
    services: t?.menu?.services || 'Services',
    about: t?.menu?.about || 'About',
    contact: t?.menu?.contact || 'Contact',
    seeWork: t?.btn?.seeWork || 'See my work',
    packages: t?.btn?.packages || 'Packages',
    book: t?.btn?.book || 'Book now',
    bookThis: t?.btn?.book || 'Book this',
    aboutTitle: t?.about?.title || 'About me',
    aboutSubtitle: t?.about?.subtitle || 'Travel, Portrait & Lifestyle Photography',
    packagesTitle: t?.packages?.title || 'Packages',
    contactTitle: t?.contact?.title || 'Contact',
    featuredTitle: t?.work?.title || 'Featured Work',
  };

  const menu = useMemo(
    () => [
      { href: '#work', label: labels.work },
      { href: '#services', label: labels.services },
      { href: '#about', label: labels.about },
      { href: '#contact', label: labels.contact },
    ],
    [lang]
  );

  return (
    <div className={clsx('min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black')}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-900/50">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-sm md:text-base">
            {brand.firstname} <span className="opacity-70">{brand.lastName}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {menu.map((m) => (
              <a key={m.href} href={m.href} className="opacity-80 hover:opacity-100 transition">
                {m.label}
              </a>
            ))}
            <button
              className="px-3 py-1 rounded-full border text-sm opacity-80 hover:opacity-100"
              onClick={() => setLang((p) => (p === 'en' ? 'ru' : 'en'))}
            >
              {lang.toUpperCase()}
            </button>
            <button
              className="px-3 py-1 rounded-full border text-sm opacity-80 hover:opacity-100"
              onClick={toggleDark}
            >
              {dark ? 'Light' : 'Dark'}
            </button>
            <a
              href={`mailto:${contact.email}?subject=Photography%20booking`}
              className="btn btn-primary"
            >
              {labels.book}
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1fr,560px] gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              {brand.firstname} {brand.lastName}
            </h1>
            <p className="mt-3 text-sm md:text-base opacity-80">{brand.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a href="#work" className="btn btn-primary">{labels.seeWork}</a>
              <a href="#packages" className="btn btn-outline">{labels.packages}</a>
            </div>
          </div>

          {/* 5 мини-превью */}
          <div className="grid grid-cols-5 gap-4">
            {gallery.slice(0, 5).map((item, idx) => (
              <div key={item?.src || idx} className="relative overflow-hidden rounded-2xl">
                <SafeImg
                  src={item?.src}
                  alt={item?.alt}
                  focal={item?.focal}
                  eager={idx < 2}
                  className="h-44 w-full object-cover rounded-2xl kb-animate"
                  style={{ animationDelay: `${(idx % 6) * 0.8}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK — без пустоты сверху */}
<Section id="work" title={labels.featuredTitle} spacing="tight">
  <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {gallery.map((item, index) => (
      <div key={item?.src || index} className="relative overflow-hidden rounded-2xl">
        <SafeImg
          src={item?.src}
          alt={item?.alt}
          focal={item?.focal}
          eager={index < 3}
          className="w-full h-full object-cover rounded-2xl kb-animate"
          style={{ animationDelay: `${(index % 6) * 0.8}s` }}
        />
      </div>
    ))}
  </div>
</Section>

      {/* ABOUT */}
      <Section id="about" title={labels.aboutTitle} subtitle={labels.aboutSubtitle}>
        <div className="prose prose-invert max-w-2xl text-sm sm:text-base">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="opacity-90">{p}</p>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href={`mailto:${contact.email}?subject=Photography%20booking`}
            className="btn btn-primary"
          >
            {labels.book}
          </a>
          <a
            className="btn btn-outline inline-flex items-center gap-2"
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.8.1..."/></svg>
            Instagram
          </a>
        </div>
      </Section>

      {/* PACKAGES */}
      <Section id="packages" title={labels.packagesTitle}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card rounded-2xl p-5 group hover:scale-[1.01] transition">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-lg">{s?.title || 'Package'}</h3>
                <span className="text-sm opacity-70">{s?.price || ''}</span>
              </div>
              {Array.isArray(s?.features) && s.features.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm opacity-90">
                  {s.features.map((f, k) => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5">
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(`Package inquiry: ${s?.title || ''}`)}`}
                  className="btn btn-primary w-full"
                >
                  {labels.bookThis}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={labels.contactTitle}>
        <div className="grid gap-4 text-sm">
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 opacity-90 hover:opacity-100">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.5A2.5..."/></svg>
            <span>{contact.email}</span>
          </a>
          <a href={socials.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 opacity-90 hover:opacity-100">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.2c3.2..."/></svg>
            <span>@strelnikava_ph</span>
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="container mx-auto px-6 py-10 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} {brand.firstname} {brand.lastName}
      </footer>
    </div>
  );
}
