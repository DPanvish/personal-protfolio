import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const formRef = useRef(null)
  const buttonRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Simplified heading animation
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Simplified form elements animation
    const formElements = formRef.current?.querySelectorAll('.form-element')
    if (formElements) {
      gsap.fromTo(formElements,
        { 
          x: (index) => index % 2 === 0 ? -50 : 50,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Simplified button animation
    gsap.fromTo(buttonRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Simplified magnetic button effect
    const button = buttonRef.current
    if (button) {
      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(button, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      button.addEventListener('mousemove', handleMouseMove)
      button.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        button.removeEventListener('mousemove', handleMouseMove)
        button.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="section-padding relative z-10"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Input */}
            <div className="form-element">
              <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-element">
              <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Message Input */}
            <div className="form-element">
              <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-element text-center">
              <button
                ref={buttonRef}
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 card-bg rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">panvishd@gmail.com</p>
              </div>
              <div className="p-6 card-bg rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">8639460413</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
