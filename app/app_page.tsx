import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-gray-900/50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-teal-500">KC</Link>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:text-teal-500 transition-colors">About</Link></li>
            <li><Link href="#experience" className="hover:text-teal-500 transition-colors">Experience</Link></li>
            <li><Link href="#projects" className="hover:text-teal-500 transition-colors">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-teal-500 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="home" className="py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kelvin Chinagorom</h1>
          <h2 className="text-2xl md:text-4xl text-teal-500 mb-8">Full Stack Developer</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <Button asChild>
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Hello! I'm Kelvin, a passionate full stack developer with a keen interest in building
                user-friendly and scalable web applications. With a strong foundation in both front-end
                and back-end technologies, I strive to create seamless digital experiences.
              </p>
              <p className="mb-4">
                My journey in web development started in 2015, and since then, I've had the opportunity
                to work on a diverse range of projects, from small business websites to large-scale
                enterprise applications.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                <li className="flex items-center"><span className="text-teal-500 mr-2">▹</span> TypeScript</li>
                <li className="flex items-center"><span className="text-teal-500 mr-2">▹</span> React</li>
                <li className="flex items-center"><span className="text-teal-500 mr-2">▹</span> Next.js</li>
                <li className="flex items-center"><span className="text-teal-500 mr-2">▹</span> Node.js</li>
                <li className="flex items-center"><span className="text-teal-500 mr-2">▹</span> GraphQL</li>
                <li className="flex items-center"><span className="text-teal-500 mr-2">▹</span> Tailwind CSS</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Kelvin Chinagorom"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Where I've Worked</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
                <p className="text-teal-500 mb-2">TechNova Solutions</p>
                <p className="text-sm text-gray-400 mb-4">January 2021 - Present</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">▹</span>
                    <span>Led the development of a cloud-based project management tool, improving team productivity by 30%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">▹</span>
                    <span>Implemented a microservices architecture, enhancing system scalability and reducing downtime by 50%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">▹</span>
                    <span>Mentored junior developers, conducting code reviews and promoting best practices in software development.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                <p className="text-teal-500 mb-2">InnovateTech Inc</p>
                <p className="text-sm text-gray-400 mb-4">June 2018 - December 2020</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">▹</span>
                    <span>Developed and maintained multiple client-facing web applications using React and Node.js.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">▹</span>
                    <span>Optimized database queries, resulting in a 40% improvement in application performance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">▹</span>
                    <span>Collaborated with UX designers to implement responsive and accessible user interfaces.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Some Things I've Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p className="mb-4">A full-featured e-commerce platform with real-time inventory management, secure payment processing, and a responsive design.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-sm rounded-full px-3 py-1">Next.js</span>
                  <span className="bg-gray-700 text-sm rounded-full px-3 py-1">TypeScript</span>
                  <span className="bg-gray-700 text-sm rounded-full px-3 py-1">Stripe</span>
                  <span className="bg-gray-700 text-sm rounded-full px-3 py-1">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-teal-500 hover:text-teal-400">
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-teal-500 hover:text-teal-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="mb-4">A collaborative task management application with real-time updates, file sharing, and team chat functionality.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-sm rounded-full px-3 py-1">React</span>
                  <span className="bg-gray-700 text-sm rounded-full px-3 py-1">Node.js</span>
                  <span className="bg-gray-700 text-sm rounded-full px-3 py-1">Socket.io</span>
                  <span className="bg-gray-700 text-sm rounded-full px-3 py-1">PostgreSQL</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-teal-500 hover:text-teal-400">
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-teal-500 hover:text-teal-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="max-w-2xl mx-auto mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <Button asChild>
            <Link href="mailto:kelvin@example.com">Say Hello</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kelvin Chinagorom. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}