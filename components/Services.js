import { PenTool, FileCheck, Hammer, Building2, Paintbrush, Home } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: PenTool,
      title: 'Architectural Designs & Drawings',
      description: 'Professional architectural designs and technical drawings that bring your vision to life with precision and creativity.'
    },
    {
      icon: FileCheck,
      title: 'Plan Submissions & Approvals',
      description: 'Complete submission of plans to municipalities and other institutions for approval, handling all regulatory requirements.'
    },
    {
      icon: Building2,
      title: 'Construction Services',
      description: 'Full-service construction including bricklaying, structural work, and complete building construction from foundation to roof.'
    },
    {
      icon: Hammer,
      title: 'Specialized Construction',
      description: 'Expert services in plastering, rhinoliting, and other specialized construction techniques for superior finishes.'
    },
    {
      icon: Paintbrush,
      title: 'Finishing Services',
      description: 'Professional painting, tiling, and interior finishing services that add the perfect final touches to your project.'
    },
    {
      icon: Home,
      title: 'Home Building',
      description: 'NHBRC certified home building services, ensuring your dream home meets all quality and safety standards.'
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive architectural and construction services delivered with 
            precision, creativity, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors duration-300">
                  <service.icon size={32} className="text-accent-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Effect Arrow */}
              <div className="flex items-center text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium mr-2">Learn More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-accent-500/5 dark:bg-accent-500/10 rounded-2xl border border-accent-500/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Philosophy</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We believe in delivering exceptional results through open communication, transparency, 
              and the latest technology. Our commitment to sustainability and innovation ensures 
              every project minimizes environmental impact while exceeding expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}