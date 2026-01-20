import React from 'react'
import { motion } from 'framer-motion'

function TimelineItem({title, role, duration, bullets, awards}){
  return (
    <div className="timeline-item">
      <div className="dot" />
      <div className="card">
        <div className="exp-title">{title}</div>
        <div className="exp-role">{role} • {duration}</div>
        <ul className="exp-bullets">
          {bullets.map((b,i)=>(<li key={i}>{b}</li>))}
        </ul>
        {awards?.length>0 && (
          <div className="exp-awards">
            <div className="awards-title">Awards:</div>
            <ul>
              {awards.map((a,i)=>(<li key={i}>{a}</li>))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience(){
  const bullets = [
    'B2B lead generation via cold calling, email & LinkedIn',
    'Exceeded monthly targets by 20–30%',
    'CXO-level client engagement (IT, SaaS, Services)',
    'CRM pipeline management (TSL CRM)',
    'Market & competitor research'
  ]
  const awards = ['The Silent Soldier','Go-Getter Award','The Achiever']

  return (
    <section id="experience">
      <div className="glass">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5}}>
        <h2>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/></svg>
          Experience
        </h2>
        <div className="timeline">
          <TimelineItem title="TSL Consulting Pvt. Ltd." role="Senior Business Development Executive" duration="Oct 2023 – Present" bullets={bullets} awards={awards} />
        </div>
      </motion.div>
      </div>
    </section>
  )
}
