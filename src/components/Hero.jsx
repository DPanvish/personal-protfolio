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

    // Optimized floating background elements - reduced count and complexity
    const floatingElements = floatingElementsRef.current
    if (floatingElements) {
      // Create only 2 floating shapes for better performance
      for (let i = 0; i < 2; i++) {
        const element = document.createElement('div')
        element.className = 'absolute w-1 h-1 bg-purple-400/15 rounded-full'
        element.style.left = Math.random() * 100 + '%'
        element.style.top = Math.random() * 100 + '%'
        floatingElements.appendChild(element)
        
        // Optimized floating animation with simpler easing
        gsap.to(element, {
          y: -30,
          x: Math.random() * 60 - 30,
          duration: 8 + (i * 2),
          repeat: -1,
          ease: "power1.inOut",
          delay: i * 0.5,
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

    // Optimized floating animation to contact info - reduced frequency
    const contactInfo = containerRef.current?.querySelector('.contact-info')
    if (contactInfo) {
      gsap.to(contactInfo, {
        y: -3,
        duration: 4,
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
    { name: 'GitHub', url: 'https://github.com/DPanvish', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/d-panvish/', icon: '💼' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Panvish/', icon: '🧮' }
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
        {/* Profile Picture */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-purple-400/40 shadow-2xl group-hover:border-purple-400/80 transition-all duration-500">
              <img 
                src="/src/assets/Image.jpg" 
                alt="Panvish Dowripilli" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-violet-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110"></div>
            {/* Additional outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-20 scale-125"></div>
          </div>
        </div>

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
                background: letter === ' ' ? 'transparent' : 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%)',
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
          <p className="text-lg hover:text-purple-400 transition-colors duration-300">panvishd@gmail.com</p>
          <p className="text-lg hover:text-purple-400 transition-colors duration-300">8639460413</p>
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
              className="social-icon text-3xl hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Hero
