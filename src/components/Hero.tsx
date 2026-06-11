import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FractalGlassBackground from "./FractalGlassBackground";

// const stats = [
//   { value: "200+", label: "Projects Delivered" },
//   { value: "98%", label: "Client Satisfaction" },
//   { value: "50+", label: "Team Experts" },
//   { value: "4.9", label: "Average Rating" },
// ];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-40 overflow-hidden">
      <FractalGlassBackground />
      <div className="relative z-10 section-padding w-full pb-28 lg:pb-36">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-white/60 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Trusted by 200+ businesses worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Transform Your Digital
            <br />
            <span className="text-gradient">Presence Today</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            We craft data-driven digital strategies that elevate brands. From
            SEO and advertising to web and app development — we build what
            works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-semibold text-sm hover:scale-105 transition-all glow"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-xl glass text-white/80 font-semibold text-sm hover:bg-white/10 hover:text-white transition-all"
            >
              Explore Services
            </Link>
          </motion.div>

          {/*<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-5 glass-hover"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>*/}
        </div>
      </div>

      {/* Bottom bleed — carries the glass colors into the section below */}
      {/*<div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "140px",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,107,0,0.08) 25%, rgba(255,77,0,0.06) 40%, rgba(255,149,0,0.04) 55%, rgba(255,179,71,0.03) 70%, transparent 100%)",
          zIndex: 5,
        }}
      />*/}
    </section>
  );
}
