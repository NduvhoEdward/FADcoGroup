import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Building
          <span className="block text-accent-500">Tomorrow</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Elite architecture and construction services that transform visions into reality. 
          From concept to completion, we deliver excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects" className="btn-primary text-lg px-8 py-4">
            View Projects
          </Link>
          <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
