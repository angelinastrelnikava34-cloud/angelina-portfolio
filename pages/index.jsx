// pages/index.jsx
import { useEffect, useMemo, useState } from "react";

/* ====== настройки темы и языка (без внешних файлов) ====== */
const LIGHT_BG = "#F5DCE1"; // светлый «pantone light wine»
const DARK_BG  = "#0E0E0F";
const ACCENT   = "#B04360"; // бордовый акцент для кнопок/иконок

const TEXT = {
  en: {
    heroTitle: "Angelina Strelnikava",
    heroSub: "Travel, Portrait & Lifestyle Photography",
    seeWork: "See my work",
    packages: "Packages",
    featured: "Featured Work",
    about: "About me",
    aboutSub: "Travel, Portrait & Lifestyle Photography",
    aboutP: [
      "Hi! I'm Angelina, a travel, portrait & lifestyle photographer based in Massachusetts, USA.",
      "I love cinematic, natural, story-driven images — from quiet everyday moments to events and weddings.",
      "I speak English and Russian, and I’m happy to plan a session around your story and locations you love."
    ],
    bookNow: "Book now",
    instagram: "Instagram",
    contact: "Contact",
    from: "from",
    pricePortrait: "Portrait / Lifestyle",
    priceCouple: "Couple / Love Story",
    priceEvent: "Event / Small Wedding",
    priceCustom: "custom",
    cardFeatures: [
      ["60–90 min shooting","15–25 edited photos","Online gallery"],
      ["90–120 min shooting","25–40 edited photos","Location & styling help"],
      ["Story-driven coverage","Edited selection","Flexible timing"]
    ],
    bookThis: "Book this",
    email: "Email"
  },
  ru: {
    heroTitle: "Ангелина Стрельникова",
    heroSub: "Путешествия, портреты и лайфстайл-съёмка",
    seeWork: "Портфолио",
    packages: "Пакеты",
    featured: "Лучшие работы",
    about: "Обо мне",
    aboutSub: "Путешествия, портреты и лайфстайл-съёмка",
    aboutP: [
      "Привет! Я Ангелина — фотограф из Массачусетса (США): путешествия, портреты и лайфстайл.",
      "Люблю кинематографичные, естественные, «историйные» кадры — от тихих моментов до событий и свадеб.",
      "Говорю на английском и русском, подберу локации и план сессии под вашу историю."
    ],
    bookNow: "Записаться",
    instagram: "Instagram",
    contact: "Контакты",
    from: "от",
    pricePortrait: "Портрет / Лайфстайл",
    priceCouple: "Пара / Love Story",
    priceEvent: "Событие / Небольшая свадьба",
    priceCustom: "индивидуально",
    cardFeatures: [
      ["Съёмка 60–90 мин","15–25 обработанных фото","Онлайн-галерея"],
      ["Съёмка 90–120 мин","25–40 обработанных фото","Помощь с локацией и образом"],
      ["Историйная съёмка","Отобранные и обработанные кадры","Гибкое время"]
    ],
    bookThis: "Выбрать",
    email: "Почта"
  }
};

/* ====== галерея (только локальные файлы из /public/gallery) ======
   Если какого-то файла нет — карточка сама скрывается (onError).  */
const GALLERY = [
  { src: "/gallery/01-boston-train.jpg",  alt: "Boston T platform, motion blur" },
  { src: "/gallery/02-boston-sailor-mohawk.jpg", alt: "Sailor with mohawk at the helm" },
  { src: "/gallery/03-umbrella-couple.jpg", alt: "Couple with umbrella at night" },
  { src: "/gallery/04-sail-bw.jpg", alt: "Sailing in black and white" },
  { src: "/gallery/05-times-square.jpg", alt: "Times Square street scene" },
  { src: "/gallery/IMG_8812.jpeg", alt: "Small wedding dance outside 11" }, // новое фото
];

