import React from 'react'
import { motion } from 'framer-motion'

const Group = ({title, items}) => (
  <div>
    <h4 className="skills-group-title">{title}</h4>
    <div className="skills-grid">
      {items.map((s,i)=>(
        <motion.div className="skill-card" whileHover={{scale:1.05, y:-5}} transition={{type:'spring',stiffness:300}} key={i}>
          {s}
        </motion.div>
      ))}
    </div>
  </div>
)

export default function Skills(){
  const hard = ['B2B Lead Generation','Cold Calling & Emailing','Sales Funnel Management','Market Research','Sales Reporting','Prospecting & Outreach']
  const tools = ['LinkedIn Sales Navigator','ZoomInfo','Google Workspace','MS Excel & PowerPoint']
  const soft = ['Communication','Negotiation','Strategic Thinking','Relationship Building','Time Management']

  return (
    <section id="skills">
      <div className="glass">
      <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45}}>
        <h2>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Skills
        </h2>
        <Group title="Hard Skills" items={hard} />
        <div style={{height:24}} />
        <Group title="Tools" items={tools} />
        <div style={{height:24}} />
        <Group title="Soft Skills" items={soft} />
      </motion.div>
      </div>
    </section>
  )
}
