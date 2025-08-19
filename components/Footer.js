import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent-500 rounded"></div>
              <span className="text-xl font-bold">Elite A&C</span>
            </Link>
            <p className="text-primary-300 mb-4">
              Creating exceptional architectural designs and construction solutions 
              that stand the test of time.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-primary-300 hover:text-accent-500 cursor-pointer" />
              <Twitter size={20} className="text-primary-300 hover:text-accent-500 cursor-pointer" />
              <Instagram size={20} className="text-primary-300 hover:text-accent-500 cursor-pointer" />
              <Linkedin size={20} className="text-primary-300 hover:text-accent-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-primary-300 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-primary-300 hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="text-primary-300 hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="text-primary-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-300">Architectural Design</li>
              <li className="text-primary-300">Construction Management</li>
              <li className="text-primary-300">Residential Projects</li>
              <li className="text-primary-300">Commercial Construction</li>
              <li className="text-primary-300">Renovation & Remodeling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-accent-500" />
                <span className="text-primary-300">123 Architecture Ave, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-accent-500" />
                <span className="text-primary-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-accent-500" />
                <span className="text-primary-300">info@elitearchitecture.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center">
          <p className="text-primary-300">
            © 2024 Elite Architecture & Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
