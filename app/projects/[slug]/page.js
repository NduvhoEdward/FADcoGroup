import { notFound } from 'next/navigation'
import Link from 'next/link' 
import Image from 'next/image'
import { getProject } from '@/lib/sanity'
import { Calendar, MapPin, Tag } from 'lucide-react'

export async function generateMetadata({ params }) {
  const project = await getProject(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.mainImage }],
    },
  }
}

export default async function ProjectDetail({ params }) {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[600px]">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Tag size={20} />
              <span>{project.category}</span>
            </div>
            {project.location && (
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{project.location}</span>
              </div>
            )}
            {project.completionDate && (
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{new Date(project.completionDate).getFullYear()}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-primary-600 mb-8">{project.description}</p>
              
              {project.content && (
                <div className="space-y-6">
                  {/* Render rich text content here */}
                  <p>Detailed project information and content would be rendered here from the CMS.</p>
                </div>
              )}
            </div>

            {/* Image Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-primary-900 mb-8">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-80 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-primary-50 rounded-lg p-8 sticky top-32">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-800">Category</h4>
                  <p className="text-primary-600">{project.category}</p>
                </div>
                
                {project.location && (
                  <div>
                    <h4 className="font-semibold text-primary-800">Location</h4>
                    <p className="text-primary-600">{project.location}</p>
                  </div>
                )}
                
                {project.completionDate && (
                  <div>
                    <h4 className="font-semibold text-primary-800">Completion Date</h4>
                    <p className="text-primary-600">
                      {new Date(project.completionDate).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-primary-200">
                <h4 className="font-semibold text-primary-800 mb-4">Interested in a similar project?</h4>
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}