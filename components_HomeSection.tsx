import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function HomeSection({ fadeInUp }) {
  return (
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
  )
}