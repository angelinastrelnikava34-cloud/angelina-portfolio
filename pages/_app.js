// pages/_app.js

// Если у тебя НЕТ файла styles/globals.css — не добавляй/удали импорт ниже.
// import '../styles/globals.css';

import '../styles/gallery.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
