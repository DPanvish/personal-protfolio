import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Certifications = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Enhanced heading animation with letter-by-letter effect
    const heading = headingRef.current
    if (heading) {
      // Split heading into letters for individual animation
      const headingText = heading.textContent
      heading.innerHTML = headingText.split('').map((char, index) => 
        char === ' ' ? ' ' : `<span class="heading-letter" style="display: inline-block; opacity: 0; transform: translateY(40px) rotateZ(-10deg);">${char}</span>`
      ).join('')

      const headingLetters = heading.querySelectorAll('.heading-letter')
      
      gsap.to(headingLetters, {
        opacity: 1,
        y: 0,
        rotationZ: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Enhanced certification cards animation with 3D effects
    const cards = cardsRef.current?.querySelectorAll('.certification-card')
    if (cards) {
      // Set initial state with 3D perspective
      gsap.set(cards, {
        y: 80,
        opacity: 0,
        scale: 0.7,
        rotationX: -15,
        transformOrigin: "center bottom"
      })

      // Enhanced entrance animation
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Optimized floating animation - reduced frequency and complexity
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: -4,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 2.5 + (index * 0.4),
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
      })

      // Enhanced hover animations with 3D effects and particle backgrounds
      cards.forEach(card => {
        const cardContent = card.querySelector('.card-content')
        const cardGlow = card.querySelector('.card-glow')
        const cardIcon = card.querySelector('.card-icon')

        card.addEventListener('mouseenter', () => {
          // Main card 3D animation
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            rotationY: 5,
            rotationX: 2,
            duration: 0.4,
            ease: "power2.out"
          })

          // Background glow effect
          gsap.to(cardGlow, {
            opacity: 1,
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
          })

          // Content slide up
          gsap.to(cardContent, {
            y: -5,
            duration: 0.4,
            ease: "power2.out"
          })

          // Icon animation with rotation
          gsap.to(cardIcon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.6,
            ease: "back.out(1.7)"
          })

          // Add glow effect to card
          gsap.to(card, {
            boxShadow: "0 0 25px rgba(139, 92, 246, 0.4), 0 0 50px rgba(139, 92, 246, 0.1)",
            duration: 0.4,
            ease: "power2.out"
          })
        })

        card.addEventListener('mouseleave', () => {
          // Reset main card animation
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 0.4,
            ease: "power2.out"
          })

          // Reset background glow
          gsap.to(cardGlow, {
            opacity: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          })

          // Reset content
          gsap.to(cardContent, {
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          })

          // Reset icon animation
          gsap.to(cardIcon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out"
          })

          // Remove glow effect
          gsap.to(card, {
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out"
          })
        })
      })
    }

    return () => {
      cards?.forEach(card => {
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  const certifications = [
    {
      title: "Deloitte Virtual Technology Job Simulation",
      issuer: "Deloitte",
      date: "2024",
      description: "Completed comprehensive virtual job simulation covering technology consulting and digital transformation.",
      icon: "🏆",
      image: "/src/assets/Deloite.jpg"
    },
    {
      title: "ApnaCollege Sigma 5.0 Batch",
      issuer: "ApnaCollege",
      date: "2024",
      description: "Student of ApnaCollege in Sigma 5.0 batch where I learnt core concepts of DSA, Web Development, Aptitude and Reasoning.",
      icon: "🎓",
      image: "/src/assets/ApnaCollege.jpg"
    },
    {
      title: "Meta Frontend Development",
      issuer: "Meta",
      date: "2024",
      description: "Learnt Frontend basics with hands-on experience. This was taught by the Meta staff.",
      icon: "📱",
      image: "/src/assets/MetaFrontend.jpg"
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Coursera",
      date: "2023",
      description: "Comprehensive course covering HTML, CSS, JavaScript, and modern web development practices.",
      icon: "💻"
    },
    {
      title: "React.js Development",
      issuer: "Udemy",
      date: "2023",
      description: "Advanced React.js course covering hooks, context, and modern React development patterns.",
      icon: "⚛️"
    }
  ]

  return (
    <section 
      id="certifications"
      ref={sectionRef}
      className="section-padding relative z-10"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          <span className="gradient-text">Certifications</span>
        </h2>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certification-card relative overflow-hidden rounded-xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(10, 10, 10, 0.7) 100%)',
                backdropFilter: 'blur(15px)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Animated background glow */}
              <div 
                className="card-glow absolute inset-0 opacity-0 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                  transform: 'scale(1)'
                }}
              />
              
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/20 via-transparent to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card content */}
              <div className="card-content p-6 relative z-10">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="card-icon text-3xl flex-shrink-0">
                    {cert.icon}
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-slate-400 mb-2 group-hover:text-slate-300 transition-colors duration-300">
                      {cert.issuer}
                    </p>
                    <p className="text-purple-400 font-medium mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {cert.date}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
                
                {/* Certificate Image */}
                {cert.image && (
                  <div className="mt-4 relative overflow-hidden rounded-lg">
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Certificate`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(0.9) contrast(1.1)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
