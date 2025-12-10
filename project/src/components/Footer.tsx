import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 relative overflow-hidden border-t border-[#FF6B00]/20">
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-[#FF6B00]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#FF6B00]/5 border border-[#FF6B00]/20 rounded-2xl p-8 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white border border-[#FF6B00]/20 rounded-full px-3 py-1 mb-3">
                  <div className="w-2 h-2 bg-[#FF6B00] rounded-full\"></div>
                  <span className="text-xs font-bold text-[#FF6B00]\">Newsletter</span>
                </div>
                <h3 className="text-2xl font-black text-black mb-2">Stay Ahead of the Curve</h3>
                <p className="text-gray-600 text-sm leading-relaxed\">Get exclusive insights, digital trends, and expert tips delivered straight to your inbox every week.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white border border-[#FF6B00]/20 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#FF6B00] transition-colors text-sm"
                />
                <button className="bg-[#FF6B00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B00]/90 transition-colors flex items-center justify-center gap-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8\">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[#FF6B00] p-2 rounded-lg">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Saga Infographics Logo" 
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-lg font-black text-[#FF6B00]">Saga Infographics</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-4">Transforming businesses with cutting-edge digital solutions since 2015.</p>
            <div className="flex gap-2">
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
                  className="w-8 h-8 bg-[#FF6B00]/10 hover:bg-[#FF6B00] rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4 text-[#FF6B00] hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FF6B00] font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-gray-600 hover:text-[#FF6B00] transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#FF6B00] font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
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
                    className="text-gray-600 hover:text-[#FF6B00] transition-colors text-sm"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-2xl p-6">
            <div className="inline-flex items-center gap-1 bg-white border border-[#FF6B00]/20 rounded-full px-2 py-0.5 mb-2">
              <div className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full"></div>
              <span className="text-xs font-bold text-[#FF6B00]\">Start Today</span>
            </div>
            <h4 className="text-lg font-black text-[#FF6B00] mb-2\">Ready to Transform?</h4>
            <p className="text-gray-600 text-xs mb-4\">Join 200+ successful businesses and start your digital transformation journey today.</p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full bg-[#FF6B00] text-white py-2 rounded-lg font-semibold text-sm hover:bg-[#FF6B00]/90 transition-colors flex items-center justify-center gap-1"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FF6B00]/20 my-8"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="text-gray-500 text-xs">
            <span>&copy; {currentYear} Saga Infographics.</span>
            <span className="mx-2">•</span>
            <span>Crafted with passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


