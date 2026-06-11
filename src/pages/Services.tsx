import { motion } from 'framer-motion'
import CTA from '../components/CTA'

const allServices = [
  {
    title: 'Digital Marketing',
    tag: 'Growth',
    desc: 'Data-driven campaigns that boost brand awareness, engagement, and conversions across all digital channels. Our strategies are built on deep audience research and continuous optimization.',
    features: ['Social Media Management', 'Content Marketing', 'Email Campaigns', 'Influencer Marketing', 'Brand Strategy', 'Conversion Optimization'],
  },
  {
    title: 'SEO Optimization',
    tag: 'Visibility',
    desc: 'Dominate search rankings with technical SEO, content strategy, and white-hat link building that drives sustainable organic growth and qualified traffic to your website.',
    features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Link Building', 'Local SEO', 'SEO Content Strategy'],
  },
  {
    title: 'Meta & Google Ads',
    tag: 'Advertising',
    desc: 'High-ROI paid campaigns on Meta and Google platforms with precise audience targeting, compelling creative, A/B testing, and real-time bid optimization.',
    features: ['Facebook & Instagram Ads', 'Google Search Ads', 'Display Advertising', 'YouTube Advertising', 'Shopping Ads', 'Retargeting Campaigns'],
  },
  {
    title: 'Web Development',
    tag: 'Engineering',
    desc: 'Custom, responsive websites and web applications built with modern frameworks for exceptional speed, scalability, security, and user experience.',
    features: ['React/Next.js Development', 'E-commerce Solutions', 'CMS Development', 'API Integration', 'Performance Optimization', 'Ongoing Maintenance'],
  },
  {
    title: 'App Development',
    tag: 'Mobile',
    desc: 'Native and cross-platform mobile applications that deliver seamless, high-performance experiences across iOS and Android ecosystems.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'UI/UX Design', 'App Store Optimization'],
  },
]

export default function Services() {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-semibold tracking-widest text-saga-400 uppercase">Our Expertise</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
              Comprehensive Digital{' '}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-4 text-white/50 text-lg">
              Every service is designed to work together, creating a cohesive digital ecosystem for your brand.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {allServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="glass rounded-2xl p-6 sm:p-8 glass-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <div className="shrink-0">
                    <span className="text-[10px] font-semibold tracking-widest text-saga-400 uppercase">{service.tag}</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{service.title}</h2>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.features.map(f => (
                        <span key={f} className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
