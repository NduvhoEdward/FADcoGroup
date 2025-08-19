import { Home, Building2, Compass, Hammer, PaintBucket, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Services',
  description: 'Comprehensive architecture and construction services for residential and commercial projects',
}

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: 'Architectural Design',
      description: 'From concept to detailed blueprints, we create innovative designs that balance aesthetics, functionality, and sustainability.',
      features: ['Conceptual Design', 'Technical Drawings', '3D Modeling', 'Planning Applications']
    },
    {
      icon: Building2,
      title: 'Construction Management',
      description: 'Complete project oversight ensuring quality construction, timeline adherence, and budget control.',
      features: ['Project Planning', 'Quality Control', 'Timeline Management', 'Budget Oversight']
    },
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes and residential developments tailored to your lifestyle and preferences.',
      features: ['Custom Homes', 'Extensions', 'New Developments', 'Luxury Residences']
    },
    {
      icon: Hammer,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial developments built to last.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Mixed-Use Developments']
    },
    {
      icon: PaintBucket,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Whole House Remodels', 'Commercial Upgrades']
    },
    {
      icon: Lightbulb,
      title: 'Design Consultation',
      description: 'Expert advice and consultation to help you make informed decisions about your project.',
      features: ['Site Analysis', 'Feasibility Studies', 'Design Review', 'Code Compliance']
    }
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-primary-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-600 max-w-4xl mx-auto">
            Comprehensive architecture and construction services delivered with precision, 
            creativity, and unwavering commitment to quality. From initial concept to final 
            handover, we're with you every step of the way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <service.icon size={48} className="text-accent-500 mb-6" />
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-primary-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-primary-700 flex items-center">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Process</h2>
            <p className="text-xl text-primary-600">
              A streamlined approach ensuring exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to understand your vision and requirements' },
              { step: '02', title: 'Design', description: 'Creating detailed plans and 3D visualizations' },
              { step: '03', title: 'Construction', description: 'Expert execution with quality control throughout' },
              { step: '04', title: 'Completion', description: 'Final walkthrough and project handover' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">{phase.title}</h3>
                <p className="text-primary-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your vision and create something extraordinary together. 
            Contact us for a free consultation.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}