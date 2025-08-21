'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Lesley and Peter Edmonds",
      location: "Naturema, Johannesburg",
      content: "I have been using Simon and his team for a while now. He has done numerous projects for me and is, in fact, starting another one next week. I have found Simon and his staff honest, reliable obliging and courteous. Their work is impeccable and they clean up very well when they are finished.",
      rating: 5
    },
    {
      name: "Y.A. Moosa",
      location: "Johannesburg",
      content: "Service to perfection, why goods was delivered on time, I would recommend FADco to all.",
      rating: 5
    },
    {
      name: "Christa Roos",
      location: "Wilro Park, Roodepoort",
      content: "Excellent service, always ready to assist.",
      rating: 5
    },
    {
      name: "Nkhumbudzeni",
      location: "Johannesburg",
      content: "The performance by FADco has been outstanding in every regard. I appreciate the professionalism and sensitivity of the guys to our needs. The design capabilities of the company is on another level. It's been a pleasure working with FADco. It's definitely the best in town.",
      rating: 5
    },
    {
      name: "N.E. Ramashia",
      location: "Johannesburg",
      content: "They provided me with a house plan, a very well thought out and beautiful plan. Also the plan had an even better design than what I had in mind. On top of that, everything was delivered in time; such good service.",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real testimonials from our satisfied clients across Johannesburg and Gauteng
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 relative border border-gray-100 dark:border-gray-700">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-accent-500 hover:text-white transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400 group-hover:text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-accent-500 hover:text-white transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-gray-600 dark:text-gray-400 group-hover:text-white" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-8">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-accent-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-accent-500 font-medium">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-accent-500 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-accent-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-accent-500 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-accent-500 mb-2">SACAP</div>
              <div className="text-gray-600 dark:text-gray-400">Registered Professionals</div>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-accent-500 mb-2">NHBRC</div>
              <div className="text-gray-600 dark:text-gray-400">Certified Builder</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-accent-500 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}