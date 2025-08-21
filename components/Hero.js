
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Modern architecture by FADco"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-500/10 rounded-full animate-bounce-subtle"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-accent-500/10 rounded-full animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom animate-fade-in px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Giving Your Dreams</span>
            <span className="block text-accent-500 animate-slide-up mt-2">A Shape of Reality</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-gray-200">
            Architects of innovation, builders of excellence
          </p>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            From architectural designs to complete construction - we transform visions into reality with precision, creativity, and unwavering commitment to quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-block">
              View Our Projects
            </Link>
            <Link href="/contact" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-block">
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-500 mb-2">5+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-500 mb-2">100+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-500 mb-2">100%</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-500 mb-2">24/7</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}