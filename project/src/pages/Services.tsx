import { Search, Code, TrendingUp, FileText, Zap, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies.',
      features: [
        'Responsive Design',
        'Modern Frameworks (React, Vue, Next.js)',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
        'Performance Optimization',
      ],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Drive organic traffic and improve search rankings with proven strategies.',
      features: [
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Technical SEO Audits',
        'Link Building',
        'Local SEO',
        'SEO Analytics & Reporting',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing campaigns that deliver measurable results.',
      features: [
        'Social Media Marketing',
        'PPC Advertising',
        'Email Marketing',
        'Conversion Rate Optimization',
        'Brand Strategy',
        'Marketing Analytics',
      ],
    },
    {
      icon: FileText,
      title: 'Content Creation',
      description: 'Engaging content that resonates with your audience and drives action.',
      features: [
        'Blog Writing',
        'Copywriting',
        'Video Production',
        'Infographic Design',
        'Social Media Content',
        'Content Strategy',
      ],
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Streamline workflows and nurture leads with intelligent automation.',
      features: [
        'Email Automation',
        'Lead Scoring',
        'CRM Integration',
        'Workflow Design',
        'Customer Journey Mapping',
        'A/B Testing',
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your digital strategy.',
      features: [
        'Google Analytics Setup',
        'Custom Dashboards',
        'Performance Tracking',
        'ROI Analysis',
        'Competitor Analysis',
        'Monthly Reports',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to help your business thrive in the modern marketplace
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-12 flex items-center justify-center">
                    <Icon className="w-32 h-32 text-orange-500" strokeWidth={1.5} />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Service {index + 1}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 group"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our services to meet your specific needs.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
