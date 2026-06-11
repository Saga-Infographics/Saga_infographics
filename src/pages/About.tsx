import { motion } from 'framer-motion'
import CTA from '../components/CTA'

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', initials: 'AR' },
  { name: 'Priya Sharma', role: 'CTO', initials: 'PS' },
  { name: 'James Mitchell', role: 'Head of Marketing', initials: 'JM' },
  { name: 'Lisa Chen', role: 'Lead Developer', initials: 'LC' },
  { name: 'Mohammed Ali', role: 'Design Director', initials: 'MA' },
  { name: 'Sarah Kim', role: 'SEO Lead', initials: 'SK' },
]

const values = [
  { title: 'Innovation', desc: 'We stay ahead of the curve, constantly exploring new technologies and strategies to give our clients a competitive edge.' },
  { title: 'Transparency', desc: 'No jargon, no hidden fees. We believe in open communication and honest reporting every step of the way.' },
  { title: 'Results-Driven', desc: 'Every strategy, every line of code, every campaign is measured against your business goals and KPIs.' },
  { title: 'Partnership', desc: 'We do not just work for you — we work with you. Your success is our success, and we are invested in your growth.' },
]

export default function About() {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-semibold tracking-widest text-saga-400 uppercase">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
              Our Mission is Your{' '}
              <span className="text-gradient">Growth</span>
            </h1>
            <p className="mt-4 text-white/50 text-lg">
              We are a team of strategists, developers, and creatives united by a single goal: building digital solutions that drive real business results.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 sm:p-10 gradient-border"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-white/50 text-sm leading-relaxed">
                <p>
                  Founded in 2020, Saga began as a small team of digital enthusiasts with a big vision. We saw how many businesses struggled to navigate the increasingly complex digital landscape — and we knew we could help.
                </p>
                <p>
                  What started as a boutique marketing agency quickly evolved into a full-service digital powerhouse. Today, we deliver everything from SEO and advertising to custom web and app development, serving over 200 clients across 12 countries.
                </p>
                <p>
                  Our growth has been driven by a simple philosophy: put the client first, measure everything, and never stop innovating. It is a philosophy that has earned us a 4.9-star rating and the trust of brands worldwide.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-center text-white mb-10"
            >
              Our Core{' '}
              <span className="text-gradient">Values</span>
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 glass-hover"
                >
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-center text-white mb-10"
            >
              Meet the{' '}
              <span className="text-gradient">Team</span>
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl p-6 text-center glass-hover"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-saga-400 to-saga-600 flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                    {member.initials}
                  </div>
                  <div className="text-white text-sm font-medium">{member.name}</div>
                  <div className="text-white/40 text-xs mt-1">{member.role}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
