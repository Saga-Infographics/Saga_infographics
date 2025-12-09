import { Target, Eye, Heart, Award, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-24 w-72 h-72 bg-[#FF6B00]/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute right-10 top-10 w-64 h-64 bg-[#FF6B00]/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-[-80px] left-1/3 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-[#FF6B00]/10 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all text-[#FF6B00] rounded-full px-5 py-2 shadow-lg shadow-[#FF6B00]/5">
            <span className="text-sm font-semibold">Since 2015</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]"></span>
            <span className="text-sm font-semibold">Global digital partner</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FF6B00] leading-tight">
            About <span className="text-[#FF6B00]">Saga Infographics</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We craft human-centered digital experiences that elevate brands and drive measurable growth for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="group relative bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/60 transition-all transform hover:scale-105 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative">Talk with us</span>
              <ArrowRight className="relative w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 text-[#FF6B00] bg-[#FF6B00]/10 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all rounded-full px-5 py-3 shadow-lg shadow-[#FF6B00]/5">
              <CheckCircle className="w-5 h-5 text-[#FF6B00]" />
              <span className="text-sm font-semibold">Trusted by 200+ clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00]/10 to-[#FF8C00]/10 text-[#FF6B00] px-4 py-2 rounded-full text-sm font-bold border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all">
              Our story
            </div>
            <h2 className="text-4xl font-bold text-[#FF6B00] leading-tight">
              Built on strategy, design, and technology working in harmony
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed bg-gradient-to-b from-white to-gray-50/50 border border-[#FF6B00]/10 rounded-2xl p-6 shadow-lg shadow-[#FF6B00]/5">
              <p>
                Born in 2015, we started as a small crew of designers, engineers, and strategists obsessed with digital craft. Today we partner with ambitious brands worldwide to ship products and campaigns that win.
              </p>
              <p>
                Our playbook blends deep discovery, bold creative, and robust engineering. Whether it is launching a flagship site, scaling an e-commerce engine, or tuning conversion funnels—we focus on impact.
              </p>
              <p>
                The result: experiences that feel premium, move fast, and stay flexible as you grow.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#FF6B00]/20/50 to-[#FF6B00]/10/40 blur-3xl rounded-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4 bg-[#FFFFFF] border border-[#FF6B00]/10 rounded-3xl p-4 shadow-xl">
              {[
                'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
              ].map((src, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl shadow-xl shadow-[#FF6B00]/10 group relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={src} alt="Team" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F5F5F7]/40 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all text-[#FF6B00] px-4 py-2 rounded-full shadow-lg shadow-[#FF6B00]/5 text-sm font-semibold">
              What guides us
            </div>
            <h3 className="text-4xl font-bold text-[#FF6B00]">Mission, Vision, Values</h3>
            <p className="text-lg text-gray-600">Principles that keep our team aligned and our clients winning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{ title: 'Mission', icon: Target, copy: 'Empower brands with digital experiences that convert, scale, and delight.' }, { title: 'Vision', icon: Eye, copy: 'Set the standard for premium digital craft that marries design with performance.' }, { title: 'Values', icon: Heart, copy: 'Lead with empathy, ship with excellence, and stay curious together.' }].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative overflow-hidden rounded-2xl border border-[#FF6B00]/10 bg-gradient-to-b from-white to-gray-50/50 shadow-lg shadow-[#FF6B00]/5 hover:shadow-lg transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-transparent"></div>
                  <div className="relative p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#FF6B00]" />
                    </div>
                    <h4 className="text-2xl font-semibold text-[#FF6B00]">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 text-[#FF6B00] px-4 py-2 rounded-full text-sm font-semibold">Why partner with us</div>
            <h3 className="text-4xl font-bold text-[#FF6B00]">A team built for outcomes</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Cross-functional talent, battle-tested playbooks, and a relentless focus on ROI.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Proven expertise', description: '8+ years delivering award-winning digital experiences across industries.' },
              { icon: Users, title: 'Embedded teams', description: '50+ specialists who integrate with your stakeholders and ship fast.' },
              { icon: TrendingUp, title: 'Growth mindset', description: 'Data-first decisions, experiments, and optimizations that compound.' },
              { icon: Target, title: 'Strategy-led', description: 'Roadmaps that tie every pixel and sprint to business outcomes.' },
              { icon: Heart, title: 'Client-obsessed', description: 'Transparent communication, proactive support, and long-term partnerships.' },
              { icon: CheckCircle, title: 'Quality assured', description: 'Rigorous QA, accessibility checks, and performance baselines baked in.' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative rounded-2xl border border-[#FF6B00]/10 bg-gradient-to-b from-white to-gray-50/50 shadow-lg shadow-[#FF6B00]/5 hover:shadow-2xl transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/6 to-transparent"></div>
                  <div className="relative p-7 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF6B00] flex items-center justify-center text-[#FF6B00] shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-[#FF6B00]">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F5F5F7]/40 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all text-[#FF6B00] px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6B00]/5">Track record</div>
            <h3 className="text-4xl font-bold text-[#FF6B00]">Numbers that back us up</h3>
            <p className="text-lg text-gray-600">Momentum built on consistent delivery and delighted clients.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Projects shipped' },
              { value: '200+', label: 'Happy clients' },
              { value: '15+', label: 'Industry awards' },
              { value: '98%', label: 'Satisfaction score' },
            ].map((stat, idx) => (
              <div key={idx} className="relative rounded-2xl bg-gradient-to-b from-white to-gray-50/50 border border-[#FF6B00]/10 p-8 text-center shadow-lg shadow-[#FF6B00]/5 hover:shadow-2xl shadow-[#FF6B00]/10 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-transparent"></div>
                <div className="relative space-y-2">
                  <div className="text-4xl font-bold text-[#FF6B00]">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-[#FF6B00]/10 bg-gradient-to-r from-[#F5F5F7] via-white to-white shadow-xl">
          <div className="absolute -left-10 top-0 w-48 h-48 bg-[#FF6B00]/10 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute right-6 -bottom-10 w-52 h-52 bg-[#FF6B00]/20 rounded-full blur-3xl opacity-50"></div>

          <div className="relative px-8 py-14 text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all text-[#FF6B00] px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6B00]/5">
              Let’s build together
            </div>
            <h3 className="text-4xl font-bold text-[#FF6B00]">Ready to work together?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us where you want to go—we’ll architect the roadmap, team, and technology to get you there.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#FF6B00] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Start a project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="border-2 border-[#FF6B00]/30 text-[#FF6B00] px-8 py-4 rounded-2xl font-semibold hover:bg-gradient-to-b from-white to-gray-50/50 transition-all"
              >
                Explore services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






