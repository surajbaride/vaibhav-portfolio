import React from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact">
      <div className="glass">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.45}}>
        <h2>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Contact
        </h2>
        <div className="contact-grid">
          <div>
            <div className="card">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div>
                  <strong>Phone:</strong> 7972736496
                </div>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div>
                  <strong>Email:</strong> <a href="mailto:vaibhavhipparge@gmail.com">vaibhavhipparge@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><path d="M7 10V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="7" cy="7.5" r="1" stroke="currentColor" strokeWidth="2"/><path d="M11 14.5V10.5C11 9.67157 11.6716 9 12.5 9H12.6C13.4284 9 14.1 9.67157 14.1 10.5V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                <div>
                  <strong>LinkedIn:</strong> Vaibhav Hipparge
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="card contact-form">
              <div className="form-group">
                <label>Name</label>
                <input className="input" name="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input className="input" name="email" type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" className="input" name="message" placeholder="Your Message"></textarea>
              </div>
              <button className="btn primary submit" type="button">Send Message</button>
            </form>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
