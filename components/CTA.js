import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-white dark:bg-gray-600 transition-colors duration-300">   
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Let's discuss your vision and turn it into reality. Contact us today 
          for a free consultation and quote.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Get Free Quote */}
          <Link 
            href="/contact" 
            className="bg-accent-500 text-white hover:bg-accent-500 active:scale-95 active:bg-accent-500 hover:shadow-md px-8 py-4 rounded-lg font-semibold transition-all duration-150 ease-in-out"
          >
            Get Free Quote
          </Link>

          {/* View Portfolio */}
          <Link 
            href="/projects" 
            className="border-2 border-accent-500 text-accent-600 hover:bg-accent-600 hover:text-white active:scale-95 active:bg-accent-700 hover:shadow-md px-8 py-4 rounded-lg font-semibold transition-all duration-150 ease-in-out"
          >
            View Portfolio
          </Link>
        </div>

        {/* <div className="mt-12">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Why Choose Us?
          </h3>
          <p className="text-primary-600 mb-4">
            We are committed to delivering high-quality construction services that
            meet your needs and exceed your expectations.
          </p>
          <ul className="list-disc list-inside text-primary-600">
            <li>Experienced professionals</li>
            <li>Customized solutions</li>
            <li>Transparent pricing</li>
            <li>Timely project completion</li>
          </ul>
        </div> */}


      </div>
    </section>
  )
}


// min-h-screen pt-24 bg-white dark:bg-gray-900 transition-colors duration-300
// <section class="section-padding bg-white dark:bg-gray-800 transition-colors duration-300"><div class="container-custom"><div class="text-center mb-16"><h2 class="text-4xl font-bold text-primary-900 mb-4">Featured Projects</h2><p class="text-xl text-primary-600">Showcasing our latest architectural and construction achievements</p></div><div class="grid md:grid-cols-3 gap-8 mb-12"></div><div class="text-center"><a class="btn-primary" href="/projects">View All Projects</a></div></div></section>
// section-padding bg-primary-600
