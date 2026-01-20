import React from 'react'
import { motion } from 'framer-motion'

export default function Education(){
  return (
    <section id="education">
      <div className="glass">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.45}}>
        <h2>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 21 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14l-6.16-3.422a12.083 12.083 0 0 0-.665 6.479A11.952 11.952 0 0 0 3 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="14" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/></svg>
          Education
        </h2>
        <div className="card">
          <strong>Bachelor of Computer Science (B.Sc CS)</strong>
          <div style={{color:'#6b7280',marginTop:8}}>Swami Ramanand Teerth Marathwada University, Nanded</div>
          <div style={{marginTop:8}}>CGPA: 9.22 / 10</div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
