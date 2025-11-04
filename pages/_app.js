// pages/_app.js

import '../styles/globals.css';   // подключает Tailwind и общие стили
import '../styles/gallery.css';   // подключает анимацию галереи

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