/* ====== утилиты ====== */
const Button = ({ children, href, variant="primary" }) => {
  const cls = variant === "outline"
    ? "border border-white/20 hover:border-white/40"
    : "bg-[--accent] hover:brightness-110";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition ${cls}`}
      style={{ ["--accent"]: ACCENT }}
    >
      {children}
    </a>
  );
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = useMemo(() => TEXT[lang], [lang]);
  const [theme, setTheme] = useState("dark");

  // применяем тему к <html>
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      html.style.background = DARK_BG;
    } else {
      html.classList.remove("dark");
      html.style.background = LIGHT_BG;
    }
  }, [theme]);

  // плавная «дыхалка» для картинок (keyframes — инлайн)
  useEffect(() => {
    const id = "kb-zoom-pan";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = `
        @keyframes kb-zoom-pan { 
          0% { transform: scale(1) translate(0,0) } 
          50% { transform: scale(1.02) translate(0, -1%) } 
          100% { transform: scale(1) translate(0,0) } 
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // email/insta
  const contact = {
    email: "angelinastrelnikava34@gmail.com",
    instagram: "https://www.instagram.com/strelnikava_ph"
  };

  return (
    <div className="min-h-screen text-white selection:bg-white/10">
      {/* TOP BAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/30">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold">Strelnikava</span>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
            <div className="h-5 w-px bg-white/15" />
            <button
              onClick={() => setLang(l => l === "en" ? "ru" : "en")}
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15"
              aria-label="Toggle language"
              title="Toggle language"
            >
              {lang === "en" ? "EN" : "RU"}
            </button>
            <button
              onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "dark" ? "Dark" : "Light"}
            </button>
            <Button href="#contact">{t.bookNow}</Button>
          </nav>
        </div>
      </header>

      {/* HERO (без миниатюр, центрированный) */}
      <section className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="mt-3 text-white/80">{t.heroSub}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#work">{t.seeWork}</Button>
              <Button href="#services" variant="outline">{t.packages}</Button>
            </div>
          </div>
          {/* правую колонку оставляем пустой — визуально дышит */}
          <div className="hidden md:block" />
        </div>
      </section>

      {/* FEATURED WORK — без пустого пространства */}
      <section id="work" className="container mx-auto px-6 pt-6">
        <h2 className="text-2xl font-bold mb-4">{t.featured}</h2>

        {/* плотная «masonry» сетка без дырок */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6 auto-rows-[1px] [grid-auto-flow:dense]
          "
        >
          {GALLERY.filter(x => !!x.src).map((item, i) => (
            <figure
              key={item.src + i}
              className="
                group relative overflow-hidden rounded-2xl bg-white/5
                shadow-[0_1px_0_rgba(255,255,255,.04)_inset]
              "
            >
              <img
                src={item.src}
                alt={item.alt || ""}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
                className="
                  w-full h-full object-cover
                  transition-transform duration-[800ms]
                  group-hover:scale-[1.06]
                  [animation:kb-zoom-pan_12s_ease-in-out_infinite]
                "
                style={{ transformOrigin: "center" }}
              />
              <figcaption className="absolute bottom-2 left-2 text-xs bg-black/40 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                {item.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container mx-auto px-6 pt-16">
        <h2 className="text-2xl font-bold">{t.about}</h2>
        <p className="text-white/70 text-sm mt-1">{t.aboutSub}</p>
        <div className="prose prose-invert max-w-2xl text-sm mt-4">
          {t.aboutP.map((p, i) => <p key={i} className="opacity-90">{p}</p>)}
        </div>
        <div className="mt-6 flex gap-3">
          <Button href={`mailto:${contact.email}`}>{t.bookNow}</Button>
          <Button href={contact.instagram} variant="outline">{t.instagram}</Button>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="services" className="container mx-auto px-6 pt-16">
        <h2 className="text-2xl font-bold">Packages</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {/* 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.pricePortrait}</h3>
              <span className="text-xs text-white/60">{t.from} $190</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {t.cardFeatures[0].map((s, i) => <li key={i} className="list-disc list-inside">{s}</li>)}
            </ul>
            <Button href={`mailto:${contact.email}`} className="w-full block mt-6">
              {t.bookThis}
            </Button>
          </div>
          {/* 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.priceCouple}</h3>
              <span className="text-xs text-white/60">{t.from} $260</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {t.cardFeatures[1].map((s, i) => <li key={i} className="list-disc list-inside">{s}</li>)}
            </ul>
            <Button href={`mailto:${contact.email}`} className="w-full block mt-6">
              {t.bookThis}
            </Button>
          </div>
          {/* 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.priceEvent}</h3>
              <span className="text-xs text-white/60">{t.priceCustom}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {t.cardFeatures[2].map((s, i) => <li key={i} className="list-disc list-inside">{s}</li>)}
            </ul>
            <Button href={`mailto:${contact.email}`} className="w-full block mt-6">
              {t.bookThis}
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container mx-auto px-6 pt-16 pb-20">
        <h2 className="text-2xl font-bold">{t.contact}</h2>
        <div className="mt-4 flex flex-col gap-3 text-sm">
          {/* email */}
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 opacity-90 hover:opacity-100"
          >
            {/* mail icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" style={{ color: ACCENT }}>
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
            </svg>
            <span>{contact.email}</span>
          </a>

          {/* instagram */}
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 opacity-90 hover:opacity-100"
          >
            {/* insta icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" style={{ color: ACCENT }}>
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/>
            </svg>
            <span>@strelnikava_ph</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-white/60 pb-10">
        © {new Date().getFullYear()} Strelnikava
      </footer>
    </div>
  );
}

/* ====== простые util классы Tailwind (если их нет — Tailwind всё равно применит) ======
   Не требуются внешние CSS-файлы: мы используем готовые utility-классы. */
