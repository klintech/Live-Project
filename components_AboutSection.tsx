import { motion } from 'framer-motion'

export function AboutSection({ fadeInUp }) {
  return (
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
  )
}