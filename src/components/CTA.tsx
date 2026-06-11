import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRightIcon, RocketIcon } from '@hugeicons/core-free-icons'

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="glass rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto gradient-border"
        >
          <span className="text-xs font-semibold tracking-widest text-saga-400 uppercase">Get Started</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-white">
            Ready to Transform Your{' '}
            <span className="text-gradient">Digital Presence?</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Join 200+ businesses that trust Saga to deliver measurable results. Let's build something extraordinary together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-saga-500 to-saga-600 text-white font-semibold text-sm hover:scale-105 transition-all glow"
            >
              <HugeiconsIcon icon={RocketIcon} size={16} />
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass text-white/80 font-semibold text-sm hover:bg-white/10 hover:text-white transition-all"
            >
              View Services
              <HugeiconsIcon icon={ArrowRightIcon} size={14} />
            </Link>
          </div>
          <p className="mt-6 text-white/30 text-xs">Free consultation · No commitment · 7-day trial on all plans</p>
        </motion.div>
      </div>
    </section>
  )
}
