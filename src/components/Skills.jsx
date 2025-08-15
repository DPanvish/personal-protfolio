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

    // Simplified skill icons animation
    const skillItems = skillsRef.current?.querySelectorAll('.skill-item')
    if (skillItems) {
      gsap.fromTo(skillItems,
        { 
          scale: 0, 
          opacity: 0, 
          y: 50
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Simplified hover animations for skill items
      skillItems.forEach(item => {
        const icon = item.querySelector('.skill-icon')
        const name = item.querySelector('.skill-name')

        item.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out"
          })

          gsap.to(name, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        })

        item.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })

          gsap.to(name, {
            opacity: 0,
            y: 10,
            duration: 0.3,
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
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
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
              className="skill-item flex flex-col items-center justify-center p-6 card-bg rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="skill-icon text-4xl mb-3">
                {skill.icon}
              </div>
              <div 
                className="skill-name text-sm font-medium text-slate-300 opacity-0 transform translate-y-2 text-center"
              >
                {skill.name}
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
              "RESTful APIs",
              "UI/UX Design"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-medium hover:from-cyan-500/30 hover:to-teal-500/30 transition-all duration-300 hover:scale-105"
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
