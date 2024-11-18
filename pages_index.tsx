import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from 'next/link'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300 font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold text-teal-300">KC</Link>
          <ul className="flex space-x-6">
            {['about', 'experience', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item}`}
                  className={`text-sm uppercase tracking-widest hover:text-teal-300 transition-colors ${activeSection === item ? 'text-teal-300' : 'text-gray-400'}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-20 sm:py-32">
        <HomeSection fadeInUp={fadeInUp} />
        <AboutSection fadeInUp={fadeInUp} />
        <ExperienceSection fadeInUp={fadeInUp} />
        <ProjectsSection fadeInUp={fadeInUp} />
        <ContactSection fadeInUp={fadeInUp} />
      </div>

      <Footer />
    </div>
  )
}