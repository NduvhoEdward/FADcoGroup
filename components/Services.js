import { Home, Building2, Compass, Hammer } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: 'Architectural Design',
      description: 'Innovative and functional design solutions tailored to your vision and requirements.'
    },
    {
      icon: Building2,
      title: 'Construction Management',
      description: 'End-to-end project management ensuring quality, timeline, and budget adherence.'
    },
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Custom homes and residential developments that reflect your lifestyle and preferences.'
    },
    {
      icon: Hammer,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial developments built to last.'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Comprehensive architecture and construction services delivered with 
            precision, creativity, and unwavering commitment to quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <service.icon size={48} className="text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-primary-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
