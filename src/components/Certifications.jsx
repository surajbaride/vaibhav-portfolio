import React from 'react'
import { motion } from 'framer-motion'

export default function Certifications(){
  return (
    <section id="certifications">
      <div className="glass">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.45}}>
        <h2>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15l-2 5-2-5 5-2-5-2 2-5 2 5 5 2-5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
          Certifications & Achievements
        </h2>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon">🏆</div>
            <h3>“Silent Soldier” Certification</h3>
            <p>TSL Consulting – Recognized for consistent contribution and lead generation excellence</p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
