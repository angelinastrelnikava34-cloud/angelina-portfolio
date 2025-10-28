
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Camera, CalendarCheck2, Instagram, Mail, MapPin, Phone, Sparkles, ArrowRight, Check, Star, Moon, Sun, Globe } from 'lucide-react'
import Section from '@/components/Section'
import { dictionaries } from '@/lib/i18n'
import clsx from 'clsx'

const BRAND={ firstName:'Angelina', lastName:'Strelnikava', location:'Massachusetts, USA', city:'Boston / Worcester, MA' }
const CONTACT={ email:'angelinastrelnikava34@gmail.com', phone:'+1 (555) 123-4567' }
const SOCIALS={ instagram:'https://www.instagram.com/strelnikava_ph' }

const GALLERY=[
  {src:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',alt:'Ocean waves'},
  {src:'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6',alt:'Foggy forest'},
  {src:'https://images.unsplash.com/photo-1506744038136-46273834b3fb',alt:'Acadia rocky coast'},
  {src:'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',alt:'Wedding candid'},
  {src:'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43',alt:'Portrait with motion blur'},
  {src:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',alt:'Street story NYC'},
  {src:'https://images.unsplash.com/photo-1494790108377-be9c29b29330',alt:'Lifestyle portrait'},
  {src:'https://images.unsplash.com/photo-1514512364185-4c2e1b5f7c8a',alt:'Moody forest'},
  {src:'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb',alt:'Sailboat in Boston'},
]

const PACKAGES=[
  {name:'Starter',price:'$199',bestFor:'Mini sessions / portraits',features:['45 minutes shooting','15 edited photos','Online gallery + download','1 location in MA']},
  {name:'Standard',price:'$449',bestFor:'Couples / lifestyle / events',featured:true,features:['2 hours shooting','40 edited photos','Priority turnaround (5–7 days)','Up to 2 locations']},
  {name:'Premium',price:'$899',bestFor:'Weddings / brand stories',features:['4 hours coverage','90+ edited photos','Short highlight video bonus','Print‑ready files']},
]

export default function Home({toggleDark,dark}){
  const [lang,setLang]=useState('en'); const t=dictionaries[lang];
  const nav=useMemo(()=>[{label:t.menu_work,href:'#work'},{label:t.menu_services,href:'#services'},{label:t.menu_about,href:'#about'},{label:t.menu_contact,href:'#contact'}],[t])
  return (<div className='min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black'>
    <header className='sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30 border-b'>
      <div className='container h-16 md:h-20 flex items-center justify-between'>
        <a href='#home' className='flex items-center gap-2 group'><Camera className='h-5 w-5 md:h-6 md:w-6'/><span className='font-semibold tracking-tight text-sm md:text-base'>Angelina <span className='opacity-70'>Strelnikava</span></span></a>
        <nav className='hidden md:flex items-center gap-6'>{nav.map(n=>(<a key={n.href} href={n.href} className='text-sm opacity-80 hover:opacity-100'>{n.label}</a>))}
          <a href={SOCIALS.instagram} target='_blank' className='badge'><Instagram className='h-3.5 w-3.5'/> @strelnikava_ph</a></nav>
        <div className='flex items-center gap-2'>
          <button className='btn' onClick={()=>setLang(lang==='en'?'ru':'en')}><Globe className='h-4 w-4 mr-2'/>{lang==='en'?'RU':'EN'}</button>
          <button className='btn' onClick={toggleDark}>{dark?<Sun className='h-5 w-5'/>:<Moon className='h-5 w-5'/>}</button>
          <a href='#contact' className='hidden md:inline-flex'><button className='btn btn-primary gap-2'>Book now <CalendarCheck2 className='h-4 w-4'/></button></a>
        </div>
      </div>
    </header>

    <section id='home'>
      <div className='container grid md:grid-cols-2 gap-10 py-16 md:py-28 items-center'>
        <div>
          <h1 className='text-3xl md:text-6xl font-semibold tracking-tight leading-tight'>Angelina Strelnikava</h1>
          <p className='mt-4 text-base md:text-xl opacity-80'>{t.brand_tagline}</p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <span className='badge'><MapPin className='h-3.5 w-3.5'/>{BRAND.location}</span>
            <span className='badge'><Sparkles className='h-3.5 w-3.5'/>{t.hero_style}</span>
          </div>
          <div className='mt-8 flex gap-3'>
            <a href='#work'><button className='btn btn-primary gap-2'>See my work <ArrowRight className='h-4 w-4'/></button></a>
            <a href='#services'><button className='btn btn-outline'>Packages</button></a>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-3'>
          {GALLERY.slice(0,6).map((img,i)=>(
            <div key={i} className={clsx('overflow-hidden rounded-2xl shadow', i%3===0 && 'col-span-2')}>
              <Image src={img.src+'?auto=format&fit=crop&w=900&q=80'} width={900} height={1200} alt={img.alt} className='w-full h-full object-cover aspect-[3/4]' />
            </div>
          ))}
        </div>
      </div>
    </section>

    <Section id='work' title={t.featured_work} subtitle={t.featured_sub}>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
        {GALLERY.map((img,i)=>(
          <div key={i} className='card overflow-hidden group'>
            <Image src={img.src+'?auto=format&fit=crop&w=1400&q=80'} width={1400} height={900} alt={img.alt} className='h-64 md:h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105'/>
          </div>
        ))}
      </div>
      <div className='mt-10 text-center'><a href='#contact'><button className='btn btn-outline gap-2'>Request full portfolio <ArrowRight className='h-4 w-4'/></button></a></div>
    </Section>

    <Section id='services' title={t.packages} subtitle={t.packages_sub}>
      <div className='grid md:grid-cols-3 gap-6'>
        {PACKAGES.map(p=>(
          <div key={p.name} className={clsx('card p-6 relative', p.featured && 'ring-2 ring-black dark:ring-white')}>
            {p.featured && (<span className='absolute right-3 top-3 badge text-[10px] uppercase tracking-wide'><Star className='h-3 w-3'/> Popular</span>)}
            <h3 className='text-lg font-semibold'>{p.name}</h3>
            <p className='mt-1 text-sm opacity-70'>{p.bestFor}</p>
            <div className='mt-4 text-3xl font-semibold'>{p.price}</div>
            <ul className='mt-4 space-y-2 text-sm'>{p.features.map((f,i)=>(<li key={i} className='flex items-start gap-2'><Check className='h-4 w-4 mt-0.5'/>{f}</li>))}</ul>
            <div className='mt-6'><a href='#contact'><button className='btn btn-primary w-full'>Book {p.name}</button></a></div>
          </div>
        ))}
      </div>
    </Section>

    <Section id='about' title={t.about} subtitle={t.about_sub}>
      <div className='grid md:grid-cols-2 gap-8 items-center'>
        <div className='overflow-hidden rounded-2xl shadow aspect-video relative'>
          <Image src={'https://images.unsplash.com/photo-1520975922284-c0d43fdb87c1?auto=format&fit=crop&w=1400&q=80'} alt='Angelina shooting' fill className='object-cover'/>
        </div>
        <div className='space-y-4 text-sm md:text-base leading-relaxed'>
          <p>{t.about_p1}</p><p>{t.about_p2}</p>
          <div className='flex flex-wrap gap-3 pt-2'>
            <span className='badge'><Camera className='h-3.5 w-3.5'/>Canon R‑series • Prime lenses • 4K video</span>
            <span className='badge'><Sparkles className='h-3.5 w-3.5'/>Lightroom • Photoshop • Color grading</span>
          </div>
        </div>
      </div>
    </Section>

    <Section id='reviews' title={t.reviews} subtitle={t.reviews_sub}>
      <div className='grid md:grid-cols-3 gap-6'>
        {['Mia & Jacob','Ethan R.','Paula K.'].map((name,i)=>(
          <div key={i} className='card p-6'>
            <p className='text-base'>“{['Angelina captured our day with such warmth and style. Every frame feels alive!','Great communication, fast delivery, and beautiful edits. Highly recommend!','We booked a portrait session in Boston — the photos look cinematic.'][i]}”</p>
            <p className='mt-4 text-sm opacity-70'>— {name}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section id='contact' title={'Let\'s Work Together'} subtitle={'Tell me about your idea — I\'ll reply within 24 hours.'}>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='card p-6'>
          <form onSubmit={(e)=>{e.preventDefault(); const name=e.target.name.value; const email=e.target.email.value; const message=e.target.message.value; window.location.href=`mailto:${CONTACT.email}?subject=Photo Inquiry from ${name}&body=${encodeURIComponent(message + "\n\nReply to: " + email)}`}} className='space-y-4'>
            <div><label className='text-sm'>Name</label><input name='name' required placeholder='Your name' className='mt-1 w-full rounded-xl border px-3 py-2 bg-transparent'/></div>
            <div><label className='text-sm'>Email</label><input type='email' name='email' required placeholder='you@email.com' className='mt-1 w-full rounded-xl border px-3 py-2 bg-transparent'/></div>
            <div><label className='text-sm'>Message</label><textarea name='message' rows={5} required placeholder='What are we shooting? Dates, location, vibe…' className='mt-1 w-full rounded-xl border px-3 py-2 bg-transparent'></textarea></div>
            <button type='submit' className='btn btn-primary w-full gap-2'>Send inquiry <Mail className='h-4 w-4'/></button>
            <p className='text-xs opacity-70'>By sending, you agree to be contacted about your inquiry.</p>
          </form>
        </div>
        <div className='space-y-6'>
          <div className='grid gap-3'>
            <div className='flex items-center gap-3'><Mail className='h-5 w-5'/><a className='underline underline-offset-4' href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
            <div className='flex items-center gap-3'><Phone className='h-5 w-5'/><a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a></div>
            <div className='flex items-center gap-3'><MapPin className='h-5 w-5'/>{BRAND.city}</div>
          </div>
          <a href={SOCIALS.instagram} target='_blank' className='badge w-max'><Instagram className='h-5 w-5'/> Follow on Instagram</a>
          <div className='card p-4 text-sm opacity-80'>For weddings and events, please include venue, timeline, and approximate guest count. I’ll tailor a package to fit your story.</div>
        </div>
      </div>
    </Section>

    <footer className='border-t'>
      <div className='container py-10 text-sm opacity-70 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div>© {new Date().getFullYear()} Angelina Strelnikava. All rights reserved.</div>
        <div className='flex items-center gap-6'><a href='#work' className='hover:opacity-100 opacity-80'>Work</a><a href='#services' className='hover:opacity-100 opacity-80'>Services</a><a href='#contact' className='hover:opacity-100 opacity-80'>Contact</a></div>
      </div>
    </footer>
  </div>)
}
