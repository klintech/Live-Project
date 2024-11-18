import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
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
  )
}