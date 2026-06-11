import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What services does Saga offer?',
    a: 'We provide end-to-end digital solutions including Digital Marketing, SEO Optimization, Meta & Google Advertising, Web Development, and App Development. Every service is tailored to your business goals.',
  },
  {
    q: 'How long does it take to see results from SEO?',
    a: 'SEO is a long-term strategy. Most clients start seeing meaningful improvements in 3-6 months, with significant growth by month 9-12. We provide monthly reports so you can track progress every step of the way.',
  },
  {
    q: 'Do you work with startups or only enterprise clients?',
    a: 'We work with businesses of all sizes — from early-stage startups to established enterprises. Our Starter plan is specifically designed for startups with lean budgets who still want professional-grade digital services.',
  },
  {
    q: 'What platforms do you advertise on?',
    a: 'We specialize in Meta (Facebook & Instagram) Ads and Google Ads (Search, Display, YouTube, and Shopping). We also offer LinkedIn Ads for B2B campaigns upon request.',
  },
  {
    q: 'Can you revamp an existing website?',
    a: 'Absolutely. We specialize in redesigning and modernizing existing websites. We audit your current site, identify improvements, and rebuild it with modern frameworks for better performance and user experience.',
  },
  {
    q: 'What is your onboarding process like?',
    a: 'We start with a deep-dive discovery call to understand your business, goals, and audience. Then we create a tailored strategy, present it for your feedback, and once approved, our team gets to work immediately.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-saga-400 uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-white/80 text-sm sm:text-base font-medium pr-4">{faq.q}</span>
                <motion.svg
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4 text-white/40 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/40 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
