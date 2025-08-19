import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-primary-600">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Let's discuss your vision and turn it into reality. Contact us today 
          for a free consultation and quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-colors">
            Get Free Quote
          </Link>
          <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}