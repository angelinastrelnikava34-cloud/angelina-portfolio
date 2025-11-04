import Section from '../components/Section';
import { CONTENT } from '../lib/content';
import clsx from 'clsx';

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75zm2.3.2 7.18 5.07c.32.23.72.23 1.04 0L19.7 6.95a1.25 1.25 0 0 0-.95-.45H5.25c-.37 0-.72.17-.95.45z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.75a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 2a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zM18.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
  </svg>
);

export default function Home() {
  const { brand, contact, socials, gallery = [], services = [] } = CONTENT;

  return (
    <div className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* ===== HERO ===== */}
      <header className="container mx-auto px-4">
        <div className="py-10 md:py-16">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {brand?.firstName} {brand?.lastName}
          </h1>
          <p className="mt-2 text-sm md:text-base opacity-80">
            Travel, Portrait & Lifestyle Photography
          </p>

          {/* мини-превью (3 шт.) одинакового размера */}
          <div className="mt-6 grid grid-cols-3 gap-4 justify-items-start">
            {[0, 1, 2].map((i) => {
              const it = gallery[i] || {};
              return (
                <div key={i} className="relative overflow-hidden rounded-2xl shadow-sm">
                  <img
                    src={it.src || '/gallery/01-subway-couple.jpeg'}
                    alt={it.alt || ''}
                    className="h-44 w-32 object-cover rounded-2xl"
                    loading={i < 1 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={`mailto:${contact?.email}?subject=Photography%20booking`}
              className="btn btn-primary"
            >
              See my work
            </a>
            <a
              href="#packages"
              className="btn btn-outline"
            >
              Packages
            </a>
          </div>
        </div>
      </header>

      {/* ===== WORK / GALLERY ===== */}
      <Section id="work" title={(brand?.work?.title) || 'Featured Work'}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.slice(0, 12).map((item, index) => (
            <div
              key={item.src || index}
              className={clsx(
                'relative overflow-hidden rounded-2xl shadow',
                'group transition-transform duration-500 hover:scale-[1.01]'
              )}
            >
              <img
                src={item.src}
                alt={item.alt || ''}
                className="w-full h-full object-cover"
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
                style={{ objectPosition: item.focal || 'center' }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ===== ABOUT ===== */}
      <Section
        id="about"
        title="About me"
        subtitle="Travel, Portrait & Lifestyle Photography"
      >
        <div className="prose prose-invert max-w-2xl text-sm sm:text-base">
          {(CONTENT?.about?.paragraphs || [
            "Hi! I'm Angelina, a travel, portrait & lifestyle photographer based in Massachusetts, USA.",
            "I love cinematic, natural, story-driven images — from quiet everyday moments to events and weddings.",
            "I speak English and Russian and I’m happy to plan a session around your story and locations you love."
          ]).map((p, i) => (
            <p key={i} className="opacity-90">{p}</p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="btn btn-primary w-full sm:w-auto"
            href={`mailto:${contact?.email}?subject=Photography%20booking`}
          >
            Book a session
          </a>
          {socials?.instagram && (
            <a
              className="btn btn-outline w-full sm:w-auto"
              href={socials.instagram}
              target="_blank" rel="noreferrer"
            >
              Instagram
            </a>
          )}
        </div>
      </Section>

      {/* ===== PACKAGES ===== */}
      <Section id="packages" title="Packages">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(Array.isArray(services) && services.length ? services : [
            { name: 'Mini', price: '$120', features: ['30 min', '10 edited photos', '1 location'] },
            { name: 'Standard', price: '$220', features: ['60 min', '25 edited photos', '1–2 locations'] },
            { name: 'Premium', price: '$390', features: ['120 min', '50 edited photos', 'multi-location'] }
          ]).map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/10 dark:border-white/10 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium">{s.name}</h3>
                <div className="text-right font-semibold">{s.price}</div>
              </div>
              {Array.isArray(s.features) && s.features.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm opacity-90">
                  {s.features.map((f, k) => (
                    <li key={k} className="flex gap-2">
                      <span>•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={`mailto:${contact?.email}?subject=${encodeURIComponent(`Booking: ${s.name}`)}`}
                className="btn btn-primary mt-5 w-full"
              >
                Book this
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== CONTACT ===== */}
      <Section id="contact" title="Contact">
        <div className="flex flex-col gap-4 text-sm">
          {contact?.email && (
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 hover:opacity-80"
            >
              <MailIcon className="h-5 w-5" />
              <span>{contact.email}</span>
            </a>
          )}
          {socials?.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-80"
            >
              <InstagramIcon className="h-5 w-5" />
              <span>@strelnikava_ph</span>
            </a>
          )}
        </div>
      </Section>

      <footer className="container mx-auto px-4 py-10 text-center opacity-60">
        © {new Date().getFullYear()} {brand?.firstName ?? 'Angelina'} {brand?.lastName ?? 'Strelnikava'}
      </footer>
    </div>
  );
}
