import '../styles/globals.css';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    // применяем тему из localStorage или по системным настройкам
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const wantDark = saved ? saved === 'dark' : prefersDark;
    const root = document.documentElement;
    if (wantDark) root.classList.add('dark'); else root.classList.remove('dark');
    setThemeReady(true);
  }, []);

  if (!themeReady) return null;
  return <Component {...pageProps} />;
}
