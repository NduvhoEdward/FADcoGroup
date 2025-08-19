import Image from 'next/image'
import { Users, Award, Clock, CheckCircle, Target, Eye, Heart, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description: 'Learn about FADco - Fiya Architectural Designs and Construction. Our story, values, and commitment to giving your dreams a shape of reality.',
}

export default function About() {
  const stats = [
    { icon: Users, number: '100+', label: 'Projects Completed' },
    { icon: Award, number: '3+', label: 'Years Experience' },
    { icon: Clock, number: '100%', label: 'On-Time Delivery' },
    { icon: CheckCircle, number: 'NHBRC', label: 'Certified Builder' },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices in every interaction with our clients.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Our collaborative approach ensures seamless coordination between design and construction teams for optimal results.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge design and construction technologies to deliver exceptional and modern solutions.'
    },
    {
      icon: Target,
      title: 'Commitment to Excellence',
      description: 'We never compromise on quality, striving for perfection in every project we undertake.'
    }
  ]

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About FADco
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Giving your dreams a shape of reality through innovative architectural design 
              and superior construction craftsmanship since 2020.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <stat.icon size={48} className="text-accent-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  Founded in 2020, FADco (Fiya Architectural Designs and Construction) is a 
                  proudly black-owned architectural and construction company based in Brixton, 
                  Johannesburg. We are registered with the CIPC and certified as home builders 
                  with the NHBRC.
                </p>
                <p>
                  Despite facing significant challenges, including the COVID-19 pandemic and 
                  economic uncertainty, FADco has successfully risen to become one of the most 
                  recognized architectural and construction companies in South Africa.
                </p>
                <p>
                  In just three years since our inception, we have managed to grow and expand 
                  our services across Gauteng and surrounding provinces, delivering exceptional 
                  results that exceed our clients' expectations through innovation and dedication.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/about-story.jpg"
                  alt="FADco office and team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-500/30 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <Target size={64} className="text-accent-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To be the company that provides the best architectural designs and drawings, 
                builds a relationship of trust and reliability with clients, and constructs 
                the strongest modern structures of all shapes, sizes and heights.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <Eye size={64} className="text-accent-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Giving our nation a chance to experience the world of possibilities, putting 
                on ground any/every structure ever dreamt of, providing a challenge to the 
                construction industry, and building structures that add market value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <value.icon size={40} className="text-accent-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-accent-500/5 dark:bg-accent-500/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Philosophy</h2>
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                At FADco, we believe in delivering exceptional results for our clients. We prioritize 
                open communication and transparency throughout the design and construction process, 
                ensuring that our clients are always informed and involved.
              </p>
              <p>
                We use the latest technology and best practices to deliver innovative solutions that 
                meet our clients' needs and exceed their expectations. Our commitment to sustainability 
                is evident in every project we undertake, as we work to minimize the impact of our 
                projects on the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Dedicated professionals committed to excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Experienced Leadership
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our team is dedicated to delivering high-quality services that meet and exceed 
                our clients' expectations. Led by our seasoned leader with years of experience 
                in the field, our employees are dedicated and hardworking, serving at their level 
                best with excellent time management and understanding.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We keep in touch with our clients, making sure they are guided and informed of 
                all the services they require. We are proud to have served so many happy clients 
                who rate our products highly and keep recommending us to new clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}