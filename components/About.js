import Link from 'next/link' 
import Image from 'next/image'

export default function About() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Creating Spaces That Inspire
            </h2>
            <p className="text-lg text-primary-700 mb-6">
              With over 15 years of experience in architecture and construction, 
              we bring together innovative design and superior craftsmanship to 
              create spaces that not only meet your needs but exceed your expectations.
            </p>
            <p className="text-lg text-primary-700 mb-8">
              Our integrated approach combines architectural vision with construction 
              expertise, ensuring seamless project delivery from initial concept 
              through final handover.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/about-image.jpg"
              alt="Our team at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
