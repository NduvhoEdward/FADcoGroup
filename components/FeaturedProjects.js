'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { getProjects } from '@/lib/sanity'

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   getProjects(3).then(setProjects)
  // }, [])
  
  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-primary-600">
            Showcasing our latest architectural and construction achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project._id} className="group cursor-pointer">
              <Link href={`/projects/${project.slug}`}>
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.mainImage || '/placeholder-project.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-600 mb-2">{project.category}</p>
                <p className="text-primary-700 line-clamp-3">
                  {project.description}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
