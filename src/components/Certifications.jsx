import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import deloitteImage from '../assets/Deloite.jpg'
import apnaCollegeImage from '../assets/ApnaCollege.jpg'
import metaFrontendImage from '../assets/MetaFrontend.jpg'
import metaJavaScriptImage from '../assets/MetaJavaScript.jpg'
import sihImage from '../assets/SIH.jpg'
import siImage from '../assets/SI.png'

const Certifications = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      // Cleanup: restore body scrolling
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleViewCertificate = (cert) => {
    console.log('Opening certificate:', cert.title, 'Image:', cert.image);
    setSelectedCertificate(cert)
    setIsModalOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
    // Restore body scrolling when modal is closed
    document.body.style.overflow = 'unset'
  }

  const certifications = [
    {
      title: "Deloitte Virtual Technology Job Simulation",
      issuer: "Deloitte",
      date: "2024",
      description: "Completed comprehensive virtual job simulation covering technology consulting and digital transformation.",
      icon: "🏆",
      image: deloitteImage
    },
    {
      title: "ApnaCollege Sigma 5.0 Batch",
      issuer: "ApnaCollege",
      date: "2024",
      description: "Student of ApnaCollege in Sigma 5.0 batch where I learnt core concepts of DSA, Web Development, Aptitude and Reasoning.",
      icon: "🎓",
      image: apnaCollegeImage
    },
    {
      title: "Meta Frontend Development",
      issuer: "Meta",
      date: "2024",
      description: "Learnt Frontend basics with hands-on experience. This was taught by the Meta staff.",
      icon: "📱",
      image: metaFrontendImage
    },
    {
      title: "Meta JavaScript Programming",
      issuer: "Meta",
      date: "2024",
      description: "Learnt core concepts of Programming in JavaScript and Jest. This was taught by the Meta.",
      icon: "📜",
      image: metaJavaScriptImage
    },
    {
      title: "Smart India Hackathon Participation",
      issuer: "SIH",
      date: "2024",
      description: "Participated in Smart India Hackathon and tried to solve a problem statement on Travel & Tourism.",
      icon: "🚀",
      image: sihImage
    },
    {
      title: "Smart Interviews Training",
      issuer: "Smart Interviews",
      date: "2024",
      description: "I'm the student at Smart Interviews. Where I have learnt DSA and Problem Solving. I have Solved Many problems during the training.",
      icon: "🎯",
      image: siImage
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
           className="grid gap-8 max-w-6xl mx-auto"
           style={{
             display: 'grid',
             gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
             gridAutoRows: 'minmax(auto, 1fr)',
             justifyContent: 'center'
           }}
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
                
                                 {/* View Certificate Button */}
                 {cert.image && (
                   <div className="mt-4">
                     <button 
                       onClick={() => handleViewCertificate(cert)}
                       className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                     >
                       View Certificate
                     </button>
                   </div>
                 )}
              </div>
            </div>
                     ))}
         </div>
       </div>

               {/* Certificate Modal */}
        {isModalOpen && selectedCertificate && createPortal(
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" 
            style={{ 
              isolation: 'isolate',
              zIndex: 999999,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            onClick={closeModal}
          >
            <div 
              className="certificate-modal bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20 shadow-2xl"
              style={{
                zIndex: 1000000,
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
             {/* Modal Header */}
             <div className="p-6 border-b border-slate-700/50">
               <div className="flex items-center justify-between">
                 <div className="flex items-center space-x-4">
                   <div className="text-4xl">{selectedCertificate.icon}</div>
                   <div>
                     <h3 className="text-2xl font-bold text-white">{selectedCertificate.title}</h3>
                     <p className="text-slate-400">{selectedCertificate.issuer}</p>
                   </div>
                 </div>
                 <button
                   onClick={closeModal}
                   className="text-slate-400 hover:text-white transition-colors duration-300 text-2xl"
                 >
                   ×
                 </button>
               </div>
             </div>

             {/* Modal Content */}
             <div className="p-6">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 {/* Certificate Image */}
                 <div className="space-y-4">
                   <h4 className="text-lg font-semibold text-white">Certificate</h4>
                   <div className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800 min-h-[300px] flex items-center justify-center">
                     {selectedCertificate.image ? (
                       <img 
                         src={selectedCertificate.image} 
                         alt={`${selectedCertificate.title} Certificate`}
                         className="w-full h-auto object-contain max-h-[500px]"
                         style={{
                           filter: 'brightness(0.95) contrast(1.05)'
                         }}
                         onError={(e) => {
                           console.error('Failed to load certificate image:', selectedCertificate.image);
                           e.target.style.display = 'none';
                         }}
                       />
                     ) : (
                       <div className="text-slate-400 text-center p-8">
                         <p>Certificate image not available</p>
                       </div>
                     )}
                   </div>
                 </div>

                 {/* Certificate Details */}
                 <div className="space-y-6">
                   <div>
                     <h4 className="text-lg font-semibold text-white mb-3">Details</h4>
                     <div className="space-y-3">
                       <div>
                         <span className="text-slate-400">Issuer:</span>
                         <span className="text-white ml-2 font-medium">{selectedCertificate.issuer}</span>
                       </div>
                       <div>
                         <span className="text-slate-400">Date:</span>
                         <span className="text-purple-400 ml-2 font-medium">{selectedCertificate.date}</span>
                       </div>
                       <div>
                         <span className="text-slate-400">Description:</span>
                         <p className="text-white mt-2 leading-relaxed">{selectedCertificate.description}</p>
                       </div>
                     </div>
                   </div>

                   {/* Additional Information */}
                   <div>
                     <h4 className="text-lg font-semibold text-white mb-3">Skills & Technologies</h4>
                     <div className="flex flex-wrap gap-2">
                       {selectedCertificate.title.includes('Deloitte') && (
                         <>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Technology Consulting</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Digital Transformation</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Virtual Simulation</span>
                         </>
                       )}
                       {selectedCertificate.title.includes('ApnaCollege') && (
                         <>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">DSA</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Web Development</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Aptitude</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Reasoning</span>
                         </>
                       )}
                       {selectedCertificate.title.includes('Meta Frontend') && (
                         <>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Frontend Development</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">HTML/CSS</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">JavaScript</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Hands-on Experience</span>
                         </>
                       )}
                       {selectedCertificate.title.includes('Meta JavaScript') && (
                         <>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">JavaScript</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Jest Testing</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Programming</span>
                           <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Core Concepts</span>
                         </>
                       )}
                                               {selectedCertificate.title.includes('Smart India Hackathon') && (
                          <>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Problem Solving</span>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Travel & Tourism</span>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Innovation</span>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Hackathon</span>
                          </>
                        )}
                        {selectedCertificate.title.includes('Smart Interviews') && (
                          <>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">DSA</span>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Problem Solving</span>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Algorithm Design</span>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Data Structures</span>
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Competitive Programming</span>
                          </>
                        )}
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Modal Footer */}
             <div className="p-6 border-t border-slate-700/50 flex justify-end">
               <button
                 onClick={closeModal}
                 className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
               >
                 Close
               </button>
                           </div>
            </div>
          </div>,
          document.body
        )}
     </section>
   )
 }

export default Certifications
