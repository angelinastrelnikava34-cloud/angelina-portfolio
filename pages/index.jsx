// pages/index.jsx
import { useState } from 'react';
import Section from '../components/Section';
import { CONTENT } from '../lib/content';

export default function Home() {
  const [dark, setDark] = useState(false);
  const {
    brand = {},
    contact = {},
    socials = {},
    gallery = [],
    packages: pkgs = [],
    about = {},
  } = CONTENT;

  const toggleDark = () => setDark((v) => !v);

  return (
    <div className={dark ? 'dark' : ''}>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30">
        <div className="container mx-auto flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-semibold tracking-tight text-base">
              {brand?.firstName} <span className="opacity-70">{brand?.lastName}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-5">
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
            <button
              onClick={toggleDark}
              className="ml-2 rounded-full px-3 py-1 text-sm border"
              aria-label="Toggle theme"
            >
              {dark ? 'Light' : 'Dark'}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <Section id="home">
        <div className="container grid md:grid-cols-2 gap-10 py-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              {brand?.firstName} {brand?.lastName}
            </h1>
            <p className="mt-4 text-base opacity-80">
              Travel, Portrait & Lifestyle Photography
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#work" className="btn btn-primary">See my work</a>
              <a href="#packages" className="btn btn-outline">Packages</a>
            </div>
          </div>

          {/* Три превью слева/справа — можно заменить своими */}
          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => {
              const item = gallery[i] || {};
              return (
                <div key={i} className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.src || '/gallery/01-subway-couple.jpeg'}
                    alt={item.alt || ''}
                    className="w-full h-full object-cover"
                    loading={i < 1 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* WORK / GALLERY */}
      <Section id="work" title="Featured Work" subtitle="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(gallery) && gallery.map((item, index) => (
            <div key={item.src || index} className="relative overflow-hidden rounded-2xl group">
              <img
                src={item.src}
                alt={item.alt || ''}
                className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-110"
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
                style={{
                  objectPosition: (item.focal && typeof item.focal === 'string') ? item.focal : 'center'
                }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" title="About me" subtitle="">
        <div className="prose prose-invert max-w-2xl text-sm sm:text-base">
          {Array.isArray(about?.paragraphs) && about.paragraphs.map((p, i) => (
            <p key={i} className="opacity-90">{p}</p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact?.email || ''}?subject=Photography%20booking`}
            className="btn btn-primary"
          >
            Book a session
          </a>
          {socials?.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Instagram
            </a>
          )}
        </div>
      </Section>

      {/* PACKAGES */}
      <Section id="packages" title="Packages" subtitle="">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(pkgs) && pkgs.map((s, i) => (
            <li key={i} className="card">
              <h3 className="text-base font-semibold">{s.title}</h3>
              {s.desc && <p className="mt-1 opacity-80">{s.desc}</p>}

              {Array.isArray(s.features) && s.features.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm opacity-80">
                  {s.features.map((f, k) => <li key={k}>• {f}</li>)}
                </ul>
              )}

              {s.price && (
                <div className="mt-4 text-right font-semibold">{s.price}</div>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* CONTACT (якорь для навигации из хедера) */}
      <Section id="contact" title="Contact" subtitle="">
        <div className="space-y-3 text-sm">
          {contact?.email && (
            <p>Email: <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a></p>
          )}
          {socials?.instagram && (
            <p>Instagram: <a className="underline" href={socials.instagram} target="_blank" rel="noreferrer">{socials.instagram}</a></p>
          )}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mt-16 py-10 text-center opacity-60">
        © {new Date().getFullYear()} {brand?.firstName} {brand?.lastName}
      </footer>
    </div>
  );
}
