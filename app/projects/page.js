'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { getProjects } from '@/lib/sanity'

// export const metadata = {
//   title: 'Projects',
//   description: 'Explore our portfolio of architectural and construction projects',
// }

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = ['all', 'residential', 'commercial', 'renovation']

  // useEffect(() => {
  //   getProjects().then((data) => {
  //     setProjects(data)
  //     setFilteredProjects(data)
  //   })
  // }, [])

  const handleFilter = (category) => {
    setActiveFilter(category)
    if (category === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(p => p.category.toLowerCase() === category))
    }
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-900 mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            A showcase of our architectural vision and construction excellence across 
            residential and commercial projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project._id} className="group">
              <Link href={`/projects/${project.slug}`}>
                <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.mainImage || '/placeholder-project.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-500 text-sm mb-2 uppercase tracking-wide">
                  {project.category}
                </p>
                <p className="text-primary-700 line-clamp-3">
                  {project.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
