import '../styles/globals.css';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  // Инициализация темы при загрузке
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const shouldDark = saved
      ? saved === 'dark'
      : typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

    document.documentElement.classList.toggle('dark', shouldDark);
    document.documentElement.classList.toggle('light', !shouldDark);
    setDark(shouldDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    }
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.classList.toggle('light', !next);
  };

  // Передаём в страницы — у тебя уже используется (toggleDark, dark)
  return <Component {...pageProps} toggleDark={toggleDark} dark={dark} />;
}
