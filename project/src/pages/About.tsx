import { Target, Eye, Heart, Award, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-[#FAFAFA] overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-24 w-72 h-72 bg-[#FF7A00]/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute right-10 top-10 w-64 h-64 bg-[#FF7A00]/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-[-80px] left-1/3 w-80 h-80 bg-[#FF7A00]/10 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-[#001F3F]/80 border border-[#FF7A00]/10 text-[#FF7A00] rounded-full px-5 py-2 shadow-sm">
            <span className="text-sm font-semibold">Since 2015</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]"></span>
            <span className="text-sm font-semibold">Global digital partner</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            About <span className="text-[#FF7A00]">Saga Infographics</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We craft human-centered digital experiences that elevate brands and drive measurable growth for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#FF7A00] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Talk with us
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 text-gray-300 bg-[#001F3F]/70 border border-[#FF7A00]/10 rounded-full px-5 py-3 shadow-sm">
              <CheckCircle className="w-5 h-5 text-[#FF7A00]" />
              <span className="text-sm font-semibold">Trusted by 200+ clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-full text-sm font-semibold">
              Our story
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Built on strategy, design, and technology working in harmony
            </h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed bg-[#001F3F] border border-[#FF7A00]/10 rounded-2xl p-6 shadow-sm">
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
            <div className="absolute -inset-6 bg-gradient-to-br from-[#FF7A00]/20/50 to-[#FF7A00]/10/40 blur-3xl rounded-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4 bg-[#001F3F] border border-[#FF7A00]/10 rounded-3xl p-4 shadow-xl">
              {[
                'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
              ].map((src, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl shadow-md group relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={src} alt="Team" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F2F2F2]/40 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#001F3F]/70 border border-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-full shadow-sm text-sm font-semibold">
              What guides us
            </div>
            <h3 className="text-4xl font-bold text-white">Mission, Vision, Values</h3>
            <p className="text-lg text-gray-300">Principles that keep our team aligned and our clients winning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{ title: 'Mission', icon: Target, copy: 'Empower brands with digital experiences that convert, scale, and delight.' }, { title: 'Vision', icon: Eye, copy: 'Set the standard for premium digital craft that marries design with performance.' }, { title: 'Values', icon: Heart, copy: 'Lead with empathy, ship with excellence, and stay curious together.' }].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative overflow-hidden rounded-2xl border border-[#FF7A00]/10 bg-[#001F3F] shadow-sm hover:shadow-lg transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 to-transparent"></div>
                  <div className="relative p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF7A00]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#FF7A00]" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.copy}</p>
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
            <div className="inline-flex items-center gap-2 bg-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-full text-sm font-semibold">Why partner with us</div>
            <h3 className="text-4xl font-bold text-white">A team built for outcomes</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Cross-functional talent, battle-tested playbooks, and a relentless focus on ROI.</p>
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
                <div key={idx} className="relative rounded-2xl border border-[#FF7A00]/10 bg-[#001F3F] shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/6 to-transparent"></div>
                  <div className="relative p-7 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#FF7A00] flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F2F2F2]/40 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#001F3F]/80 border border-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Track record</div>
            <h3 className="text-4xl font-bold text-white">Numbers that back us up</h3>
            <p className="text-lg text-gray-300">Momentum built on consistent delivery and delighted clients.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Projects shipped' },
              { value: '200+', label: 'Happy clients' },
              { value: '15+', label: 'Industry awards' },
              { value: '98%', label: 'Satisfaction score' },
            ].map((stat, idx) => (
              <div key={idx} className="relative rounded-2xl bg-[#001F3F] border border-[#FF7A00]/10 p-8 text-center shadow-sm hover:shadow-md transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 to-transparent"></div>
                <div className="relative space-y-2">
                  <div className="text-4xl font-bold text-[#FF7A00]">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-[#FF7A00]/10 bg-gradient-to-r from-[#F2F2F2] via-white to-white shadow-xl">
          <div className="absolute -left-10 top-0 w-48 h-48 bg-[#FF7A00]/10 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute right-6 -bottom-10 w-52 h-52 bg-[#FF7A00]/20 rounded-full blur-3xl opacity-50"></div>

          <div className="relative px-8 py-14 text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#001F3F]/70 border border-[#FF7A00]/10 text-[#FF7A00] px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              Let’s build together
            </div>
            <h3 className="text-4xl font-bold text-white">Ready to work together?</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Tell us where you want to go—we’ll architect the roadmap, team, and technology to get you there.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#FF7A00] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Start a project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="border-2 border-[#FF7A00]/20 text-[#FF7A00] px-8 py-4 rounded-xl font-semibold hover:bg-[#FAFAFA] transition-all"
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





