// pages/_app.js
import '../styles/gallery.css';  // файл мы уже создали
import '../styles/globals.css';  // оставь, если он у тебя есть; если нет — УДАЛИ ЭТУ СТРОКУ

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
