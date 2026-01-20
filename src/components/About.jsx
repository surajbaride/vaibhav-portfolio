import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about">
      <div className="glass">
      <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
        <h2>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/></svg>
          About Me
        </h2>
        <div className="about-grid">
          <div className="card">
            <h3>About Me</h3>
            <blockquote>"Success in business development is not just about closing deals—it's about creating lasting value and fostering trust."</blockquote>
            <p>Results-driven Senior Business Development Executive with 2+ years of experience in B2B lead generation, client relationship management, and revenue growth within IT & Consulting domains. Proven ability to exceed targets, build long-term partnerships, and deliver measurable business impact.</p>
            <p>My expertise lies in crafting strategic sales funnels, leveraging digital tools for outreach, and fostering client trust to drive sustainable growth. I thrive in dynamic environments where innovation meets execution, always aiming to turn opportunities into tangible results.</p>
            <p>Beyond sales, I'm committed to continuous learning and staying ahead of industry trends to provide cutting-edge solutions to clients.</p>
            <h4>Key Achievements</h4>
            <ul>
              <li>Exceeded sales targets by 150% in Q4 2023</li>
              <li>Built partnerships with 50+ key clients</li>
              <li>Led digital marketing campaigns resulting in 200% lead increase</li>
            </ul>
          </div>
          <div className="card">
            <h3>Personal Details</h3>
            <p><strong>Location:</strong> India</p>
            <p><strong>Availability:</strong> Open to opportunities</p>
            <p><strong>Experience:</strong> 2+ years</p>
            <p><strong>Focus:</strong> B2B Sales & Partnerships</p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
