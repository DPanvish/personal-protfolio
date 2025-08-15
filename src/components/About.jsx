import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
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
        char === ' ' ? ' ' : `<span class="heading-letter" style="display: inline-block; opacity: 0; transform: translateY(30px) rotateX(-90deg);">${char}</span>`
      ).join('')

      const headingLetters = heading.querySelectorAll('.heading-letter')
      
      gsap.to(headingLetters, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Enhanced text animation with wave effect
    const textLines = textRef.current?.querySelectorAll('.text-line')
    if (textLines) {
      // Set initial state
      gsap.set(textLines, {
        y: 60,
        opacity: 0,
        scale: 0.9,
        rotationX: -10
      })

      // Enhanced entrance animation
      gsap.to(textLines, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Optimized floating animation - reduced frequency
      textLines.forEach((line, index) => {
        gsap.to(line, {
          y: -2,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 2.5 + (index * 0.2),
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
      })
    }

    // Enhanced achievement cards animation with staggered effects
    const cards = cardsRef.current?.querySelectorAll('.achievement-card')
    if (cards) {
      // Initial state - cards start from different positions
      gsap.set(cards, {
        y: (index) => 100 + (index * 20),
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
        duration: 1.2,
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
          y: -5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 2 + (index * 0.3),
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
      })

      // Enhanced hover animations for cards with background effects
      cards.forEach(card => {
        const cardContent = card.querySelector('.card-content')
        const cardGlow = card.querySelector('.card-glow')
        const cardIcon = card.querySelector('.card-icon')
        
        card.addEventListener('mouseenter', () => {
          // Main card animation
          gsap.to(card, {
            y: -15,
            scale: 1.05,
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
          
          // Content animation
          gsap.to(cardContent, {
            y: -5,
            duration: 0.4,
            ease: "power2.out"
          })
          
          // Icon animation
          if (cardIcon) {
            gsap.to(cardIcon, {
              scale: 1.2,
              rotation: 360,
              duration: 0.6,
              ease: "back.out(1.7)"
            })
          }
          
          // Border glow effect
          gsap.to(card, {
            boxShadow: "0 0 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.1)",
            duration: 0.4,
            ease: "power2.out"
          })
        })

        card.addEventListener('mouseleave', () => {
          // Reset main card animation
          gsap.to(card, {
            y: 0,
            scale: 1,
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
          
          // Reset content animation
          gsap.to(cardContent, {
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          })
          
          // Reset icon animation
          if (cardIcon) {
            gsap.to(cardIcon, {
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: "power2.out"
            })
          }
          
          // Reset border glow
          gsap.to(card, {
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out"
          })
        })
      })
    }

    return () => {
      const cardsToCleanup = cardsRef.current?.querySelectorAll('.achievement-card')
      cardsToCleanup?.forEach(card => {
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  const achievements = [
    {
      title: "B.Tech, Computer Science & Engineering",
      subtitle: "Raghu Institute of Technology",
      detail: "9.08 CGPA",
      icon: "🎓"
    },
    {
      title: "Intermediate",
      subtitle: "Sri Chaitanya Junior College",
      detail: "87.4%",
      icon: "📚"
    }
  ]

  const summary = `Detail-focused B.Tech in Computer Science student with a strong foundation in Data Structures and Algorithms. Passionate about leveraging this problem-solving background to build user-friendly and responsive web interfaces. Proficient in HTML, CSS, JavaScript, and React.js, with hands-on experience demonstrated through developing multiple frontend projects. Eager to contribute to a dynamic team and grow as a frontend developer.`

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="section-padding relative z-10"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div>
            <h2 
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div ref={textRef} className="space-y-4">
              {summary.split('. ').map((sentence, index) => (
                <p 
                  key={index}
                  className="text-line text-slate-300 text-lg leading-relaxed"
                >
                  {sentence}{index < summary.split('. ').length - 1 ? '.' : ''}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div ref={cardsRef} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">
              <span className="gradient-text">Education</span>
            </h3>
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card relative overflow-hidden rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(10, 10, 10, 0.7) 100%)',
                  backdropFilter: 'blur(15px)'
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
                <div className="card-content relative z-10">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="card-icon text-3xl flex-shrink-0">
                      {achievement.icon}
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-slate-400 mb-2 group-hover:text-slate-300 transition-colors duration-300">
                        {achievement.subtitle}
                      </p>
                      <p className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">
                        {achievement.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
