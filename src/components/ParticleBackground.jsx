import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ParticleBackground = () => {
  const particlesRef = useRef(null)

  useEffect(() => {
    const particles = particlesRef.current
    if (!particles) return

    // Create simplified particles with fewer elements
    const particleCount = 30
    const particlesArray = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      const isLarge = Math.random() > 0.8
      
      particle.className = `absolute rounded-full ${
        isLarge ? 'w-1 h-1' : 'w-0.5 h-0.5'
      } bg-cyan-400/20`
      
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particles.appendChild(particle)
      particlesArray.push(particle)
    }

    // Simple particle animations
    particlesArray.forEach((particle, index) => {
      gsap.to(particle, {
        y: -100,
        x: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 15,
        repeat: -1,
        ease: "none",
        delay: index * 0.2,
      })
    })

    // Create fewer floating shapes
    const shapes = ['●', '◆']
    for (let i = 0; i < 6; i++) {
      const shape = document.createElement('div')
      shape.className = 'absolute text-cyan-400/10 text-sm pointer-events-none'
      shape.textContent = shapes[Math.floor(Math.random() * shapes.length)]
      shape.style.left = Math.random() * 100 + '%'
      shape.style.top = Math.random() * 100 + '%'
      particles.appendChild(shape)
      
      gsap.to(shape, {
        y: -80,
        x: Math.random() * 60 - 30,
        duration: Math.random() * 15 + 20,
        repeat: -1,
        ease: "none",
        delay: i * 0.8,
      })
    }

    // Cleanup
    return () => {
      particlesArray.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [])

  return (
    <div 
      ref={particlesRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  )
}

export default ParticleBackground
