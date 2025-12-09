import { Target, Eye, Heart, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-500">Saga Infographics</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with innovative digital solutions since 2015
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-500">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2015, Saga Infographics began with a simple mission: to help businesses
                  thrive in the digital age. What started as a small team of passionate developers
                  and marketers has grown into a full-service digital agency serving clients worldwide.
                </p>
                <p>
                  We believe that every business deserves access to world-class digital services.
                  Our approach combines cutting-edge technology with creative strategy to deliver
                  results that matter. From startups to established enterprises, we've helped
                  hundreds of businesses transform their digital presence.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses looking to grow,
                  innovate, and succeed in an increasingly digital world.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Office workspace"
                  className="rounded-lg shadow-lg mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Strategy meeting"
                  className="rounded-lg shadow-lg -mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Creative work"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth,
                enhance brand presence, and deliver measurable results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading digital agency known for transforming businesses through
                creativity, technology, and strategic innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellence, integrity, innovation, and client success drive everything we do.
                We're committed to building lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose <span className="text-orange-500">Us</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Expertise',
                description: 'Over 8 years of experience delivering exceptional digital solutions across industries.',
              },
              {
                icon: Users,
                title: 'Dedicated Team',
                description: '50+ experts passionate about helping your business succeed in the digital landscape.',
              },
              {
                icon: TrendingUp,
                title: 'Results-Driven',
                description: 'We focus on metrics that matter, delivering measurable ROI and business growth.',
              },
              {
                icon: Target,
                title: 'Strategic Approach',
                description: 'Data-driven strategies tailored to your unique business goals and challenges.',
              },
              {
                icon: Heart,
                title: 'Client-Centric',
                description: 'Your success is our success. We build long-term partnerships, not just projects.',
              },
              {
                icon: CheckCircle,
                title: 'Quality Assured',
                description: 'Rigorous quality control ensures every deliverable meets the highest standards.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-orange-200 transition-colors"
                >
                  <Icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-orange-500">Achievements</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-orange-50 mb-8 leading-relaxed">
            Let's create something amazing and take your business to the next level
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
