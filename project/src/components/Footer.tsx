import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50/50 text-gray-600 relative overflow-hidden border-t border-[#FF6B00]/10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute -bottom-80 -left-40 w-96 h-96 bg-gradient-to-tr from-[#FF8C00] to-[#FF6B00] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-[#FF6B00] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-[#FF6B00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-br from-[#FF6B00]/10 via-[#FF8C00]/5 to-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-3xl p-10 backdrop-blur-sm shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#FF6B00]/20 rounded-full px-4 py-1.5 mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-[#FF6B00]">Newsletter</span>
                </div>
                <h3 className="text-3xl font-black text-black mb-3">Stay Ahead of the Curve</h3>
                <p className="text-gray-600 leading-relaxed">Get exclusive insights, digital trends, and expert tips delivered straight to your inbox every week.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/90 backdrop-blur-sm border-2 border-[#FF6B00]/20 rounded-2xl px-5 py-4 text-black placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/10 transition-all duration-300 shadow-sm"
                />
                <button className="group bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-[#FF6B00]/30 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative">Subscribe</span>
                  <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-2.5 rounded-2xl shadow-lg">
                  <img 
                    src="/src/assets/logo.png" 
                    alt="Saga Infographics Logo" 
                    className="w-10 h-10 object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] bg-clip-text text-transparent">
                Saga Infographics
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm max-w-sm">
              Transforming businesses with cutting-edge digital solutions since 2015. Your trusted growth partner in the ever-evolving digital landscape.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-12 h-12 bg-gradient-to-br from-[#FF6B00]/10 to-[#FF8C00]/10 hover:from-[#FF6B00] hover:to-[#FF8C00] rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-sm hover:shadow-lg border border-[#FF6B00]/20 hover:border-[#FF6B00]"
                >
                  <social.icon className="w-5 h-5 text-[#FF6B00] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FF6B00] font-bold text-lg mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#FF6B00] to-[#FF8C00] rounded-full shadow-sm"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-gray-600 hover:text-[#FF6B00] transition-colors text-sm font-medium group flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#FF6B00] font-bold text-lg mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#FF6B00] to-[#FF8C00] rounded-full shadow-sm"></div>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Web Development', page: 'services' },
                { name: 'SEO Optimization', page: 'services' },
                { name: 'Digital Marketing', page: 'services' },
                { name: 'Content Creation', page: 'services' },
                { name: 'Automation', page: 'services' },
              ].map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(service.page)}
                    className="text-gray-600 hover:text-[#FF6B00] transition-colors text-sm font-medium group flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section - Rightmost */}
          <div className="bg-gradient-to-br from-[#FF6B00]/10 via-[#FF8C00]/5 to-[#FF6B00]/10 border-2 border-[#FF6B00]/20 rounded-3xl p-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-[#FF8C00]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#FF6B00]/30 rounded-full px-3 py-1 mb-4">
                <div className="w-2 h-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-[#FF6B00]">Start Today</span>
              </div>
              <h4 className="text-2xl font-black bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] bg-clip-text text-transparent mb-3">Ready to Transform?</h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">Join 200+ successful businesses and start your digital transformation journey today.</p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-[#FF6B00]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] to-[#FF6B00] opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                <span className="relative">Get Started Free</span>
                <ArrowRight className="relative w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <span>&copy; {currentYear} Saga Infographics.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Crafted with passion</span>
          </div>
          
          <div className="flex gap-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <button
                key={item}
                className="text-[#FF6B00]/70 hover:text-[#FF6B00] transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


