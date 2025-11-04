import Section from '../components/Section';
import { CONTENT } from '../lib/content';
import { useEffect, useState } from 'react';
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

  // язык
  const [lang, setLang] = useState('en');
  const t = (en, ru) => (lang === 'ru' ? ru : en);

  // тема
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = saved || (prefersDark ? 'dark' : 'light');
    setTheme(next);
    const root = document.documentElement;
    if (next === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
  }, []);
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    const root = document.documentElement;
    if (next === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
  };

  // безопасные заглушки для первых кадров (если вдруг чего-то нет)
  const safe = (i, alt='') => gallery[i] || { src: `/gallery/${String(i+1).padStart(2,'0')}-placeholder.jpeg`, alt };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-[rgba(255,255,255,0.45)] dark:bg-[rgba(0,0,0,0.45)]">
        <div className="container h-14 flex items-center justify-between">
          <a href="#home" className="font-medium">
            {brand?.firstName} {brand?.lastName}
          </a>

          <div className="flex items-center gap-4 text-sm">
            <a href="#work" className="opacity-90 hover:opacity-100">{t('Work','Портфолио')}</a>
            <a href="#packages" className="opacity-90 hover:opacity-100">{t('Services','Услуги')}</a>
            <a href="#about" className="opacity-90 hover:opacity-100">{t('About','Обо мне')}</a>
            <a href="#contact" className="opacity-90 hover:opacity-100">{t('Contact','Контакты')}</a>

            <button onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
                    className="btn btn-outline h-8 px-3" aria-label="Language">
              {lang === 'en' ? 'RU' : 'EN'}
            </button>

            <button onClick={toggleTheme}
                    className="btn btn-outline h-8 px-3" aria-label="Theme">
              {theme === 'dark' ? t('Light','Светлая') : t('Dark','Тёмная')}
            </button>

            <a href={`mailto:${contact?.email}?subject=Photography%20booking`}
               className="btn btn-primary h-8">
              {t('Book now','Записаться')}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — новый, более сбалансированный коллаж 5 фото */}
      <header id="home" className="container">
        <div className="py-10 md:py-16 grid grid-cols-1 lg:grid-cols-[1.05fr,1fr] gap-10 items-start">
          {/* текст */}
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              {brand?.firstName} {brand?.lastName}
            </h1>
            <p className="mt-2 text-sm md:text-base opacity-80">
              Travel, Portrait & Lifestyle Photography
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#work" className="btn btn-primary">{t('See my work','Портфолио')}</a>
              <a href="#packages" className="btn btn-outline">{t('Packages','Пакеты')}</a>
            </div>
          </div>

          {/* коллаж: 1 высокий слева + две колонны справа (средний + маленький) */}
          <div className="grid grid-cols-3 gap-4 items-stretch kb-paused">
            {/* высокий (колонка 1) */}
            <div className="relative overflow-hidden rounded-2xl shadow col-span-1 h-[26rem]">
              <img src={safe(0).src} alt={safe(0).alt||''}
                   className="h-full w-full object-cover kb-animate" />
            </div>

            {/* колонка 2: средний + маленький */}
            <div className="col-span-1 flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow h-56">
                <img src={safe(1).src} alt={safe(1).alt||''}
                     className="h-full w-full object-cover kb-animate" />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow h-32">
                <img src={safe(2).src} alt={safe(2).alt||''}
                     className="h-full w-full object-cover kb-animate" />
              </div>
            </div>

            {/* колонка 3: средний + маленький */}
            <div className="col-span-1 flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow h-56">
                <img src={safe(3).src} alt={safe(3).alt||''}
                     className="h-full w-full object-cover kb-animate" />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow h-32">
                <img src={safe(4).src} alt={safe(4).alt||''}
                     className="h-full w-full object-cover kb-animate" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* WORK / GALLERY */}
      <Section id="work" title={t('Featured Work','Избранные работы')}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 kb-paused">
          {gallery.slice(0, 18).map((item, index) => (
            <div key={item.src || index}
                 className="relative overflow-hidden rounded-2xl shadow group transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={item.src}
                alt={item.alt || ''}
                className="w-full h-full object-cover kb-animate"
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
                style={{ objectPosition: item.focal || 'center' }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" title={t('About me','Обо мне')} subtitle="Travel, Portrait & Lifestyle Photography">
        <div className="prose prose-invert max-w-2xl text-sm sm:text-base">
          {(CONTENT?.about?.paragraphs || [
            t("Hi! I'm Angelina, a travel, portrait & lifestyle photographer based in Massachusetts, USA.",
              "Привет! Я Ангелина, фотограф путешествий, портретов и лайфстайла в штате Массачусетс, США."),
            t('I love cinematic, natural, story-driven images — from quiet everyday moments to events and weddings.',
              'Люблю кинематографичные, естественные, сюжетные кадры — от тихих моментов до событий и свадеб.'),
            t('I speak English and Russian and I’m happy to plan a session around your story and locations you love.',
              'Говорю на английском и русском, с удовольствием подберу съёмку под вашу историю и любимые локации.')
          ]).map((p, i) => (<p key={i} className="opacity-90">{p}</p>))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary w-full sm:w-auto"
             href={`mailto:${contact?.email}?subject=Photography%20booking`}>
            {t('Book a session','Записаться')}
          </a>
          {socials?.instagram && (
            <a className="btn btn-outline w-full sm:w-auto"
               href={socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          )}
        </div>
      </Section>

      {/* PACKAGES */}
      <Section id="packages" title={t('Packages','Пакеты')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(Array.isArray(services) && services.length ? services : [
            { name: t('Mini','Мини'),     price: '$120', features: [t('30 min','30 мин'), t('10 edited photos','10 обработанных фото'), t('1 location','1 локация')] },
            { name: t('Standard','Стандарт'), price: '$220', features: [t('60 min','60 мин'), t('25 edited photos','25 обработанных фото'), t('1–2 locations','1–2 локации')] },
            { name: t('Premium','Премиум'),   price: '$390', features: [t('120 min','120 мин'), t('50 edited photos','50 обработанных фото'), t('multi-location','несколько локаций')] }
          ]).map((s, i) => (
            <div key={i} className="card p-5 hover:shadow-md transition kb-paused">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium">{s.name}</h3>
                <div className="text-right font-semibold">{s.price}</div>
              </div>
              {Array.isArray(s.features) && s.features.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm opacity-90">
                  {s.features.map((f, k) => (<li key={k} className="flex gap-2"><span>•</span><span>{f}</span></li>))}
                </ul>
              )}
              <a href={`mailto:${contact?.email}?subject=${encodeURIComponent(`Booking: ${s.name}`)}`}
                 className="btn btn-primary mt-5 w-full">
                {t('Book this','Выбрать пакет')}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={t('Contact','Контакты')}>
        <div className="flex flex-col gap-4 text-sm">
          {contact?.email && (
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:opacity-80">
              <MailIcon className="h-5 w-5" /><span>{contact.email}</span>
            </a>
          )}
          {socials?.instagram && (
            <a href={socials.instagram} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 hover:opacity-80">
              <InstagramIcon className="h-5 w-5" /><span>@strelnikava_ph</span>
            </a>
          )}
        </div>
      </Section>

      <footer className="container py-10 text-center opacity-60">
        © {new Date().getFullYear()} {brand?.firstName ?? 'Angelina'} {brand?.lastName ?? 'Strelnikava'}
      </footer>
    </div>
  );
}
