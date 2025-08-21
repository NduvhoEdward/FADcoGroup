
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, User } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Modern Family Home Design',
      client: 'Christa Roos',
      location: 'Wilro Park, Roodepoort',
      service: 'House plan design and drawing',
      year: '2023',
      description: 'A beautiful modern family home featuring open-plan living spaces, contemporary design elements, and sustainable building practices.',
      image: '/projects/christa_roos.png',
      category: 'Residential'
    },
    {
      id: 2,
      title: 'Contemporary Soweto Residence',
      client: 'Vincent Khumalo',
      location: 'Glenvista, Soweto',
      service: 'House plan design and drawing',
      year: '2023',
      description: 'A stunning contemporary home that blends traditional African architectural elements with modern functionality.',
      image: '/projects/vincent_khumalo.png',
      category: 'Residential'
    },
    {
      id: 3,
      title: 'Luxury Johannesburg Villa',
      client: 'Lindiwe Buhlungu',
      location: 'Alveda Ext 2, Johannesburg',
      service: 'House plan design and drawing',
      year: '2023',
      description: 'An elegant villa design featuring spacious rooms, natural lighting, and premium finishes throughout.',
      image: '/projects/lindiwe_buhlungu.png',
      category: 'Residential'
    },
    {
      id: 4,
      title: 'Complete Home Build & Renovation',
      client: 'Lesley & Peter Edmonds',
      location: 'Naturena, Johannesburg',
      service: 'Building, Thatching, Tiling ceiling',
      year: '2022',
      description: 'A comprehensive construction project including traditional thatching, modern tiling, and complete interior finishing.',
      image: '/projects/lesley_peter_edmonds.png',
      category: 'Construction'
    },
    {
      id: 5,
      title: 'Luxury Fourways Development',
      client: 'Mark Maiden',
      location: 'Fourways, Johannesburg',
      service: 'Building & Designing',
      year: '2022',
      description: 'An upmarket residential development combining innovative design with premium construction standards.',
      image: '/projects/mark_maiden.png',
      category: 'Residential'
    },
    {
      id: 6,
      title: 'Innovative House Design',
      client: 'N.E. Ramashia',
      location: 'Johannesburg',
      service: 'House plan design and drawing',
      year: '2023',
      description: 'A thoughtfully designed home that exceeded client expectations with innovative spatial planning and beautiful aesthetics.',
      image: '/projects/ne_ramashia.png',
      category: 'Residential'
    },
    // {
    //   id: 7,
    //   title: 'Commercial Office Complex',
    //   client: 'Corporate Client',
    //   location: 'Sandton, Johannesburg',
    //   service: 'Architectural design and construction',
    //   year: '2023',
    //   description: 'A modern office complex designed for productivity and efficiency, featuring sustainable building practices.',
    //   image: '/projects/placeholder.png',
    //   category: 'Commercial'
    // },
    // {
    //   id: 8,
    //   title: 'Retail Space Development',
    //   client: 'Y.A. Moosa',
    //   location: 'Johannesburg CBD',
    //   service: 'Design and construction management',
    //   year: '2022',
    //   description: 'A contemporary retail space designed to maximize customer flow and create an engaging shopping experience.',
    //   image: '/projects/placeholder.png',
    //   category: 'Commercial'
    // },
    // {
    //   id: 9,
    //   title: 'Residential Extension Project',
    //   client: 'Private Homeowner',
    //   location: 'Roodepoort',
    //   service: 'Extension design and construction',
    //   year: '2023',
    //   description: 'A seamless home extension that added valuable living space while maintaining the original architectural integrity.',
    //   image: '/projects/placeholder.png',
    //   category: 'Renovation'
    // }
  ]

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-gray-800">
      {/* Hero Section */}
      <section className="section-padding bg-primary-50 dark:bg-gray-700">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-primary-700 dark:text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-primary-600 dark:text-gray-300 max-w-4xl mx-auto">
            Discover our portfolio of exceptional architectural designs and construction projects 
            across Gauteng and beyond. Each project represents our commitment to giving dreams 
            a shape of reality.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Project Image */}
                <div className="relative h-64 bg-primary-100 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-primary-600 dark:text-gray-300 text-sm">
                      <User size={16} className="mr-2" />
                      <span>Client: {project.client}</span>
                    </div>
                    <div className="flex items-center text-primary-600 dark:text-gray-300 text-sm">
                      <MapPin size={16} className="mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-primary-600 dark:text-gray-300 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <p className="text-primary-700 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-accent-600 dark:text-accent-400 font-medium text-sm">
                      Service: {project.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-50 dark:bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our satisfied clients and let us give your dreams a shape of reality. 
            Contact FADco today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Quote
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
