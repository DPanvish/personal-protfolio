import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Skills = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const skillsRef = useRef(null)

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

    // Enhanced skill icons animation with 3D effects
    const skillItems = skillsRef.current?.querySelectorAll('.skill-item')
    if (skillItems) {
      // Set initial state with 3D perspective
      gsap.set(skillItems, {
        scale: 0,
        opacity: 0,
        y: 80,
        rotationX: -30,
        rotationY: 15,
        transformOrigin: "center bottom",
        perspective: 1000
      })

      // Enhanced entrance animation with 3D rotation
      gsap.to(skillItems, {
        scale: 1,
        opacity: 1,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Optimized floating animation - reduced frequency and complexity
      skillItems.forEach((item, index) => {
        gsap.to(item, {
          y: -3,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 2 + (index * 0.2),
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
      })

      // Enhanced hover animations with 3D effects and particle backgrounds
      skillItems.forEach(item => {
        const icon = item.querySelector('.skill-icon')
        const name = item.querySelector('.skill-name')
        const itemGlow = item.querySelector('.item-glow')
        const itemParticles = item.querySelector('.item-particles')

        item.addEventListener('mouseenter', () => {
          // Main item 3D animation
          gsap.to(item, {
            y: -10,
            scale: 1.1,
            rotationY: 5,
            rotationX: 2,
            duration: 0.4,
            ease: "power2.out"
          })

          // Background glow effect
          gsap.to(itemGlow, {
            opacity: 1,
            scale: 1.2,
            duration: 0.4,
            ease: "power2.out"
          })

          // Particle animation
          gsap.to(itemParticles, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          })

          // Icon animation with rotation
          gsap.to(icon, {
            scale: 1.3,
            rotation: 360,
            duration: 0.6,
            ease: "back.out(1.7)"
          })

          // Name animation with glow
          gsap.to(name, {
            opacity: 1,
            y: 0,
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
          })

          // Add glow effect to item
          gsap.to(item, {
            boxShadow: "0 0 25px rgba(6, 182, 212, 0.4), 0 0 50px rgba(6, 182, 212, 0.1)",
            duration: 0.4,
            ease: "power2.out"
          })
        })

        item.addEventListener('mouseleave', () => {
          // Reset main item animation
          gsap.to(item, {
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 0.4,
            ease: "power2.out"
          })

          // Reset background glow
          gsap.to(itemGlow, {
            opacity: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          })

          // Reset particle animation
          gsap.to(itemParticles, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power2.out"
          })

          // Reset icon animation
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out"
          })

          // Reset name animation
          gsap.to(name, {
            opacity: 0,
            y: 10,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          })

          // Remove glow effect
          gsap.to(item, {
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out"
          })
        })
      })
    }

    return () => {
      skillItems?.forEach(item => {
        item.removeEventListener('mouseenter', () => {})
        item.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "React.js", icon: "⚛️" },
    { name: "Three.js", icon: "🎲" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Tailwind CSS", icon: "🎯" },
    { name: "Vite", icon: "⚡" },
    { name: "C++", icon: "🔧" },
    { name: "Java", icon: "☕" }
  ]

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="section-padding relative z-10"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          My <span className="gradient-text">Skills</span>
        </h2>

        <div 
          ref={skillsRef}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item relative overflow-hidden flex flex-col items-center justify-center p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.85) 0%, rgba(10, 10, 10, 0.65) 100%)',
                backdropFilter: 'blur(18px)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Animated background glow */}
              <div 
                className="item-glow absolute inset-0 opacity-0 transition-opacity duration-300"
                                  style={{
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.14) 0%, transparent 70%)',
                    transform: 'scale(1)'
                  }}
              />
              
              {/* Optimized particle background effect - reduced count */}
              <div className="item-particles absolute inset-0 opacity-0 transition-opacity duration-300">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${2.5 + Math.random() * 1}s ease-in-out infinite`
                    }}
                  />
                ))}
              </div>

              {/* Gradient border effect */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/15 via-transparent to-violet-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Skill content */}
              <div className="relative z-10">
                <div className="skill-icon text-4xl mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {skill.icon}
                </div>
                <div 
                  className="skill-name text-sm font-medium text-slate-300 opacity-0 transform translate-y-2 text-center group-hover:text-white transition-colors duration-300"
                >
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Technologies & <span className="gradient-text">Tools</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Data Structures & Algorithms",
              "Problem Solving",
              "Responsive Design",
              "Git & GitHub",
              "Canva",
              "Cursor.ai",
              "WebStorm",
              "VS Code",
              "UI/UX Design"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 text-purple-400 rounded-full text-sm font-medium hover:from-purple-500/30 hover:to-violet-500/30 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
