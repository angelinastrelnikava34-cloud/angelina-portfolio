
import { useState } from 'react'
import { CONTENT } from '@/lib/content'

function download(filename, text) {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([text], {type:'text/plain'}))
  a.download = filename; a.click()
}

export default function Admin(){
  const [state,setState] = useState(JSON.parse(JSON.stringify(CONTENT)))
  const update = (path, value) => {
    const keys = path.split('.'); const next = {...state}; let cur = next;
    while(keys.length>1){ const k = keys.shift(); cur[k] = Array.isArray(cur[k])?[...cur[k]]:{...cur[k]}; cur = cur[k]; }
    cur[keys[0]] = value; setState(next)
  }
  const addItem = (key, item) => setState(s=>({...s, [key]: [...s[key], item]}))
  const removeItem = (key, idx) => setState(s=>({...s, [key]: s[key].filter((_,i)=>i!==idx)}))

  const toFile = () => {
    const js = 'export const CONTENT=' + JSON.stringify(state, null, 2) + '\n'
    download('content.js', js)
  }

  return (<div style={{maxWidth:880, margin:'40px auto', padding:'0 16px', fontFamily:'system-ui'}}>
    <h1>Visual Editor</h1>
    <p>Измени поля ниже и нажми <b>Download content.js</b>. Потом замени файл <code>lib/content.js</code> в GitHub.</p>

    <h2>Contacts</h2>
    <label>Email<br/><input value={state.contact.email} onChange={e=>update('contact.email', e.target.value)} style={{width:'100%',padding:8}}/></label>

    <h2 style={{marginTop:28}}>Services</h2>
    {state.services.map((s,i)=>(<div key={i} style={{border:'1px solid #ddd',padding:12,borderRadius:12, margin:'12px 0'}}>
      <input value={s.name} onChange={e=>{const arr=[...state.services]; arr[i].name=e.target.value; setState({...state, services:arr})}} style={{width:'100%',padding:8, fontWeight:600}}/>
      <input value={s.tagline} onChange={e=>{const arr=[...state.services]; arr[i].tagline=e.target.value; setState({...state, services:arr})}} style={{width:'100%',padding:8, marginTop:6}}/>
      <textarea value={s.features.join('\n')} onChange={e=>{const arr=[...state.services]; arr[i].features=e.target.value.split('\n'); setState({...state, services:arr})}} style={{width:'100%',padding:8, marginTop:6}} rows={3}/>
      <button onClick={()=>removeItem('services', i)} style={{marginTop:6}}>Удалить</button>
    </div>))}
    <button onClick={()=>addItem('services',{name:'New service',tagline:'',features:[],price:''})}>+ Add service</button>

    <h2 style={{marginTop:28}}>Testimonials</h2>
    {state.testimonials.map((r,i)=>(<div key={i} style={{border:'1px solid #ddd',padding:12,borderRadius:12, margin:'12px 0'}}>
      <input value={r.name} onChange={e=>{const arr=[...state.testimonials]; arr[i].name=e.target.value; setState({...state, testimonials:arr})}} style={{width:'100%',padding:8}}/>
      <textarea value={r.text} onChange={e=>{const arr=[...state.testimonials]; arr[i].text=e.target.value; setState({...state, testimonials:arr})}} rows={2} style={{width:'100%',padding:8, marginTop:6}}/>
      <button onClick={()=>removeItem('testimonials', i)} style={{marginTop:6}}>Удалить</button>
    </div>))}
    <button onClick={()=>addItem('testimonials',{name:'New Client', text:'Review text…'})}>+ Add testimonial</button>

    <h2 style={{marginTop:28}}>Gallery</h2>
    {state.gallery.map((g,i)=>(<div key={i} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8, border:'1px solid #ddd',padding:12,borderRadius:12, margin:'12px 0'}}>
      <input placeholder='Image URL' value={g.src} onChange={e=>{const arr=[...state.gallery]; arr[i].src=e.target.value; setState({...state, gallery:arr})}} style={{width:'100%',padding:8}}/>
      <input placeholder='Alt text' value={g.alt} onChange={e=>{const arr=[...state.gallery]; arr[i].alt=e.target.value; setState({...state, gallery:arr})}} style={{width:'100%',padding:8}}/>
      <button onClick={()=>removeItem('gallery', i)} style={{gridColumn:'1/3'}}>Удалить</button>
    </div>))}
    <button onClick={()=>addItem('gallery',{src:'https://...',alt:''})}>+ Add photo</button>

    <div style={{margin:'28px 0'}}>
      <button onClick={toFile} style={{padding:'10px 16px', borderRadius:12, background:'#7E243A', color:'#fff'}}>Download content.js</button>
    </div>
  </div>)
}
