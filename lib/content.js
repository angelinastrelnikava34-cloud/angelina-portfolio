// lib/content.js

const CONTENT = {
  brand: {
    firstname: "Angelina",
    lastName: "Strelnikava",
    tagline: "Travel, Portrait & Lifestyle Photography",
  },

  contact: {
    email: "angelinastrelnikava34@gmail.com",
  },

  socials: {
    instagram: "https://www.instagram.com/strelnikava_ph",
  },

  // Featured Work — файлы из /public/gallery
  gallery: [
    { src: "/gallery/01-subway-couple.jpeg", alt: "Subway couple" },
    { src: "/gallery/02-boston-sailor-mohawk.jpeg", alt: "Boston sailor mohawk" },
    { src: "/gallery/03-boston-sailor-mohawk-bw.jpeg", alt: "Boston sailor mohawk B&W" },
    { src: "/gallery/04-street-nyc-boy-rain.jpeg", alt: "NYC street in rain" },
    { src: "/gallery/05-street-nyc-batman.jpeg", alt: "NYC Batman street" },
    { src: "/gallery/06-couple-under-umbrella.jpeg", alt: "Couple under umbrella" },
    { src: "/gallery/07-nyc-rain-bikes-bw.jpeg", alt: "NYC bikes in rain B&W" },
    { src: "/gallery/08-boston-steam-crossing.jpeg", alt: "Boston steam crossing" },
    { src: "/gallery/09-wedding-candid-smile.jpeg", alt: "Wedding candid smile" },
    { src: "/gallery/10-wedding-intimate-portrait.jpeg", alt: "Wedding intimate portrait" },
    { src: "/gallery/11-acadia-lake-friends.jpeg", alt: "Acadia lake friends" },
    { src: "/gallery/12-boston-sailor-briefing.jpeg", alt: "Boston sailor briefing" },
    { src: "/gallery/24-wedding-back-bay-dance-bw.JPEG", alt: "Back Bay wedding dance B&W" },
    { src: "/gallery/IMG_2904.jpg", alt: "Street scene" },
  ],

  // Пакеты — 4 шт. (Express добавлен)
  services: [
    { id: "portrait", from: 190 },
    { id: "couple", from: 260 },
    { id: "event", from: "custom" },
    { id: "express", from: 120 },
  ],

  // About
  about: {
    subtitle: "Travel, Portrait & Lifestyle Photography",
    paragraphs: [
      "Hi! I'm Angelina, a travel, portrait & lifestyle photographer based in Massachusetts, USA.",
      "I love cinematic, natural, story-driven images — from quiet everyday moments to events and weddings.",
      "I speak English and Russian, and I’m happy to plan a session around your story and locations you love.",
    ],
  },

  testimonials: [],
};

export default CONTENT;
