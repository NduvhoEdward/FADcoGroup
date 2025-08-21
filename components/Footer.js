import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#1f6b60'}}>
                <img 
                  src="logo.jpg" 
                  alt="FADco Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">FADco</span>
                <span className="text-xs text-gray-400">Fiya Architectural Designs</span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Giving your dreams a shape of reality. Proudly South African, 
              we are architects of innovation and builders of excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-accent-500 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-accent-500 cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-accent-500 cursor-pointer transition-colors" />
              <Linkedin size={20} className="text-gray-400 hover:text-accent-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-accent-500 transition-colors">About FADco</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent-500 transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-accent-500 transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Architectural Design</li>
              <li className="text-gray-300">Plan Submissions</li>
              <li className="text-gray-300">Construction Services</li>
              <li className="text-gray-300">Home Building (NHBRC)</li>
              <li className="text-gray-300">Finishing Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  77 Fulham Road, Brixton,<br />
                  Johannesburg, 2092
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent-500" />
                <div className="text-gray-300 text-sm">
                  {/* <div>Office: +27 11 839 6612</div> */}
                  <div>Mobile: +27 82 595 3955</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent-500" />
                <span className="text-gray-300 text-sm">fiyadesigns1@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 FADco - Fiya Architectural Designs and Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">CIPC Registered</span>
              <span className="text-gray-400">NHBRC Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
