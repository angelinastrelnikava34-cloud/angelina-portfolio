// pages/index.jsx
import { useEffect, useMemo, useState } from "react";
import CONTENT from "../lib/content";

// Простой Section-обёртка (чтобы не зависеть от внешнего компонента)
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="container mx-auto px-6 pt-16">
      {title && (
        <h2 className="text-2xl font-bold">{title}</h2>
      )}
      {subtitle && (
        <p className="text-sm opacity-80 mt-1">{subtitle}</p>
      )}
      <div className={title ? "mt-6" : ""}>{children}</div>
    </section>
  );
}

// Mini утилита для скрытия битых картинок (чтобы не было «вопросиков»)
const hideOnError = (e) => {
  const card = e.currentTarget.closest(".kb-card");
  if (card) card.style.display = "none";
};

// Тексты EN/RU
const dict = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact" },
    seeMyWork: "See my work",
    packages: "Packages",
    featured: "Featured Work",
    aboutTitle: "About me",
    bookNow: "Book now",
    instagram: "Instagram",
    from: "from",
    bookThis: "Book this",
    pricePortrait: "Portrait / Lifestyle",
    priceCouple: "Couple / Love Story",
    priceEvent: "Event / Small Wedding",
    priceCustom: "custom",
    priceExpress: "Express Session",
    contact: "Contact",
  },
  ru: {
    nav: { work: "Работы", services: "Услуги", about: "Обо мне", contact: "Контакты" },
    seeMyWork: "Смотреть работы",
    packages: "Пакеты",
    featured: "Избранные работы",
    aboutTitle: "Обо мне",
    bookNow: "Записаться",
    instagram: "Instagram",
    from: "от",
    bookThis: "Записаться",
    pricePortrait: "Портрет / Lifestyle",
    priceCouple: "Пара / Love Story",
    priceEvent: "Событие / Небольшая свадьба",
    priceCustom: "по согласованию",
    priceExpress: "Экспресс-съёмка",
    contact: "Контакты",
  },
};

// Описания фичей для карточек пакетов
const serviceFeatures = {
  en: {
    portrait: ["60–90 min shooting", "15–25 edited photos", "Online gallery"],
    couple: ["90–120 min shooting", "25–40 edited photos", "Location & styling help"],
    event: ["Story-driven coverage", "Edited selection", "Flexible timing"],
    express: ["30–40 min photo shoot", "10–15 edited photos", "Online delivery within 2 days"],
  },
  ru: {
    portrait: ["60–90 мин съёмки", "15–25 обработанных фото", "Онлайн-галерея"],
    couple: ["90–120 мин съёмки", "25–40 обработанных фото", "Помощь с локацией и образом"],
    event: ["Съёмка с упором на историю", "Отобранные обработанные кадры", "Гибкое время"],
    express: ["30–40 мин съёмки", "10–15 обработанных фото", "Онлайн-отдача в течение 2 дней"],
  },
};

// Лёгкие стили без Tailwind конфигурации
const base = "transition duration-700 ease-in-out";
const imgHover = "hover:scale-[1.02]";

