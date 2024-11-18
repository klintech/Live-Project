import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"

export function ExperienceSection({ fadeInUp }) {
  return (
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
        <ExperienceCard 
          title="Senior Full Stack Developer"
          company="TechNova Solutions"
          date="2021 — Present"
          responsibilities={[
            "Developed and maintained critical infrastructure for client projects using React, Node.js, and GraphQL",
            "Architected and implemented scalable backend solutions using microservices architecture",
            "Led a team of developers in delivering high-quality software products on time and within budget"
          ]}
        />
        <ExperienceCard 
          title="Full Stack Developer"
          company="InnovateTech Inc"
          date="2018 — 2021"
          responsibilities={[
            "Built and shipped highly interactive web applications for diverse clients",
            "Collaborated with designers to implement pixel-perfect, responsive designs",
            "Implemented RESTful APIs and integrated third-party services to enhance application functionality"
          ]}
        />
      </div>
    </motion.section>
  )
}

function ExperienceCard({ title, company, date, responsibilities }) {
  return (
    <Card className="p-6 bg-[#112240] border-none">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-200 font-semibold text-xl">{title}</h3>
          <p className="text-teal-300">{company}</p>
        </div>
        <p className="text-gray-400">{date}</p>
      </div>
      <ul className="text-gray-400 space-y-2 mb-4">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start">
            <span className="text-teal-300 mr-2">▹</span>
            {responsibility}
          </li>
        ))}
      </ul>
    </Card>
  )
}