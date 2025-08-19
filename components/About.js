import Link from 'next/link' 
import Image from 'next/image'

export default function About() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Architects of Innovation, Builders of Excellence
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                FADco is a proudly black-owned architectural and construction company based in 
                Brixton, Johannesburg. Founded and registered with the CIPC in 2020, we are 
                also a certified home builder registered with the NHBRC.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Despite facing significant challenges, including the COVID-19 pandemic and 
                economic uncertainty, FADco has successfully risen to become one of the most 
                recognized architectural and construction companies in South Africa.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                In just three years since our inception, we have managed to grow and expand 
                our services across Gauteng and surrounding provinces, delivering innovative 
                solutions that exceed our clients' expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
                <div className="text-2xl font-bold text-accent-500 mb-1">2020</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Founded</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
                <div className="text-2xl font-bold text-accent-500 mb-1">NHBRC</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certified</div>
              </div>
            </div>
            
            <Link href="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>
          
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/about-image.jpg"
                alt="FADco team at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500 rounded-lg opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-500 rounded-lg opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}