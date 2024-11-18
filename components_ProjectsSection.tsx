import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'

export function ProjectsSection({ fadeInUp }) {
  return (
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
        <ProjectCard 
          title="AI-Powered Task Management Platform"
          description="Developed a sophisticated task management system that uses machine learning to prioritize and categorize tasks. The platform integrates with various productivity tools and provides insightful analytics to boost team efficiency."
          technologies={['React', 'Node.js', 'TensorFlow.js', 'GraphQL']}
        />
        <ProjectCard 
          title="Blockchain-based Supply Chain Solution"
          description="Architected and implemented a decentralized supply chain management system using blockchain technology. This solution enhances transparency, reduces fraud, and improves traceability in complex supply networks."
          technologies={['Solidity', 'Ethereum', 'Web3.js', 'React']}
        />
      </div>
    </motion.section>
  )
}

function ProjectCard({ title, description, technologies }) {
  return (
    <Card className="p-6 bg-[#112240] border-none">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-200 font-semibold text-xl">{title}</h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-300">
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 text-sm text-teal-300 bg-teal-300/10 rounded">{tech}</span>
        ))}
      </div>
    </Card>
  )
}