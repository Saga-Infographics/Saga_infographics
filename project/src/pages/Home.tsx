import { ArrowRight, CheckCircle, Users, Award, Briefcase, Star, Zap, TrendingUp, Sparkles, Code, Search, BarChart3 } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Soft Gradient */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-700 border border-orange-200 rounded-full px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold">Next Generation Digital Solutions</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Business Today</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Leverage cutting-edge digital solutions to accelerate growth, engage customers, and stay ahead of competition. We deliver results that matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="group border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-white border border-orange-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-colors">
                  <div className="text-2xl font-bold text-orange-500">500+</div>
                  <div className="text-xs text-gray-500 mt-1">Projects Completed</div>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-colors">
                  <div className="text-2xl font-bold text-orange-500">200+</div>
                  <div className="text-xs text-gray-500 mt-1">Happy Clients</div>
                </div>
                <div className="bg-white border border-orange-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-colors">
                  <div className="text-2xl font-bold text-orange-500">4.9★</div>
                  <div className="text-xs text-gray-500 mt-1">Client Rating</div>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Card */}
            <div className="hidden md:block relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-orange-100 rounded-3xl transform rotate-6 scale-105 opacity-40 filter blur-3xl"></div>
                <div className="relative bg-white rounded-3xl border border-orange-100 p-8 shadow-xl overflow-hidden">
                  <div className="relative space-y-6">
                    {[
                      { title: 'Web Development', icon: Code },
                      { title: 'SEO Optimization', icon: Search },
                      { title: 'Analytics', icon: BarChart3 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-gray-900 font-semibold group-hover:text-orange-500 transition-colors">{item.title}</div>
                          <div className="text-sm text-gray-500">Expert solutions</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50/40 to-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Expertise</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end digital solutions designed to accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies for optimal performance.',
                features: ['Responsive Design', 'React & Next.js', 'E-commerce'],
              },
              {
                icon: Search,
                title: 'SEO Optimization',
                description: 'Drive organic traffic and improve search rankings with data-driven SEO strategies.',
                features: ['Keyword Research', 'Technical SEO', 'Link Building'],
              },
              {
                icon: TrendingUp,
                title: 'Digital Marketing',
                description: 'Full-funnel marketing campaigns that convert prospects into loyal customers.',
                features: ['Social Media', 'PPC Ads', 'Email Marketing'],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('services')}
                    className="text-orange-600 font-semibold hover:text-orange-500 flex items-center gap-2 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">Success Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses we've transformed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Saga Infographics transformed our online presence. Within 3 months, our organic traffic increased by 150%.",
                author: 'Sarah Johnson',
                role: 'CEO, TechStart Inc',
                rating: 5,
                image: '👩‍💼',
              },
              {
                quote: "The web application they built exceeded all expectations. Professional, responsive, and delivered on time.",
                author: 'Michael Chen',
                role: 'Founder, GrowthLabs',
                rating: 5,
                image: '👨‍💼',
              },
              {
                quote: "Their marketing automation strategy saved us countless hours and improved our conversion rates by 200%.",
                author: 'Emily Rodriguez',
                role: 'Marketing Director, InnovateCo',
                rating: 5,
                image: '👩‍💻',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:border-orange-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-2"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl shadow-md">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-white to-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join 200+ successful businesses that trust us with their digital growth. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('contact')}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="group border-2 border-orange-500 text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}