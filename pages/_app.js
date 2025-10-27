
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  // Persist dark mode preference
  const [dark, setDark] = useState(true)
  useEffect(() => {
    const saved = localStorage.getItem('theme-dark')
    setDark(saved ? JSON.parse(saved) : true)
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme-dark', JSON.stringify(dark))
  }, [dark])

  return (
    <>
      <Component {...pageProps} toggleDark={() => setDark(d => !d)} dark={dark} />
    </>
  )
}
