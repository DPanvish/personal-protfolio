import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
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
        char === ' ' ? ' ' : `<span class="heading-letter" style="display: inline-block; opacity: 0; transform: translateY(50px) rotateY(-90deg);">${char}</span>`
      ).join('')

      const headingLetters = heading.querySelectorAll('.heading-letter')
      
      gsap.to(headingLetters, {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Enhanced project cards animation with 3D effects
    const cards = cardsRef.current?.querySelectorAll('.project-card')
    if (cards) {
      // Set initial state with 3D perspective
      gsap.set(cards, {
        y: 150,
        opacity: 0,
        scale: 0.6,
        rotationX: -30,
        rotationY: 15,
        transformOrigin: "center bottom",
        perspective: 1000
      })

      // Enhanced entrance animation with 3D rotation
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
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
        const cardImage = card.querySelector('.card-image')
        const cardContent = card.querySelector('.card-content')
        const buttons = card.querySelectorAll('.project-btn')
        const techStack = card.querySelectorAll('.tech-tag')
        const cardGlow = card.querySelector('.card-glow')
        const cardParticles = card.querySelector('.card-particles')

        card.addEventListener('mouseenter', () => {
          // Main card 3D animation
          gsap.to(card, {
            y: -15,
            scale: 1.05,
            rotationY: 5,
            rotationX: 2,
            duration: 0.5,
            ease: "power2.out"
          })

          // Background glow effect
          gsap.to(cardGlow, {
            opacity: 1,
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out"
          })

          // Particle animation
          gsap.to(cardParticles, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          })

          // Image zoom with rotation
          if (cardImage) {
            gsap.to(cardImage, {
              scale: 1.1,
              rotation: 2,
              duration: 0.5,
              ease: "power2.out"
            })
          }

          // Content slide up
          gsap.to(cardContent, {
            y: -8,
            duration: 0.5,
            ease: "power2.out"
          })

          // Tech stack tags animation
          gsap.to(techStack, {
            y: -5,
            scale: 1.1,
            stagger: 0.05,
            duration: 0.4,
            ease: "back.out(1.7)"
          })

          // Button animations with glow
          gsap.to(buttons, {
            y: -5,
            scale: 1.05,
            stagger: 0.1,
            duration: 0.4,
            ease: "back.out(1.7)"
          })

          // Add glow effect to buttons
          buttons.forEach(btn => {
            gsap.to(btn, {
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
              duration: 0.4,
              ease: "power2.out"
            })
          })
        })

        card.addEventListener('mouseleave', () => {
          // Reset main card animation
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power2.out"
          })

          // Reset background glow
          gsap.to(cardGlow, {
            opacity: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          })

          // Reset particle animation
          gsap.to(cardParticles, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "power2.out"
          })

          // Reset image
          if (cardImage) {
            gsap.to(cardImage, {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "power2.out"
            })
          }

          // Reset content
          gsap.to(cardContent, {
            y: 0,
            duration: 0.5,
            ease: "power2.out"
          })

          // Reset tech stack
          gsap.to(techStack, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          })

          // Reset buttons
          gsap.to(buttons, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          })

          // Remove button glow
          buttons.forEach(btn => {
            gsap.to(btn, {
              boxShadow: "none",
              duration: 0.4,
              ease: "power2.out"
            })
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

  const projects = [
    {
      title: "Resume Analyzer",
      description: "An AI-powered tool built with React and Gemini API to scan and analyze resume content.",
      image: "🔍",
      liveUrl: "#",
      codeUrl: "#",
      tech: ["React", "Gemini API", "AI"]
    },
    {
      title: "Gericht Restaurant",
      description: "A fully responsive, single-page website for a fine-dining restaurant using React.js.",
      image: "🍽️",
      liveUrl: "#",
      codeUrl: "#",
      tech: ["React", "Responsive Design"]
    },
    {
      title: "GPT-3 Landing Page",
      description: "A modern UI/UX landing page built with React showcasing cutting-edge design principles.",
      image: "🤖",
      liveUrl: "#",
      codeUrl: "#",
      tech: ["React", "Modern UI/UX"]
    },
    {
      title: "Mensplore",
      description: "An eCommerce front-end using HTML, CSS, and JavaScript for men's fashion.",
      image: "🛍️",
      liveUrl: "#",
      codeUrl: "#",
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ]

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="section-padding relative z-10"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          My <span className="gradient-text">Projects</span>
        </h2>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card relative overflow-hidden rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.8) 100%)',
                backdropFilter: 'blur(20px)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Animated background glow */}
              <div 
                className="card-glow absolute inset-0 opacity-0 transition-opacity duration-300"
                                  style={{
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.18) 0%, transparent 70%)',
                    transform: 'scale(1)'
                  }}
              />
              
              {/* Optimized particle background effect - reduced count */}
              <div className="card-particles absolute inset-0 opacity-0 transition-opacity duration-300">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400/25 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 1}s ease-in-out infinite`
                    }}
                  />
                ))}
              </div>

              {/* Gradient border effect */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/20 via-transparent to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="card-image absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-slate-700 group-hover:to-slate-800 transition-all duration-300">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className="card-content p-6 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag px-3 py-1 bg-slate-700/50 text-purple-400 text-sm rounded-full hover:bg-purple-400/20 transition-all duration-300 hover:scale-110"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="project-btn flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-medium rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="project-btn flex-1 px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-medium rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
