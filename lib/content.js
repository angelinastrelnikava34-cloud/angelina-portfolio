export const CONTENT = {
about: {
  title: 'About me',
  paragraphs: [
    "Hi! I'm Angelina, a travel, portrait & lifestyle photographer based in Massachusetts, USA.",
    "I love cinematic, natural, story-driven images — from quiet everyday moments to events and weddings.",
    "I speak English and Russian, and I’m happy to plan a session around your story and locations you love."
  ]
},  // <-- запятая здесь важна!

services: [
  {
    name: 'Portrait Session',
    tagline: 'Individuals • Couples • Lifestyle',
    features: ['60–90 min', '1–2 locations', '30+ edited photos', 'Online gallery']
  },
  {
    name: 'Event / Wedding',
    tagline: 'Story-driven coverage',
    features: ['2–6 hours', 'Highlights + candid', '200+ edited photos', 'Online gallery']
  },
  {
    name: 'Creative Project',
    tagline: 'Concept • Editorial vibe',
    features: ['Idea & moodboard', 'Location & styling tips', 'Flexible timing', 'Art direction']
  }
],
  brand: {
    firstName: 'Angelina',
    lastName: 'Strelnikava',
    location: 'Massachusetts, USA',
    city: 'Boston, MA',
  },

  contact: { email: 'angelinastrelnikava34@gmail.com' },

  socials: {
    instagram: 'https://www.instagram.com/strelnikava_ph',
  },

gallery: [
  { src: '/gallery/01-subway-couple.jpeg',        alt: 'Couple on Boston platform — motion blur train' },
  { src: '/gallery/02-boston-sailor-mohawk.jpeg',  alt: 'Sailor with mohawk steering — color portrait' },
  { src: '/gallery/06-couple-under-umbrella.jpeg', alt: 'NYC couple under umbrella — rainy evening' },

  { src: '/gallery/03-boston-sailor-mohawk-bw.jpeg', alt: 'Sailor with mohawk — black & white' },
  { src: '/gallery/05-street-nyc-batman.jpeg',       alt: 'Times Square character — night street' },
  { src: '/gallery/07-nyc-rain-bikes-bw.jpeg',       alt: 'Cyclists in rain — street motion, B&W' },
  { src: '/gallery/08-boston-steam-crossing.jpeg',   alt: 'Boston crosswalk in steam — cinematic' },
  { src: '/gallery/11-acadia-lake-friends.jpeg',     alt: 'Friends at Acadia lake — calm moment' },
  { src: '/gallery/12-boston-sailor-briefing.jpeg',  alt: 'Sailor briefing on deck — reportage' },
  { src: '/gallery/04-street-nyc-boy-rain.jpeg',     alt: 'Boy crossing in rain — street, B&W' },
  { src: '/gallery/09-wedding-candid-smile.jpeg',    alt: 'Wedding candid — smile and tenderness' },
],

  services: [
    { name: 'Reportage Photography', tagline: 'Events, celebrations, parties', features: ['Live storytelling', 'Natural emotions', 'On-location'] },
    { name: 'Portrait Photography', tagline: 'Personal & couple portraits', features: ['Guided posing', 'Natural light', 'Cinematic feel'] },
    { name: 'Creative Projects', tagline: 'Concepts, art direction, collaborations', features: ['Moody tones', 'Story-driven', 'Editorial'] },
  ],

  testimonials: [
    { name: 'Mia & Jacob', text: 'Angelina captured our day with such warmth and style. Every frame feels cinematic.' },
    { name: 'Ethan R.', text: 'Great communication, fast delivery, and beautiful edits. Highly recommend!' },
    { name: 'Татьяна', text: 'Фотографии получились живыми и очень тёплыми. Съёмка прошла легко и комфортно.' },
  ],
};
