import React, {useEffect, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => {
    try{ return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light') }catch(e){return 'light'}
  })

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    try{ localStorage.setItem('theme', theme) }catch(e){}
  },[theme])

  const toggle = ()=> setTheme(t=> t==='dark' ? 'light' : 'dark')

  return (
    <motion.button className="theme-switch" onClick={toggle} aria-label="Toggle theme" whileTap={{scale:0.95}}>
      <div className="switch-track">
        <motion.div className="switch-thumb" animate={{x: theme==='dark' ? 20 : 0}} transition={{type:'spring',stiffness:300,damping:20}} />
      </div>
      <AnimatePresence mode="wait">
        {theme==='dark' ? (
          <motion.span key="sun" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2}}>🌙</motion.span>
        ):(
          <motion.span key="moon" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2}}>☀️</motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
