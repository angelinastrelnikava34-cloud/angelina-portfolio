
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }){
  const [dark,setDark]=useState(true)
  useEffect(()=>{ const s=localStorage.getItem('theme-dark'); setDark(s?JSON.parse(s):true)},[])
  useEffect(()=>{ document.documentElement.classList.toggle('dark',dark); localStorage.setItem('theme-dark',JSON.stringify(dark))},[dark])
  return (<>
    <Head>
      <title>Angelina Strelnikava — Photographer Portfolio</title>
      <meta name="description" content="Based in Massachusetts (Boston). Reportage, portrait and creative photography across New England." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
      <meta property="og:title" content="Angelina Strelnikava — Photographer" />
      <meta property="og:description" content="Cinematic, natural, story‑driven photography across New England." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://angelina-portfolio.vercel.app/" />
    </Head>
    <Component {...pageProps} dark={dark} toggleDark={()=>setDark(d=>!d)} />
  </>)
}
