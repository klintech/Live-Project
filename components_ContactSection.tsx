import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function ContactSection({ fadeInUp }) {
  return (
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
  )
}