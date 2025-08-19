'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Replace with your form submission logic (Formspree, etc.)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact FADco
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Ready to give your dreams a shape of reality? Get in touch with our team 
            for a free consultation and let's discuss your architectural and construction project.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send us a message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-500 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-6">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-500 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-6">
                  Sorry, there was an error sending your message. Please try again or call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="architectural-design">Architectural Design</option>
                      <option value="home-building">Home Building</option>
                      <option value="construction">Construction Services</option>
                      <option value="renovation">Renovation</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your dream project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-accent-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Office Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      77 Fulham Road<br />
                      Brixton, Johannesburg<br />
                      2092, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-accent-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                    <div className="text-gray-600 dark:text-gray-400 space-y-1">
                      <p>Office: +27 11 839 6612</p>
                      <p>Mobile: +27 82 595 3955</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-accent-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">fiyadesigns1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock size={24} className="text-accent-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                    <div className="text-gray-600 dark:text-gray-400">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Service Areas</h3>
                <div className="text-gray-600 dark:text-gray-400">
                  <p className="mb-2">We proudly serve clients across:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Johannesburg & surrounding areas</li>
                    <li>Gauteng Province</li>
                    <li>Surrounding provinces</li>
                  </ul>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8 p-6 bg-accent-500/5 dark:bg-accent-500/10 rounded-xl border border-accent-500/20">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="font-semibold text-accent-500">CIPC</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Registered</div>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="font-semibold text-accent-500">NHBRC</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Certified</div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Find Us</h3>
                <div className="bg-gray-100 dark:bg-gray-800 h-64 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400">Interactive map will be added here</p>
                  {/* Replace with actual Google Maps embed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-500">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's turn your architectural dreams into reality. Contact FADco today 
            and experience the difference of working with certified professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27118396612" className="bg-white text-accent-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Call Now: 011 839 6612
            </a>
            <a href="mailto:fiyadesigns1@gmail.com" className="border-2 border-white text-white hover:bg-white hover:text-accent-500 px-8 py-4 rounded-lg font-semibold transition-colors">
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}