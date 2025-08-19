import Image from 'next/image'
import { Users, Award, Clock, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Elite Architecture & Construction - our story, values, and commitment to excellence',
}

export default function About() {
  const stats = [
    { icon: Users, number: '500+', label: 'Projects Completed' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '98%', label: 'On-Time Delivery' },
    { icon: CheckCircle, number: '100%', label: 'Client Satisfaction' },
  ]

  const values = [
    {
      title: 'Quality Excellence',
      description: 'We never compromise on quality, using only the finest materials and craftsmanship in every project.'
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge design and construction technologies to deliver exceptional results.'
    },
    {
      title: 'Sustainability',
      description: 'Environmental responsibility is at the core of our design philosophy and construction practices.'
    },
    {
      title: 'Client Partnership',
      description: 'We work closely with our clients, ensuring their vision is realized from concept to completion.'
    }
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary-900 mb-6">
              About Elite Architecture & Construction
            </h1>
            <p className="text-xl text-primary-600 max-w-4xl mx-auto">
              For over 15 years, we have been transforming visions into reality through 
              innovative architectural design and superior construction craftsmanship.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon size={48} className="text-accent-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary-900 mb-2">{stat.number}</div>
                <div className="text-primary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-primary-700">
                <p>
                  Founded in 2009, Elite Architecture & Construction began with a simple mission: 
                  to create exceptional spaces that enhance people's lives and communities. What 
                  started as a small architectural firm has evolved into a full-service design and 
                  construction company.
                </p>
                <p>
                  Our integrated approach combines architectural vision with construction expertise, 
                  ensuring seamless project delivery from initial concept through final handover. 
                  We believe that great architecture should be both beautiful and functional, 
                  sustainable and innovative.
                </p>
                <p>
                  Today, we're proud to have completed over 500 projects across residential and 
                  commercial sectors, each one reflecting our commitment to quality, innovation, 
                  and client satisfaction.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/about-story.jpg"
                alt="Our office and team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Values</h2>
            <p className="text-xl text-primary-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-primary-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-primary-600">
              The talented professionals behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'Principal Architect',
                bio: 'Licensed architect with 20+ years experience in residential and commercial design.',
                image: '/team-1.jpg'
              },
              {
                name: 'Sarah Wilson',
                role: 'Construction Manager',
                bio: 'Expert project manager ensuring quality delivery on time and within budget.',
                image: '/team-2.jpg'
              },
              {
                name: 'Michael Brown',
                role: 'Design Director',
                bio: 'Creative visionary specializing in sustainable and innovative design solutions.',
                image: '/team-3.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{member.name}</h3>
                <p className="text-accent-600 font-medium mb-4">{member.role}</p>
                <p className="text-primary-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}