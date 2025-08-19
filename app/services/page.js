import { PenTool, FileCheck, Hammer, Building2, PaintBucket, Home, Wrench, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Services',
  description: 'Comprehensive architectural design and construction services by FADco. From plans to construction, we give your dreams a shape of reality.',
}

export default function Services() {
  const services = [
    {
      icon: PenTool,
      title: 'Architectural Designs & Drawings',
      description: 'Professional architectural designs and technical drawings that bring your vision to life with precision, creativity, and attention to detail.',
      features: ['House Plans', '3D Visualizations', 'Technical Drawings', 'Design Consultations']
    },
    {
      icon: FileCheck,
      title: 'Plan Submissions & Approvals',
      description: 'Complete handling of plan submissions to municipalities and institutions, ensuring all regulatory requirements are met efficiently.',
      features: ['Municipal Submissions', 'Compliance Checking', 'Approval Follow-ups', 'Documentation Management']
    },
    {
      icon: Building2,
      title: 'Construction Services',
      description: 'Full-service construction including bricklaying, structural work, and complete building construction from foundation to completion.',
      features: ['Foundation Work', 'Structural Construction', 'Bricklaying', 'General Building']
    },
    {
      icon: Hammer,
      title: 'Specialized Construction',
      description: 'Expert services in plastering, rhinoliting, and other specialized construction techniques for superior finishes.',
      features: ['Plastering', 'Rhinoliting', 'Concrete Work', 'Structural Repairs']
    },
    {
      icon: PaintBucket,
      title: 'Finishing Services',
      description: 'Professional painting, tiling, and interior finishing services that add the perfect final touches to your project.',
      features: ['Interior Painting', 'Exterior Painting', 'Tiling Work', 'Final Finishes']
    },
    {
      icon: Home,
      title: 'NHBRC Certified Home Building',
      description: 'Complete home building services with NHBRC certification, ensuring your dream home meets all quality and safety standards.',
      features: ['Custom Homes', 'Quality Assurance', 'NHBRC Compliance', 'Warranty Coverage']
    }
  ]

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Renovations & Extensions',
      description: 'Transform existing spaces with our expert renovation and extension services.'
    },
    {
      icon: Shield,
      title: 'Project Management',
      description: 'Complete project oversight ensuring quality, timeline, and budget control.'
    }
  ]

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Comprehensive architectural design and construction services delivered with precision, 
            creativity, and unwavering commitment to giving your dreams a shape of reality.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors duration-300">
                    <service.icon size={32} className="text-accent-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon size={24} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A streamlined approach ensuring exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to understand your vision, requirements, and budget' },
              { step: '02', title: 'Design & Planning', description: 'Creating detailed architectural plans and obtaining necessary approvals' },
              { step: '03', title: 'Construction', description: 'Expert execution with quality control and regular progress updates' },
              { step: '04', title: 'Handover', description: 'Final walkthrough, quality check, and project completion with warranties' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{phase.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-accent-500/5 dark:bg-accent-500/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Philosophy</h2>
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                At FADco, we believe in delivering exceptional results for our clients. We prioritize 
                open communication and transparency throughout the design and construction process, 
                ensuring that our clients are always informed and involved.
              </p>
              <p>
                We use the latest technology and best practices to deliver innovative solutions that 
                meet our clients' needs and exceed their expectations. Our commitment to sustainability 
                is evident in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Certifications</h2>
            <p className="text-gray-600 dark:text-gray-400">Trusted credentials ensuring quality and compliance</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
              <Shield size={48} className="text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">CIPC Registered</h3>
              <p className="text-gray-600 dark:text-gray-400">Officially registered with the Companies and Intellectual Property Commission</p>
            </div>
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
              <Home size={48} className="text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">NHBRC Certified</h3>
              <p className="text-gray-600 dark:text-gray-400">National Home Builders Registration Council certified home builder</p>
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
            Let's discuss your vision and give your dreams a shape of reality. 
            Contact us for a free consultation with our certified professionals.
          </p>
          <Link href="/contact" className="bg-white text-accent-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}