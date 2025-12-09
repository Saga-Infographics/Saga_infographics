import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'For early-stage teams validating ideas and launching fast.',
      features: [
        'Website (up to 6 pages)',
        'Foundational SEO setup',
        '2 social channels managed',
        'Monthly performance snapshot',
        'Email support',
        '2 revisions per month',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '$2,499',
      period: '/month',
      description: 'For scaling brands that need acquisition, automation, and speed.',
      features: [
        'Website (up to 12 pages)',
        'Advanced SEO optimization',
        '4 social channels managed',
        '8 content assets / month',
        'PPC campaign management',
        'Weekly analytics & CRO recs',
        'Priority support',
        'Automation setup & nurture',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For established teams demanding custom builds and full-funnel ownership.',
      features: [
        'Custom web app / portal',
        'Comprehensive SEO strategy',
        'Omnichannel social & community',
        '20+ premium content assets',
        'Multi-channel PPC & retargeting',
        'Real-time dashboards',
        '24/7 dedicated support',
        'Automation, CRM, and integrations',
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer: 'Absolutely. Upgrade or downgrade anytime—changes apply to the next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Major credit cards, bank transfer, and PayPal. Annual contracts can be invoiced.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees. Onboarding and launch support are included in every plan.',
    },
    {
      question: 'Can we request a custom mix of services?',
      answer: 'Yes. We frequently tailor mixes across plans—tell us your goals and we’ll scope it.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'If you’re not satisfied in the first 30 days, we’ll refund your plan—no hassle.',
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
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#FF6B00]/10 text-[#FF6B00] rounded-full px-4 py-2 text-sm font-semibold shadow-lg shadow-[#FF6B00]/5">
            Straightforward, no hidden fees
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FF6B00] leading-tight">
            Choose a plan that <span className="text-[#FF6B00]">moves you forward</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible engagement models built for speed, clarity, and measurable ROI.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F5F5F7]/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-gray-50/50 transition-all shadow-lg shadow-[#FF6B00]/5 hover:shadow-2xl ${
                  plan.popular ? 'border-[#FF6B00]/30 shadow-xl' : 'border-[#FF6B00]/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-transparent"></div>
                <div className="relative p-8 space-y-6">
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold text-[#FF6B00]">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-[#FF6B00]">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                            <span className="text-[#FF6B00]/90 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                          ? 'bg-[#FF6B00] text-white shadow-lg hover:shadow-2xl'
                        : 'border-2 border-[#FF6B00]/30 text-[#FF6B00] hover:bg-gradient-to-b from-white to-gray-50/50'
                        }`}
                  >
                    Get started
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 text-[#FF6B00] px-4 py-2 rounded-full text-sm font-semibold">
              FAQs
            </div>
            <h2 className="text-4xl font-bold text-[#FF6B00]">Answers to common questions</h2>
            <p className="text-lg text-gray-600">Clear, concise details so you can choose with confidence.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#FF6B00]/10 bg-gradient-to-b from-white to-gray-50/50 shadow-lg shadow-[#FF6B00]/5 hover:shadow-2xl shadow-[#FF6B00]/10 transition-all p-6"
              >
                <h3 className="text-lg font-semibold text-[#FF6B00] mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-[#FF6B00]/10 bg-gradient-to-r from-[#F5F5F7] via-white to-white shadow-xl">
          <div className="absolute -left-12 top-0 w-48 h-48 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute right-6 -bottom-10 w-52 h-52 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/20 rounded-full blur-3xl opacity-50"></div>

          <div className="relative px-8 py-14 text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00]/10 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all text-[#FF6B00] px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6B00]/5">
              Need something custom?
            </div>
            <h3 className="text-4xl font-bold text-[#FF6B00]">Let’s tailor a package for you</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Share your goals and constraints—we’ll build a bespoke engagement that fits perfectly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#FF6B00] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/60 shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Talk to our team
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="border-2 border-[#FF6B00]/30 text-[#FF6B00] px-8 py-4 rounded-2xl font-semibold hover:bg-gradient-to-b from-white to-gray-50/50 transition-all"
              >
                Explore services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






