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
    <div className="bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-12 right-8 w-72 h-72 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-[-80px] left-1/2 w-96 h-96 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all text-[#FF6B00] rounded-full px-4 py-2 text-sm font-semibold shadow-lg shadow-[#FF6B00]/5">
            Full-stack digital services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FF6B00] leading-tight">
            Services designed to <span className="text-[#FF6B00]">ship and scale</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cross-functional teams that blend strategy, design, and engineering to deliver premium outcomes.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-[#FF6B00]/10 bg-gradient-to-b from-white to-gray-50/50 shadow-lg shadow-[#FF6B00]/5 hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/6 to-transparent"></div>
                  <div className="relative p-7 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF6B00] text-[#FF6B00] flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-[#FF6B00] bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 px-3 py-1 rounded-full">Premium</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-[#FF6B00]">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-2 text-[#FF6B00] font-semibold group-hover:text-[#FF6B00] transition-all"
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
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-[#FF6B00]/10 bg-gradient-to-b from-white to-gray-50/50 shadow-xl">
          <div className="absolute -left-12 top-0 w-48 h-48 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute right-6 -bottom-10 w-52 h-52 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/20 rounded-full blur-3xl opacity-50"></div>

          <div className="relative px-8 py-14 text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all text-[#FF6B00] px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6B00]/5">
              Let’s map your roadmap
            </div>
            <h3 className="text-4xl font-bold text-[#FF6B00]">Need a custom blend of services?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us your goals, and we’ll assemble the right team, scope, and timeline to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#FF6B00] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/60 shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Schedule a consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="border-2 border-[#FF6B00]/30 text-[#FF6B00] px-8 py-4 rounded-2xl font-semibold hover:bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/5 transition-all"
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






