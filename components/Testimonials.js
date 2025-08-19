'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Elite A&C transformed our vision into reality. Their attention to detail and professional approach made the entire process seamless. We couldn't be happier with our new home.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "The commercial building they designed and built for our company exceeded all expectations. The project was completed on time and within budget. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Property Developer",
      content: "Working with Elite A&C on multiple projects has been a pleasure. Their innovative designs and quality construction have helped us achieve great success in the market.",
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
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-primary-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
            >
              <ChevronLeft size={24} className="text-primary-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
            >
              <ChevronRight size={24} className="text-primary-600" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-accent-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-primary-700 mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div>
                <h4 className="text-lg font-semibold text-primary-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-primary-600">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-accent-500' : 'bg-primary-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
