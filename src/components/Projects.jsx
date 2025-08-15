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

    // Simplified heading animation
    gsap.fromTo(headingRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
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

    // Simplified project cards animation
    const cards = cardsRef.current?.querySelectorAll('.project-card')
    if (cards) {
      gsap.fromTo(cards,
        { 
          y: 100, 
          opacity: 0, 
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Simplified hover animations for cards
      cards.forEach(card => {
        const cardImage = card.querySelector('.card-image')
        const buttons = card.querySelectorAll('.project-btn')

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          })

          if (cardImage) {
            gsap.to(cardImage, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            })
          }

          // Simple button animations
          gsap.to(buttons, {
            y: -3,
            duration: 0.3,
            ease: "power2.out"
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })

          if (cardImage) {
            gsap.to(cardImage, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            })
          }

          gsap.to(buttons, {
            y: 0,
            duration: 0.3,
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
              className="project-card card-bg rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="card-image absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-slate-800 to-slate-900">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className="card-content p-6">
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
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full hover:bg-cyan-400/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="project-btn flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-medium rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="project-btn flex-1 px-4 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg text-center transition-all duration-300 transform hover:scale-105"
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