export default function Home() {
  const { brand, contact, socials, gallery, services, testimonials, about } = CONTENT;

  const [lang, setLang] = useState("en");          // en / ru
  const [theme, setTheme] = useState("dark");      // dark / light

  const t = useMemo(() => dict[lang], [lang]);

  // Тема: добавляем класс к <html>, чтобы dark/light реально переключались
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.setProperty("--bg", "24 24 24");
      root.style.setProperty("--fg", "255 255 255");
      root.style.setProperty("--card", "255 255 255 / 0.05");
      root.style.setProperty("--accent", "191 64 81"); // бордовый
    } else {
      root.classList.remove("dark");
      // Светлый «винный» оттенок (Pantone-like soft wine)
      root.style.setProperty("--bg", "244 208 213"); // #F4D0D5
      root.style.setProperty("--fg", "25 25 25");
      root.style.setProperty("--card", "255 255 255 / 0.60");
      root.style.setProperty("--accent", "191 64 81");
    }
  }, [theme]);

  // Автоязык — по navigator, но только при первом заходе
  useEffect(() => {
    try {
      const nav = navigator.language || "";
      if (nav.toLowerCase().startsWith("ru")) setLang("ru");
    } catch {}
  }, []);

  return (
    <div className="min-h-screen text-[rgb(var(--fg))] bg-[rgb(var(--bg))] selection:bg-black/80 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-[rgb(var(--bg))]/70 border-b border-white/10">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#work" className="font-semibold">
            {brand.lastName || "Portfolio"}
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="opacity-80 hover:opacity-100">{t.nav.work}</a>
            <a href="#services" className="opacity-80 hover:opacity-100">{t.nav.services}</a>
            <a href="#about" className="opacity-80 hover:opacity-100">{t.nav.about}</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">{t.nav.contact}</a>

            <button
              className="px-2 py-1 rounded-full border border-white/10"
              onClick={() => setLang((p) => (p === "en" ? "ru" : "en"))}
            >
              {lang === "en" ? "EN" : "RU"}
            </button>

            <button
              className="px-2 py-1 rounded-full border border-white/10"
              onClick={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? "Dark" : "Light"}
            </button>

            <a
              href={`mailto:${contact.email}`}
              className="px-3 py-1 rounded-full bg-[rgb(var(--accent))] text-white"
            >
              {t.bookNow}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-16">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {brand.firstname} {brand.lastName}
            </h1>
            <p className="mt-3 opacity-80">{brand.tagline}</p>

            <div className="mt-6 flex gap-3">
              <a href="#work" className="px-4 py-2 rounded-xl bg-[rgb(var(--accent))] text-white">
                {t.seeMyWork}
              </a>
              <a href="#services" className="px-4 py-2 rounded-xl border border-white/10">
                {t.packages}
              </a>
            </div>
          </div>

          {/* Убрали верхние мини-превью — по твоему пожеланию */}
        </div>
      </section>

      {/* Featured Work */}
      <Section id="work" title={t.featured}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((g, i) => (
            <div key={`${g.src}-${i}`} className="kb-card overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--card))]">
              <img
                src={g.src}
                alt={g.alt || ""}
                loading={i < 3 ? "eager" : "lazy"}
                decoding="async"
                className={`w-full h-[460px] object-cover ${base} ${imgHover}`}
                onError={hideOnError}
                style={{ animationDelay: `${(i % 6) * 0.08}s` }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" title={t.aboutTitle} subtitle={about.subtitle}>
        <div className="prose prose-invert max-w-2xl text-sm sm:text-base">
          {(about.paragraphs || []).map((p, i) => <p key={i} className="opacity-90">{p}</p>)}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="px-4 py-2 rounded-xl bg-[rgb(var(--accent))] text-white"
          >
            {t.bookNow}
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border border-white/10"
          >
            {t.instagram}
          </a>
        </div>
      </Section>

      {/* Packages (4 карточки, включая Express) */}
      <Section id="services" title="Packages">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="rounded-2xl border border-white/10 bg-[rgb(var(--card))] p-5 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  {{
                    portrait: t.pricePortrait,
                    couple: t.priceCouple,
                    event: t.priceEvent,
                    express: t.priceExpress,
                  }[s.id] || "Package"}
                </h3>
                <span className="text-xs opacity-70">
                  {s.from === "custom" ? t.priceCustom : `${t.from} $${s.from}`}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm">
                {serviceFeatures[lang][s.id].map((x, k) => (
                  <li key={k} className="flex gap-2">
                    <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${contact.email}`}
                className="mt-6 inline-flex items-center justify-center w-full h-10 rounded-xl bg-[rgb(var(--accent))] text-white"
              >
                {t.bookThis}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={t.contact}>
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-[rgb(var(--card))] hover:border-white/20 transition"
          >
            {/* mail icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12L4 6.01V6h16ZM4 18V8.236l8 5.999l8-5.999V18H4Z"/>
            </svg>
            <span className="opacity-90">{contact.email}</span>
          </a>

          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-[rgb(var(--card))] hover:border-white/20 transition"
          >
            {/* insta icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-5 3a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 2a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 9m5.5-3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
            </svg>
            <span className="opacity-90">@strelnikava_ph</span>
          </a>
        </div>
      </Section>

      <footer className="container mx-auto px-6 py-10 text-center opacity-60 text-xs">
        © {new Date().getFullYear()} {brand.lastName}
      </footer>
    </div>
  );
}
