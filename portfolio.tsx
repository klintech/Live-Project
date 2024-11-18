'use client'

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
        <motion.section 
          id="home" 
          className="min-h-screen flex flex-col justify-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <p className="text-teal-300 mb-4">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-200 mb-4">
            Kelvin Chinagorom.
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-400 mb-6">
            I build things for the web.
          </h2>
          <p className="text-lg max-w-xl text-gray-400 mb-8">
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          <Button className="bg-transparent text-teal-300 border border-teal-300 hover:bg-teal-300/10 w-fit">
            Check out my projects
          </Button>
        </motion.section>

        <motion.section 
          id="about" 
          className="min-h-screen flex flex-col justify-center"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <span className="text-teal-300 mr-2">01.</span> About Me
          </h2>
          <div className="text-gray-400 space-y-4 max-w-2xl">
            <p>
              Hello! My name is Kelvin, and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught me 
              a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these 
              days is building accessible, inclusive products and digital experiences at Upstatement 
              for a variety of clients.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 list-none">
              {['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'Next.js', 'GraphQL'].map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="text-teal-300 mr-2">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section 
          id="experience" 
          className="min-h-screen flex flex-col justify-center"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <span className="text-teal-300 mr-2">02.</span> Where I've Worked
          </h2>
          <div className="space-y-12">
            <Card className="p-6 bg-[#112240] border-none">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-200 font-semibold text-xl">Senior Full Stack Developer</h3>
                  <p className="text-teal-300">TechNova Solutions</p>
                </div>
                <p className="text-gray-400">2021 — Present</p>
              </div>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">▹</span>
                  Developed and maintained critical infrastructure for client projects using React, Node.js, and GraphQL
                </li>
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">▹</span>
                  Architected and implemented scalable backend solutions using microservices architecture
                </li>
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">▹</span>
                  Led a team of developers in delivering high-quality software products on time and within budget
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-[#112240] border-none">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-200 font-semibold text-xl">Full Stack Developer</h3>
                  <p className="text-teal-300">InnovateTech Inc</p>
                </div>
                <p className="text-gray-400">2018 — 2021</p>
              </div>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">▹</span>
                  Built and shipped highly interactive web applications for diverse clients
                </li>
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">▹</span>
                  Collaborated with designers to implement pixel-perfect, responsive designs
                </li>
                <li className="flex items-start">
                  <span className="text-teal-300 mr-2">▹</span>
                  Implemented RESTful APIs and integrated third-party services to enhance application functionality
                </li>
              </ul>
            </Card>
          </div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="min-h-screen flex flex-col justify-center"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <span className="text-teal-300 mr-2">03.</span> Some Things I've Built
          </h2>
          <div className="grid gap-8">
            <Card className="p-6 bg-[#112240] border-none">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-200 font-semibold text-xl">AI-Powered Task Management Platform</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Developed a sophisticated task management system that uses machine learning to prioritize and categorize tasks. 
                The platform integrates with various productivity tools and provides insightful analytics to boost team efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm text-teal-300 bg-teal-300/10 rounded">React</span>
                <span className="px-3 py-1 text-sm text-teal-300 bg-teal-300/10 rounded">Node.js</span>
                <span className="px-3 py-1 text-sm text-teal-300 bg-teal-300/10 rounded">TensorFlow.js</span>
                <span className="px-3 py-1 text-sm text-teal-300 bg-teal-300/10 rounded">GraphQL</span>
              </div>
            </Card>

            <Card className="p-6 bg-[#112240] border-none">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-200 font-semibold text-xl">Blockchain-based Supply Chain Solution</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Architected and implemented a decentralized supply chain management system using blockchain technology. 
                This solution enhances transparency, reduces fraud, and improves traceability in complex supply networks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm text-teal-300 bg-teal-300/10 rounded">Solidity</span>
                <span className="px-3 py-1 text-sm text-teal-300 bg-teal-300/10 rounded">Ethereum</span>
                <span className="px-3 py-1 text-sm text-teal-300 bg-teal-300/10 rounded">Web3.js</span>
                <span className="px-3 py-1 text-sm text-teal-300 bg-teal-300/10 rounded">React</span>
              </div>
            </Card>
          </div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="min-h-screen flex flex-col justify-center"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-8 flex items-center">
            <span className="text-teal-300 mr-2">04.</span> What's Next?
          </h2>
          <p className="text-gray-400 max-w-xl mb-8 text-center mx-auto">
            I'm currently looking for new opportunities to work on exciting projects with great people. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          <Button className="bg-transparent text-teal-300 border border-teal-300 hover:bg-teal-300/10 mx-auto">
            Say Hello
          </Button>
        </motion.section>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-4 flex justify-center">
        <div className="flex space-x-4">
          <Link href="https://github.com/klintech" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/clinton-kelvin-b32257254" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://twitter.com/chinagorom_kelv" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:clintonkelvin739@gmail.com">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}