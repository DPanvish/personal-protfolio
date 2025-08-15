import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const socialRef = useRef(null)
  const containerRef = useRef(null)
  const floatingElementsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Create simplified floating background elements
    const floatingElements = floatingElementsRef.current
    if (floatingElements) {
      // Create fewer, simpler floating shapes
      for (let i = 0; i < 4; i++) {
        const element = document.createElement('div')
        element.className = 'absolute w-1 h-1 bg-cyan-400/20 rounded-full'
        element.style.left = Math.random() * 100 + '%'
        element.style.top = Math.random() * 100 + '%'
        floatingElements.appendChild(element)
        
        // Simpler floating animation
        gsap.to(element, {
          y: -50,
          x: Math.random() * 100 - 50,
          duration: Math.random() * 8 + 12,
          repeat: -1,
          ease: "none",
          delay: i * 1,
        })
      }
    }

    // Optimized name animation with simpler effects
    const nameLetters = nameRef.current?.querySelectorAll('.name-letter')
    if (nameLetters) {
      tl.fromTo(nameLetters, 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)"
        }
      )
    }

    // Simplified title animation
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.6, 
        ease: "power2.out" 
      },
      "-=0.4"
    )

    // Simplified social icons animation
    const socialIcons = socialRef.current?.querySelectorAll('.social-icon')
    if (socialIcons) {
      tl.fromTo(socialIcons,
        { 
          opacity: 0, 
          scale: 0, 
          y: 20
        },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          duration: 0.5, 
          stagger: 0.1,
          ease: "back.out(1.7)"
        },
        "-=0.2"
      )
    }

    // Simplified hover animations for social icons
    socialIcons?.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.2,
          ease: "power2.out"
        })
      })

      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        })
      })
    })

    // Simplified floating animation to contact info
    const contactInfo = containerRef.current?.querySelector('.contact-info')
    if (contactInfo) {
      gsap.to(contactInfo, {
        y: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }

    return () => {
      socialIcons?.forEach(icon => {
        icon.removeEventListener('mouseenter', () => {})
        icon.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'LeetCode', url: 'https://leetcode.com', icon: '⚡' }
  ]

  return (
    <section 
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative z-10 pt-20"
    >
      {/* Simplified floating background elements */}
      <div 
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />
      
      <div className="text-center px-4 relative z-10">
        {/* Name with optimized letter-by-letter animation */}
        <h1 
          ref={nameRef}
          className="text-6xl md:text-8xl font-bold text-white mb-6"
        >
          {'Panvish Dowripilli'.split('').map((letter, index) => (
            <span 
              key={index} 
              className="name-letter inline-block"
              style={{ 
                background: letter === ' ' ? 'transparent' : 'linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)',
                WebkitBackgroundClip: letter === ' ' ? 'unset' : 'text',
                WebkitTextFillColor: letter === ' ' ? 'white' : 'transparent',
                backgroundClip: letter === ' ' ? 'unset' : 'text'
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Simplified title */}
        <h2 
          ref={titleRef}
          className="text-2xl md:text-4xl font-medium text-slate-300 mb-12"
        >
          Web Developer
        </h2>

        {/* Contact Info with floating animation */}
        <div className="contact-info text-slate-400 mb-8 space-y-2">
          <p className="text-lg hover:text-cyan-400 transition-colors duration-300">panvishd@gmail.com</p>
          <p className="text-lg hover:text-cyan-400 transition-colors duration-300">8639460413</p>
        </div>

        {/* Simplified Social Links */}
        <div 
          ref={socialRef}
          className="flex justify-center space-x-8"
        >
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-3xl hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
