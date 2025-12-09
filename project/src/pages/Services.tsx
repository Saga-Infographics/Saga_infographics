import { Search, Code, TrendingUp, FileText, Zap, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and applications engineered for speed, scalability, and elegance.',
      features: [
        'Responsive UX/UI systems',
        'Modern frameworks (React, Next.js)',
        'E-commerce & subscriptions',
        'Headless CMS builds',
        'API design & integrations',
        'Performance & accessibility baselines',
      ],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Organic growth powered by technical rigor, smart content, and authority building.',
      features: [
        'Technical SEO audits',
        'Information architecture',
        'On-page & schema rollout',
        'Content strategy & briefs',
        'Backlink outreach',
        'Analytics & ranking reports',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Full-funnel acquisition and retention programs grounded in experimentation.',
      features: [
        'Paid search & social',
        'Lifecycle email & SMS',
        'Conversion rate optimization',
        'Landing page experiments',
        'Brand & campaign strategy',
        'Attribution & lift measurement',
      ],
    },
    {
      icon: FileText,
      title: 'Content Creation',
      description: 'Narratives that resonate—crafted by writers, designers, and videographers.',
      features: [
        'Thought leadership & blogs',
        'Conversion copywriting',
        'Video & motion snippets',
        'Infographics & social kits',
        'Content calendars',
        'Voice & tone systems',
      ],
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Intelligent journeys that nurture, qualify, and convert at scale.',
      features: [
        'CRM & CDP integration',
        'Lead scoring & routing',
        'Drip & behavior triggers',
        'Playbooks & workflows',
        'A/B and multivariate testing',
        'RevOps analytics',
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Clear dashboards and insight loops that inform every move you make.',
      features: [
        'GA4 & tag management',
        'Custom dashboards',
        'KPI frameworks',
        'Funnel & cohort analysis',
        'Forecasting & modeling',
        'Executive reporting',
      ],
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-12 right-8 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-[-80px] left-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-orange-100 text-orange-700 rounded-full px-4 py-2 text-sm font-semibold shadow-sm">
            Full-stack digital services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Services designed to <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">ship and scale</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cross-functional teams that blend strategy, design, and engineering to deliver premium outcomes.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-orange-100 bg-white shadow-sm hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/6 to-transparent"></div>
                  <div className="relative p-7 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">Premium</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:text-orange-700 transition-all"
                    >
                      Book a call
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-r from-orange-50 via-white to-white shadow-xl">
          <div className="absolute -left-12 top-0 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute right-6 -bottom-10 w-52 h-52 bg-orange-200 rounded-full blur-3xl opacity-50"></div>

          <div className="relative px-8 py-14 text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/70 border border-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              Let’s map your roadmap
            </div>
            <h3 className="text-4xl font-bold text-gray-900">Need a custom blend of services?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us your goals, and we’ll assemble the right team, scope, and timeline to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Schedule a consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="border-2 border-orange-200 text-orange-700 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all"
              >
                View pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
