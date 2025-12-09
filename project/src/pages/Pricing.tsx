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
    <div className="bg-[#001F3F] overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#FF7A00]/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-12 right-8 w-72 h-72 bg-[#FF7A00]/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-[-80px] left-1/2 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#001F3F]/80 border border-[#FF7A00]/10 text-[#FF7A00] rounded-full px-4 py-2 text-sm font-semibold shadow-sm">
            Straightforward, no hidden fees
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Choose a plan that <span className="text-[#FF7A00]">moves you forward</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Flexible engagement models built for speed, clarity, and measurable ROI.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F2F2F2]/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl border bg-[#001F3F] transition-all shadow-sm hover:shadow-2xl ${
                  plan.popular ? 'border-[#FF7A00]/30 shadow-xl' : 'border-[#FF7A00]/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 to-transparent"></div>
                <div className="relative p-8 space-y-6">
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-[#FF7A00] text-white shadow-lg hover:shadow-xl'
                        : 'border-2 border-[#FF7A00]/20 text-[#FF7A00] hover:bg-[#FAFAFA]'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#001F3F]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-full text-sm font-semibold">
              FAQs
            </div>
            <h2 className="text-4xl font-bold text-white">Answers to common questions</h2>
            <p className="text-lg text-gray-300">Clear, concise details so you can choose with confidence.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#FF7A00]/10 bg-[#001F3F] shadow-sm hover:shadow-md transition-all p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-[#FF7A00]/10 bg-gradient-to-r from-[#F2F2F2] via-white to-white shadow-xl">
          <div className="absolute -left-12 top-0 w-48 h-48 bg-[#FF7A00]/10 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute right-6 -bottom-10 w-52 h-52 bg-[#FF7A00]/20 rounded-full blur-3xl opacity-50"></div>

          <div className="relative px-8 py-14 text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#001F3F]/70 border border-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              Need something custom?
            </div>
            <h3 className="text-4xl font-bold text-white">Let’s tailor a package for you</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Share your goals and constraints—we’ll build a bespoke engagement that fits perfectly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#FF7A00] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Talk to our team
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="border-2 border-[#FF7A00]/20 text-[#FF7A00] px-8 py-4 rounded-xl font-semibold hover:bg-[#FAFAFA] transition-all"
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





