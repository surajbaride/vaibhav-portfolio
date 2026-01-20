import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const sections = [
  {id:'home', label:'Home'},
  {id:'about', label:'About'},
  {id:'experience', label:'Experience'},
  {id:'skills', label:'Skills'},
  {id:'education', label:'Education'},
  {id:'certifications', label:'Certifications'},
  {id:'contact', label:'Contact'}
]

export default function Nav(){
  const [active, setActive] = useState('home')
  const [hidden, setHidden] = useState(false)

  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ setActive(e.target.id) }
      })
    },{root:null,rootMargin:'-40% 0px -40% 0px',threshold:0})

    sections.forEach(s=>{
      const el = document.getElementById(s.id)
      if(el) obs.observe(el)
    })

    return ()=> obs.disconnect()
  },[])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e,id)=>{
    e.preventDefault()
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth',block:'start'})
  }

  return (
    <nav className={`nav-bar ${hidden ? 'hidden' : ''}`}>
      <motion.ul initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} transition={{duration:0.4}}>
        {sections.map(s=> (
          <li key={s.id} className={active===s.id? 'active':''}>
            <a href={`#${s.id}`} onClick={(e)=>handleClick(e,s.id)}>{s.label}</a>
          </li>
        ))}
        <li className="toggle-li"><ThemeToggle /></li>
      </motion.ul>
    </nav>
  )
}
