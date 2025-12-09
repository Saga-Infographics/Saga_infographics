import { ArrowRight, CheckCircle, Users, Award, Briefcase, Star, Zap, TrendingUp, Sparkles, Code, Search, BarChart3 } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-semibold text-orange-300">Next Generation Digital Solutions</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                Transform Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Business Today</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
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
                  className="group border-2 border-orange-500/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-orange-400 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:border-orange-500/30 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">500+</div>
                  <div className="text-xs text-slate-400 mt-1">Projects Completed</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:border-orange-500/30 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">200+</div>
                  <div className="text-xs text-slate-400 mt-1">Happy Clients</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:border-orange-500/30 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">4.9★</div>
                  <div className="text-xs text-slate-400 mt-1">Client Rating</div>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Card */}
            <div className="hidden md:block relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-3xl transform rotate-6 scale-105 opacity-20 filter blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-orange-500/20 p-8 shadow-2xl backdrop-blur-sm overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                  
                  <div className="relative space-y-6">
                    {[
                      { title: 'Web Development', icon: Code },
                      { title: 'SEO Optimization', icon: Search },
                      { title: 'Analytics', icon: BarChart3 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">{item.title}</div>
                          <div className="text-sm text-slate-400">Expert solutions</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 ml-auto group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Expertise</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Comprehensive <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                className="group relative bg-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('services')}
                    className="text-orange-400 font-semibold hover:text-orange-300 flex items-center gap-2 group/btn"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto">
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
              className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-200 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
