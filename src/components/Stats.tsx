import { motion } from 'framer-motion'

const stats = [
  { value: '200+', label: 'Projects Delivered', suffix: 'Happy clients worldwide' },
  { value: '98%', label: 'Client Satisfaction', suffix: 'Based on post-project surveys' },
  { value: '50+', label: 'Team Experts', suffix: 'Across 4 countries' },
  { value: '4.9', label: 'Average Rating', suffix: 'On Clutch & Google' },
]

const metrics = [
  { value: '10x', label: 'Revenue Boost', sub: 'Average client increase' },
  { value: '3x', label: 'Traffic Growth', sub: 'Organic search improvement' },
  { value: '60%', label: 'Cost Reduction', sub: 'Through optimized campaigns' },
  { value: '24/7', label: 'Support', sub: 'Dedicated account managers' },
]

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="glass rounded-3xl p-8 sm:p-12 lg:p-16 gradient-border"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 lg:mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">{stat.value}</div>
                <div className="text-white/70 text-sm font-medium mt-2">{stat.label}</div>
                <div className="text-white/30 text-xs mt-1">{stat.suffix}</div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-glass-border pt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center glass-hover"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">{m.value}</div>
                  <div className="text-white/60 text-sm font-medium mt-1">{m.label}</div>
                  <div className="text-white/30 text-xs mt-1">{m.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
