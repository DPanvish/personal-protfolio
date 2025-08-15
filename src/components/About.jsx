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

    // Simplified heading animation
    gsap.fromTo(headingRef.current,
      { x: -100, opacity: 0, scale: 0.9 },
      {
        x: 0,
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

    // Simplified text animation
    const textLines = textRef.current?.querySelectorAll('.text-line')
    if (textLines) {
      gsap.fromTo(textLines,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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

    // Simplified achievement cards animation
    const cards = cardsRef.current?.querySelectorAll('.achievement-card')
    if (cards) {
      gsap.fromTo(cards,
        { 
          y: 80, 
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
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Simplified hover animations for cards
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
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

  const achievements = [
    {
      title: "B.Tech, Computer Science & Engineering",
      subtitle: "Raghu Institute of Technology",
      detail: "9.08 CGPA"
    },
    {
      title: "Intermediate",
      subtitle: "Sri Chaitanya Junior College",
      detail: "87.4%"
    },
    {
      title: "Certification",
      subtitle: "Deloitte Virtual Technology Job Simulation",
      detail: "Completed"
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
              Education & <span className="gradient-text">Achievements</span>
            </h3>
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card card-bg rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-slate-400 mb-2">
                  {achievement.subtitle}
                </p>
                <p className="text-cyan-400 font-medium">
                  {achievement.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
