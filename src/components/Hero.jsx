import React from 'react'
import { motion } from 'framer-motion'
import profile from '../img.JPG'

export default function Hero(){
  return (
    <header className="hero" id="home">
      <motion.div className="left" initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
        <h1>Vaibhav Hipparge</h1>
        <div className="role">Senior Business Development Executive</div>
        <p className="tag">"Driving B2B growth through strategic partnerships, lead generation, and data-driven sales strategies. Passionate about building lasting client relationships and achieving measurable business outcomes."</p>
        <div className="cta-row">
          <a className="btn primary" href="#contact" rel="noreferrer">Contact Me</a>
          <a className="btn resume" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
        </div>

        <div className="icon-row">
          <motion.a className="icon-btn" href="mailto:vaibhavhipparge@gmail.com" aria-label="Email" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7.5L12 13L21 7.5V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V7.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 7.5L12 13L3 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
          <motion.a className="icon-btn" href="https://www.linkedin.com/in/vaibhavhipparge" target="_blank" rel="noreferrer" aria-label="LinkedIn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M7 10V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="7" cy="7.5" r="1" stroke="currentColor" strokeWidth="1.2"/><path d="M11 14.5V10.5C11 9.67157 11.6716 9 12.5 9H12.6C13.4284 9 14.1 9.67157 14.1 10.5V14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </motion.a>
          <motion.a className="icon-btn" href="https://wa.me/917972736496?text=Hi%20Vaibhav" target="_blank" rel="noreferrer" aria-label="WhatsApp" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12A9 9 0 1 0 11.08 20.86L7 21l.48-4.24A9 9 0 0 0 21 12z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.5 11.25c-.14-.07-1.02-.5-1.18-.55-.16-.06-.28-.07-.4.07-.11.14-.44.55-.54.66-.1.11-.2.13-.36.05-.16-.07-.67-.25-1.28-.79-.47-.41-.79-.92-.88-1.08-.09-.16-.01-.25.06-.32.06-.06.14-.15.21-.23.07-.08.09-.14.14-.24.05-.1.02-.19-.01-.27-.03-.08-.4-1.02-.55-1.39-.15-.36-.3-.31-.41-.31h-.36c-.12 0-.31.04-.47.19-.16.15-.61.6-.61 1.46 0 .85.62 1.67.71 1.79.09.12 1.23 1.86 2.98 2.62 1.75.76 1.75.51 2.07.48.32-.03 1.03-.42 1.18-.83.15-.4.15-.74.11-.82-.04-.08-.14-.12-.28-.19z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </div>
      </motion.div>
      <motion.div className="right" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6}}>
        <img src={profile} alt="Vaibhav" />
      </motion.div>
    </header>
  )
}
