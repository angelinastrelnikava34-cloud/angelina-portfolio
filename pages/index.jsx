import Image from 'next/image'
import Section from '@/components/Section'
import { useMemo, useState } from 'react'
import { Camera, CalendarCheck2, Instagram, Mail, MapPin, Sparkles, ArrowRight, Check, Star, Moon, Sun, Globe } from 'lucide-react'
import Section from '@/components/Section'
import { dict } from '@/lib/i18n'
import { CONTENT } from '@/lib/content'
import clsx from 'clsx'

const {brand, contact, socials, gallery, services, testimonials} = CONTENT

export default function Home({ toggleDark, dark }){
  const [lang, setLang] = useState('en')
  const t = dict[lang]
  const nav = useMemo(()=>[
    {label:t.menu.work, href:'#work'},
    {label:t.menu.services, href:'#services'},
    {label:t.menu.about, href:'#about'},
    {label:t.menu.contact, href:'#contact'},
  ],[t])

  return (
    <div className='min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black'>
      <header className='sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/20 border-b'>
        <div className='container h-16 md:h-20 flex items-center justify-between'>
          <a href='#home' className='flex items-center gap-2 group'>
            <Camera className='h-5 w-5 md:h-6 md:w-6'/>
            <span className='font-semibold tracking-tight text-sm md:text-base'>
              {brand.firstName} <span className='opacity-70'>{brand.lastName}</span>
            </span>
          </a>
          <nav className='hidden md:flex items-center gap-6'>
            {nav.map(n => (<a key={n.href} href={n.href} className='text-sm opacity-80 hover:opacity-100'>{n.label}</a>))}
            <a href={socials.instagram} target='_blank' className='badge'><Instagram className='h-3.5 w-3.5'/> @strelnikava_ph</a>
          </nav>
          <div className='flex items-center gap-2'>
            <button className='btn' onClick={()=> setLang(lang === 'en' ? 'ru' : 'en')}>
              <Globe className='h-4 w-4 mr-2'/>{lang === 'en' ? 'RU' : 'EN'}
            </button>
            <button className='btn' aria-label='Toggle theme' onClick={toggleDark}>
              {dark ? <Sun className='h-5 w-5'/> : <Moon className='h-5 w-5'/>}
            </button>
            <a href='#contact' className='hidden md:inline-flex'><button className='btn btn-primary gap-2'>{t.btn.book} <CalendarCheck2 className='h-4 w-4'/></button></a>
          </div>
        </div>
      </header>
<Section id="work" title={(dict?.work?.title) || 'Featured Work'} subtitle={dict?.work?.subtitle}>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {gallery.map((item, index) => (
      <div
        key={item.src}
        className="relative overflow-hidden rounded-2xl kb-paused"
        style={{ aspectRatio: item.ratio || '3 / 4' }}  // варианты: '2 / 3', '4 / 3', '1 / 1'
      >
        <Image
          src={item.src}
          alt={item.alt || ''}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover kb-animate"
          style={{
            animationDelay: `${(index % 6) * 0.8}s`,
            objectPosition: item.focal || 'center'
          }}
          priority={index < 2}
        />
      </div>
    ))}
  </div>
</Section>
      <section id='home'>
        <div className='container grid md:grid-cols-2 gap-10 py-16 md:py-28 items-center'>
          <div>
            <h1 className='text-3xl md:text-6xl font-semibold tracking-tight leading-tight'>
              {brand.firstName} {brand.lastName}
            </h1>
            <p className='mt-4 text-base md:text-xl opacity-80'>{t.tagline}</p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <span className='badge'><MapPin className='h-3.5 w-3.5'/>{brand.location}</span>
              <span className='badge'><Sparkles className='h-3.5 w-3.5'/>{t.style}</span>
            </div>
            <div className='mt-8 flex gap-3'>
              <a href='#work'><button className='btn btn-primary gap-2'>{t.btn.see} <ArrowRight className='h-4 w-4'/></button></a>
              <a href='#services'><button className='btn btn-outline'>{t.btn.packages}</button></a>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            {gallery.slice(0,6).map((img,i)=>(
              <div key={i} className={clsx('overflow-hidden rounded-2xl shadow', i%3===0 && 'col-span-2')}>
                <Image src={img.src+'?auto=format&fit=crop&w=900&q=80'} width={900} height={1200} alt={img.alt} className='w-full h-full object-cover aspect-[3/4]'/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id='work' title={t.featured.title} subtitle={t.featured.sub}>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
          {gallery.map((img, i)=>(
            <div key={i} className='card overflow-hidden group'>
              <Image src={img.src+'?auto=format&fit=crop&w=1400&q=80'} width={1400} height={900} alt={img.alt} className='h-64 md:h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105' />
            </div>
          ))}
        </div>
        <div className='mt-10 text-center'>
          <a href='#contact'><button className='btn btn-outline gap-2'>{t.btn.request} <ArrowRight className='h-4 w-4'/></button></a>
        </div>
      </Section>

      <Section id='services' title={t.services.title} subtitle={t.services.sub}>
        <div className='grid md:grid-cols-3 gap-6'>
          {services.map((p,idx)=> (
            <div key={p.name} className={'card p-6 relative ' + (idx===1 ? 'ring-2' : '')}>
              {idx===1 && (
                <span className='absolute right-3 top-3 badge text-[10px] uppercase tracking-wide'>
                  <Star className='h-3 w-3'/> Popular
                </span>
              )}
              <h3 className='text-lg font-semibold'>{p.name}</h3>
              <p className='mt-1 text-sm opacity-70'>{p.tagline}</p>
              <ul className='mt-4 space-y-2 text-sm'>
                {p.features.map((f,i)=>(<li key={i} className='flex items-start gap-2'><Check className='h-4 w-4 mt-0.5'/> {f}</li>))}
              </ul>
              <div className='mt-6'>
                <a href='#contact'><button className='btn btn-primary w-full'>{t.btn.book}</button></a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id='about' title={t.about.title} subtitle={t.about.sub}>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className='overflow-hidden rounded-2xl shadow aspect-video relative'>
            <Image src={'https://images.unsplash.com/photo-1520975922284-c0d43fdb87c1?auto=format&fit=crop&w=1400&q=80'} alt='Angelina shooting' fill className='object-cover'/>
          </div>
          <div className='space-y-4 text-sm md:text-base leading-relaxed'>
            <p>{t.about_p1}</p>
            <p>{t.about_p2}</p>
            <div className='flex flex-wrap gap-3 pt-2'>
              <span className='badge'>Canon R8 • Prime lenses • 4K video</span>
              <span className='badge'>Lightroom • Photoshop • Color grading</span>
            </div>
          </div>
        </div>
      </Section>

      <Section id='reviews' title={t.reviews.title} subtitle={t.reviews.sub}>
        <div className='grid md:grid-cols-3 gap-6'>
          {testimonials.map((r,i)=>(
            <div key={i} className='card p-6'>
              <p className='text-base'>“{r.text}”</p>
              <p className='mt-4 text-sm opacity-70'>— {r.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id='contact' title={t.contact.title} subtitle={t.contact.sub}>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='card p-6'>
            <form method='POST' action='' data-endpoint='https://formspree.io/f/your-id' onSubmit={(e)=>{
              const endpoint = e.currentTarget.getAttribute('data-endpoint')
              if(!endpoint || endpoint.includes('your-id')){
                e.preventDefault();
                const name=e.target.name.value; const email=e.target.email.value; const message=e.target.message.value;
                window.location.href=`mailto:${contact.email}?subject=Photo Inquiry from ${name}&body=${encodeURIComponent(message + "\n\nReply to: " + email)}`
              } else {
                e.currentTarget.setAttribute('action', endpoint)
              }
            }} className='space-y-4'>
              <div><label className='text-sm'>Name / Имя</label><input name='name' required className='mt-1 w-full rounded-xl border px-3 py-2 bg-transparent'/></div>
              <div><label className='text-sm'>Email / Почта</label><input type='email' name='email' required className='mt-1 w-full rounded-xl border px-3 py-2 bg-transparent'/></div>
              <div><label className='text-sm'>Message / Сообщение</label><textarea name='message' rows={5} required className='mt-1 w-full rounded-xl border px-3 py-2 bg-transparent'></textarea></div>
              <button type='submit' className='btn btn-primary w-full gap-2'>Send inquiry <Mail className='h-4 w-4'/></button>
              <p className='text-xs opacity-70'>By sending, you agree to be contacted about your inquiry.</p>
            </form>
          </div>
          <div className='space-y-6'>
            <div className='grid gap-3'>
              <div className='flex items-center gap-3'><Mail className='h-5 w-5'/><a className='underline underline-offset-4' href={`mailto:${contact.email}`}>{contact.email}</a></div>
            </div>
            <a href={socials.instagram} target='_blank' className='badge w-max'><Instagram className='h-5 w-5'/> Follow on Instagram</a>
            <div className='card p-4 text-sm opacity-80'>For weddings and events, please include venue, timeline, and approximate guest count. I’ll tailor a package to fit your story.</div>
          </div>
        </div>
      </Section>

      <footer className='border-t'>
        <div className='container py-10 text-sm opacity-70 flex flex-col md:flex-row items-center justify-between gap-4'>
          <div>© {new Date().getFullYear()} {brand.firstName} {brand.lastName}. All rights reserved.</div>
          <div className='flex items-center gap-6'>
            <a href='#work' className='hover:opacity-100 opacity-80'>{t.menu.work}</a>
            <a href='#services' className='hover:opacity-100 opacity-80'>{t.menu.services}</a>
            <a href='#contact' className='hover:opacity-100 opacity-80'>{t.menu.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
