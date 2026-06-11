import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { ChartBreakoutCircleIcon, SeoIcon, AdvertisimentIcon, CodeIcon, SmartPhoneLandscapeIcon, ArrowRightIcon } from '@hugeicons/core-free-icons'

const services = [
  {
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that boost brand awareness, engagement, and conversions across all digital channels.',
    icon: ChartBreakoutCircleIcon,
  },
  {
    title: 'SEO Optimization',
    desc: 'Dominate search rankings with technical SEO, content strategy, and white-hat link building that drives organic growth.',
    icon: SeoIcon,
  },
  {
    title: 'Meta & Google Ads',
    desc: 'High-ROI paid campaigns on Meta and Google platforms with precise targeting, A/B testing, and real-time optimization.',
    icon: AdvertisimentIcon,
  },
  {
    title: 'Web Development',
    desc: 'Custom, responsive websites and web applications built with modern frameworks for speed, scalability, and stunning UX.',
    icon: CodeIcon,
  },
  {
    title: 'App Development',
    desc: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android ecosystems.',
    icon: SmartPhoneLandscapeIcon,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-saga-400 uppercase">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Full-Scale Digital{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            From strategy to execution, we deliver comprehensive digital solutions that drive measurable results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`glass rounded-2xl p-6 sm:p-8 glass-hover ${i === services.length - 1 && services.length % 3 !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-saga-500/10 text-saga-400 flex items-center justify-center mb-5">
                <HugeiconsIcon icon={service.icon} size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
          >
            View All Services
            <HugeiconsIcon icon={ArrowRightIcon} size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
