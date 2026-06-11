import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  Call02Icon,
  ArrowRightIcon,
} from "@hugeicons/core-free-icons";

const contactMethods = [
  {
    title: "Email Us",
    value: "info@saga.com.np",
    action: "Send Email",
    href: "mailto:hello@saga.com",
    icon: Mail01Icon,
  },
  {
    title: "Call Us",
    value: "+977-9860099869",
    action: "Make a Call",
    href: "tel:+977-9860099869",
    icon: Call02Icon,
  },
  // {
  //   title: 'Visit Us',
  //   value: 'San Francisco, CA',
  //   action: 'Get Directions',
  //   href: 'https://maps.google.com',
  //   icon: Location01Icon,
  // },
];

export default function Contact() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-saga-400 uppercase">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h1>
          <p className="mt-4 text-white/50 text-lg">
            Ready to take your digital presence to the next level? Tell us about
            your project and let's make it happen.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-5 glass-hover"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-saga-500/10 text-saga-400 flex items-center justify-center">
                    <HugeiconsIcon icon={method.icon} size={20} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">
                      {method.title}
                    </div>
                    <div className="text-white/40 text-xs">{method.value}</div>
                  </div>
                </div>
                <a
                  href={method.href}
                  className="inline-flex items-center gap-1 text-saga-400 text-xs font-medium hover:text-saga-300 transition-colors mt-2"
                  target={method.title === "Visit Us" ? "_blank" : undefined}
                  rel={
                    method.title === "Visit Us"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {method.action}
                  <HugeiconsIcon icon={ArrowRightIcon} size={12} />
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              className="glass rounded-2xl p-6 sm:p-8 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-saga-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@saga.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-saga-500/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/60 text-xs font-medium mb-2 block">
                  Service Interested In
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-saga-500/50 transition-colors appearance-none">
                  <option value="" className="bg-surface">
                    Select a service
                  </option>
                  <option value="digital-marketing" className="bg-surface">
                    Digital Marketing
                  </option>
                  <option value="seo" className="bg-surface">
                    SEO Optimization
                  </option>
                  <option value="ads" className="bg-surface">
                    Meta & Google Ads
                  </option>
                  <option value="web" className="bg-surface">
                    Web Development
                  </option>
                  <option value="app" className="bg-surface">
                    App Development
                  </option>
                  <option value="other" className="bg-surface">
                    Other
                  </option>
                </select>
              </div>
              {/*<div>
                <label className="text-white/60 text-xs font-medium mb-2 block">
                  Budget Range
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-saga-500/50 transition-colors appearance-none">
                  <option value="" className="bg-surface">
                    Select a range
                  </option>
                  <option value="<5k" className="bg-surface">
                    Under $5,000
                  </option>
                  <option value="5k-15k" className="bg-surface">
                    $5,000 - $15,000
                  </option>
                  <option value="15k-50k" className="bg-surface">
                    $15,000 - $50,000
                  </option>
                  <option value="50k+" className="bg-surface">
                    $50,000+
                  </option>
                </select>
              </div>*/}
              <div>
                <label className="text-white/60 text-xs font-medium mb-2 block">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-saga-500/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-saga-500 to-saga-600 text-white font-semibold text-sm hover:scale-[1.02] transition-all glow-sm"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
