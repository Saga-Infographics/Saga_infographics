import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const plans = [
    {
      name: 'Basic',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started with digital services',
      features: [
        'Website Development (5 pages)',
        'Basic SEO Setup',
        'Social Media Management (2 platforms)',
        'Monthly Analytics Report',
        'Email Support',
        '2 Revisions per month',
      ],
      popular: false,
    },
    {
      name: 'Standard',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses ready to scale their digital presence',
      features: [
        'Website Development (10 pages)',
        'Advanced SEO Optimization',
        'Social Media Management (4 platforms)',
        'Content Creation (8 posts/month)',
        'PPC Campaign Management',
        'Weekly Analytics Reports',
        'Priority Email & Phone Support',
        'Unlimited Revisions',
        'Marketing Automation Setup',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$4,999',
      period: '/month',
      description: 'Complete digital transformation for established enterprises',
      features: [
        'Custom Web Application',
        'Comprehensive SEO Strategy',
        'Full Social Media Management (All platforms)',
        'Content Creation (20 posts/month)',
        'Multi-channel PPC Campaigns',
        'Video Production (2 per month)',
        'Real-time Analytics Dashboard',
        '24/7 Dedicated Support',
        'Unlimited Revisions',
        'Advanced Marketing Automation',
        'CRM Integration',
        'Dedicated Account Manager',
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="text-orange-500">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border-2 ${
                  plan.popular
                    ? 'border-orange-500 shadow-2xl relative scale-105'
                    : 'border-gray-200 shadow-lg'
                } bg-white transition-transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan later?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and PayPal. Custom payment arrangements are available for annual contracts.',
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees! All plans include onboarding and initial setup at no additional cost.',
              },
              {
                question: 'What if I need services from multiple plans?',
                answer: 'We offer custom packages tailored to your specific needs. Contact us to discuss a personalized solution.',
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our services. No questions asked.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-xl text-orange-50 mb-8 leading-relaxed">
            Let's create a tailored solution that perfectly fits your business requirements and budget
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Contact Us for Custom Pricing
          </button>
        </div>
      </section>
    </div>
  );
}
