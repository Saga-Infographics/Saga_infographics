import { motion } from 'framer-motion'
import { HugeiconsIcon } from '@hugeicons/react'
import { ChatIcon, StarIcon } from '@hugeicons/core-free-icons'

const testimonials = [
  {
    name: 'Sarah Collins',
    role: 'Operations Lead',
    company: 'Velocity Tech',
    quote: 'Saga completely transformed our digital presence. Their SEO strategy doubled our organic traffic in just 3 months. The team\'s expertise and dedication are unmatched.',
    rating: 5,
    initials: 'SC',
  },
  {
    name: 'David Chen',
    role: 'CEO',
    company: 'Innovate Labs',
    quote: 'The web development team delivered a stunning platform that exceeded our expectations. Our user engagement increased by 150% post-launch. Truly world-class service.',
    rating: 5,
    initials: 'DC',
  },
  {
    name: 'Olivia Turner',
    role: 'Marketing Director',
    company: 'GrowthFirst',
    quote: 'Their Google Ads campaigns delivered a 5x ROAS within the first month. The level of transparency and data-driven optimization is exactly what we needed.',
    rating: 5,
    initials: 'OT',
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder',
    company: 'Elevate Studios',
    quote: 'From branding to app development, Saga handled everything end-to-end. The result was a cohesive, powerful identity that truly represents our vision.',
    rating: 5,
    initials: 'MJ',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-saga-400 uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            What Our Clients{' '}
            <span className="text-gradient">Say</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Real results from real partnerships. Here is what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 glass-hover"
            >
              <div className="flex items-center gap-2 mb-4">
                <HugeiconsIcon icon={ChatIcon} size={16} className="text-saga-400 shrink-0" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, r) => (
                    <HugeiconsIcon key={r} icon={StarIcon} size={14} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-glass-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saga-400 to-saga-600 flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
