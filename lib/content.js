// lib/content.js

export const CONTENT = {
  brand: {
    firstName: "Angelina",
    lastName: "Strelnikava",
    tagline: "Travel, Portrait & Lifestyle Photography",
    location: "Massachusetts, USA",
  },

  contact: {
    email: "angelinastrelnikava34@gmail.com",
    instagram: "https://www.instagram.com/strelnikava_ph",
    bookSubject: "Photography%20booking",
  },

  socials: {
    instagram: {
      label: "@strelnikava_ph",
      url: "https://www.instagram.com/strelnikava_ph",
    },
  },

  // ── Featured Work ───────────────────────────────────────────────────────
  // Порядок элементов = порядок на сайте.
  gallery: [
    // Новое фото — не забудь, файл должен лежать по пути:
    // public/gallery/24-wedding-back-bay-dance-bw.jpeg
    {
      src: "/gallery/24-wedding-back-bay-dance-bw.jpeg",
      alt: "Bride and groom dancing in Back Bay, Boston (B&W)",
      focal: "center",
    },

    { src: "/gallery/01-subway-couple.jpeg", alt: "Subway couple, motion blur", focal: "center" },
    { src: "/gallery/02-boston-sailor-mohawk.jpeg", alt: "Sailor with mohawk", focal: "center" },
    { src: "/gallery/03-boston-sailor-mohawk-bw.jpeg", alt: "Sailor with mohawk (B&W)", focal: "center" },
    { src: "/gallery/04-street-nyc-boy-rain.jpeg", alt: "NYC street in rain", focal: "center" },
    { src: "/gallery/05-street-nyc-batman.jpeg", alt: "Batman in NYC", focal: "center" },
    { src: "/gallery/06-couple-under-umbrella.jpeg", alt: "Couple under umbrella", focal: "center" },
    { src: "/gallery/07-nyc-rain-bikes-bw.jpeg", alt: "NYC rain bikes (B&W)", focal: "center" },
    { src: "/gallery/08-boston-steam-crossing.jpeg", alt: "Boston street & steam", focal: "center" },
    { src: "/gallery/09-wedding-candid-smile.jpeg", alt: "Wedding candid smile", focal: "center" },
    { src: "/gallery/10-wedding-intimate-portrait.jpeg", alt: "Wedding intimate portrait", focal: "center" },
    { src: "/gallery/11-acadia-lake-friends.jpeg", alt: "Acadia lake with friends", focal: "center" },
    { src: "/gallery/12-boston-sailor-briefing.jpeg", alt: "Sailor briefing", focal: "center" },
  ],

  // ── Packages (карточки) ────────────────────────────────────────────────
  services: [
    {
      title: "Portrait / Lifestyle",
      price: "from $190",
      features: ["60–90 min shooting", "15–25 edited photos", "Online gallery"],
    },
    {
      title: "Couple / Love Story",
      price: "from $260",
      features: ["90–120 min shooting", "25–40 edited photos", "Location & styling help"],
    },
    {
      title: "Event / Small Wedding",
      price: "custom",
      features: ["Story-driven coverage", "Edited selection", "Flexible timing"],
    },
  ],

  // ── About ───────────────────────────────────────────────────────────────
  about: {
    paragraphs: [
      "Hi! I'm Angelina, a travel, portrait & lifestyle photographer based in Massachusetts, USA.",
      "I love cinematic, natural, story-driven images — from quiet everyday moments to events and weddings.",
      "I speak English and Russian, and I’m happy to plan a session around your story and locations you love.",
    ],
  },

  testimonials: [],
};

// Оставляем и default, чтобы проекту было всё равно, как импортировать.
export default CONTENT;
