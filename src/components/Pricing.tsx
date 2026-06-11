import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircleIcon } from "@hugeicons/core-free-icons";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for startups looking to establish their digital footprint.",
    price: "Rs. 9,999",
    period: "/month",
    features: [
      "Digital Marketing Strategy",
      "Basic SEO Audit",
      "Social Media Management",
      "Monthly Performance Report",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    desc: "Ideal for growing businesses ready to scale their online presence.",
    price: "Rs. 24,999",
    period: "/month",
    features: [
      "Everything in Starter +",
      "Advanced SEO + Content",
      "Meta & Google Ads Management",
      "Website Optimization",
      "Dedicated Account Manager",
      "Priority Support",
      "Bi-weekly Strategy Calls",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "For organizations demanding custom solutions at scale.",
    price: "Rs.49,999",
    period: "/month",
    features: [
      "Everything in Growth +",
      "Full Web Development",
      "App Development",
      "Custom Integrations",
      "Advanced Analytics",
      "SAML SSO",
      "24/7 Priority Support",
      "Dedicated Team",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-saga-400 uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Flexible plans designed to grow with your business. No hidden fees,
            no surprises.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={`text-sm ${!annual ? "text-white" : "text-white/40"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-saga-500" : "bg-white/20"}`}
          >
            <motion.div
              animate={{ x: annual ? 24 : 2 }}
              className="absolute top-1 w-4 h-4 rounded-full bg-white"
            />
          </button>
          <span
            className={`text-sm ${annual ? "text-white" : "text-white/40"}`}
          >
            Annual <span className="text-green-400 text-xs">Save 20%</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 ${
                plan.popular ? "gradient-border bg-saga-500/5" : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-saga-400 to-saga-600 text-white text-[10px] font-semibold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <div className="text-lg font-semibold text-white mb-1">
                {plan.name}
              </div>
              <div className="text-white/40 text-sm mb-5">{plan.desc}</div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  {annual
                    ? `$${Math.round(parseInt(plan.price.replace(/[$,]/g, "")) * 0.8 * 12).toLocaleString()}`
                    : plan.price}
                </span>
                <span className="text-white/40 text-sm">
                  {annual ? "/year" : plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <HugeiconsIcon
                      icon={CheckmarkCircleIcon}
                      size={16}
                      className="text-saga-400 mt-0.5 shrink-0"
                    />
                    <span className="text-white/60">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-saga-500 to-saga-600 text-white hover:scale-105 glow-sm"
                    : "glass text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
