import { ArrowRight, CheckCircle, Users, Award, Briefcase, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with{' '}
                <span className="text-orange-500">Smart Digital Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Elevate your brand with cutting-edge digital services. From web development to marketing automation, we deliver results that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                >
                  View Services
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-1">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-orange-500">500+</div>
                      <div className="text-sm text-gray-600 mt-2">Projects Completed</div>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-orange-500">200+</div>
                      <div className="text-sm text-gray-600 mt-2">Happy Clients</div>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-orange-500">50+</div>
                      <div className="text-sm text-gray-600 mt-2">Expert Team</div>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-orange-500">4.9</div>
                      <div className="text-sm text-gray-600 mt-2">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Expert Staff</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies for optimal performance.',
                icon: '🌐',
              },
              {
                title: 'SEO Optimization',
                description: 'Drive organic traffic and improve search rankings with data-driven SEO strategies.',
                icon: '🔍',
              },
              {
                title: 'Digital Marketing',
                description: 'Full-funnel marketing campaigns that convert prospects into loyal customers.',
                icon: '📱',
              },
              {
                title: 'Content Creation',
                description: 'Engaging content that tells your brand story and resonates with your audience.',
                icon: '✍️',
              },
              {
                title: 'Marketing Automation',
                description: 'Streamline your marketing workflows and nurture leads with intelligent automation.',
                icon: '⚡',
              },
              {
                title: 'Analytics & Reporting',
                description: 'Data-driven insights to measure performance and optimize your digital strategy.',
                icon: '📊',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-orange-200"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-orange-500 font-semibold hover:text-orange-600 flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-orange-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses we've helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Saga Infographics transformed our online presence. Within 3 months, our organic traffic increased by 150%. Their team truly understands digital marketing.",
                author: 'Sarah Johnson',
                role: 'CEO, TechStart Inc',
                rating: 5,
              },
              {
                quote: "The web application they built for us exceeded all expectations. Professional, responsive, and delivered on time. Highly recommend!",
                author: 'Michael Chen',
                role: 'Founder, GrowthLabs',
                rating: 5,
              },
              {
                quote: "Their marketing automation strategy saved us countless hours and improved our conversion rates by 200%. Best investment we've made.",
                author: 'Emily Rodriguez',
                role: 'Marketing Director, InnovateCo',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-orange-200 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-50 mb-8 leading-relaxed">
            Join 200+ successful businesses that trust us with their digital growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Get Started Today
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
