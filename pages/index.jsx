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

          {/* Три превью из галереи — одинаковый размер */}
<div className="grid grid-cols-3 gap-4 justify-items-center">
  {[0, 1, 2].map((i) => {
    const item = gallery[i] || {};
    return (
      <div
        key={i}
        className="relative overflow-hidden rounded-2xl shadow-sm"
      >
        <img
          src={item.src || '/gallery/01-subway-couple.jpeg'}
          alt={item.alt || ''}
          className="h-44 w-32 object-cover rounded-2xl"
          loading={i < 1 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    );
  })}
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
     <Section
  id="about"
  title="About me"
  subtitle="Travel, Portrait & Lifestyle Photography"
>
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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Mini */}
    <div className="card p-6 flex flex-col">
      <h3 className="text-lg font-semibold">Mini</h3>
      <p className="text-sm opacity-70 mt-1">30–45 min • 10 edited photos</p>
      <div className="text-3xl font-bold mt-4">$149</div>
      <ul className="mt-4 space-y-2 text-sm">
        <li>• 1 location</li>
        <li>• Online gallery</li>
        <li>• 7-day delivery</li>
      </ul>
      <a
        href={`mailto:${contact.email}?subject=Mini%20session%20booking`}
        className="btn btn-primary mt-6"
      >
        Book Mini
      </a>
    </div>

    {/* Standard */}
    <div className="card p-6 flex flex-col">
      <h3 className="text-lg font-semibold">Standard</h3>
      <p className="text-sm opacity-70 mt-1">1.5–2 h • 25 edited photos</p>
      <div className="text-3xl font-bold mt-4">$299</div>
      <ul className="mt-4 space-y-2 text-sm">
        <li>• 1–2 locations</li>
        <li>• Outfit guidance</li>
        <li>• 5-day delivery</li>
      </ul>
      <a
        href={`mailto:${contact.email}?subject=Standard%20session%20booking`}
        className="btn btn-primary mt-6"
      >
        Book Standard
      </a>
    </div>

    {/* Story / Wedding */}
    <div className="card p-6 flex flex-col">
      <h3 className="text-lg font-semibold">Story / Wedding</h3>
      <p className="text-sm opacity-70 mt-1">Half-/Full day • custom</p>
      <div className="text-3xl font-bold mt-4">from $699</div>
      <ul className="mt-4 space-y-2 text-sm">
        <li>• Timeline help</li>
        <li>• Sneak peeks in 48h</li>
        <li>• Full gallery</li>
      </ul>
      <a
        href={`mailto:${contact.email}?subject=Story%20/%20Wedding%20inquiry`}
        className="btn btn-primary mt-6"
      >
        Get a quote
      </a>
    </div>
  </div>
</Section>

      {/* CONTACT */}
<Section id="contact" title="Contact" subtitle="">
  <div className="flex items-center gap-4">
    {/* Email */}
    <a className="icon-btn" aria-label="Email"
       href={`mailto:${contact.email}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>
        <path d="m22 6-10 7L2 6"/>
      </svg>
    </a>

    {/* Instagram */}
    <a className="icon-btn" aria-label="Instagram"
       href={socials.instagram} target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="3.5"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    </a>
  </div>

  {/* Текстовые ссылки (на случай, если иконки недоступны) */}
  <div className="mt-4 text-sm opacity-70">
    <div>Email: <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a></div>
    <div>Instagram: <a className="underline" href={socials.instagram} target="_blank" rel="noreferrer">
      {socials.instagram}
    </a></div>
  </div>
</Section>
