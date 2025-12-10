import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-2xl shadow-2xl shadow-[#FF6B00]/10 border-b border-[#FF6B00]/30' 
        : 'bg-white/90 backdrop-blur-xl border-b border-[#FF6B00]/20'
    }`}>
      <div className="absolute inset-0 top-0 h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-1 bg-gradient-to-l from-[#FF6B00] via-[#FF8C00] to-transparent opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-2 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Saga Infographics Logo" 
                  className="relative w-8 h-8 object-contain transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 filter brightness-0 invert"
                />
              </div>
            </div>
            <div className="relative">
              <span className="text-2xl font-black bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] bg-clip-text text-transparent hidden sm:inline group-hover:from-[#FF8C00] group-hover:to-[#FF6B00] transition-all duration-500">
                Saga Infographics
              </span>
              <span className="text-xl font-black bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] bg-clip-text text-transparent sm:hidden">
                Saga
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] group-hover:w-full transition-all duration-500"></div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 relative group/nav overflow-hidden ${
                  currentPage === item.id
                    ? 'text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] shadow-lg shadow-[#FF6B00]/40 hover:shadow-xl hover:shadow-[#FF6B00]/50'
                    : 'text-gray-700 hover:text-[#FF6B00] hover:bg-gradient-to-r hover:from-[#FF6B00]/5 hover:to-[#FF8C00]/5'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1">{item.name}</span>
                {currentPage !== item.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/15 to-[#FF8C00]/15 opacity-0 group-hover/nav:opacity-100 transition-opacity rounded-full"></div>
                    <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF8C00] to-[#FF6B00] group-hover/nav:w-4/5 transition-all duration-300"></div>
                  </>
                )}
              </button>
            ))}            
            
            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="group ml-6 relative bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-[#FF6B00]/50 hover:shadow-2xl hover:shadow-[#FF6B00]/70 transition-all duration-300 transform hover:scale-110 flex items-center gap-2 overflow-hidden border border-[#FF8C00]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] via-[#FF6B00] to-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <Sparkles className="relative w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span className="relative">Get Started</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-[#FF6B00]/10 transition-all duration-300 group"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#FF6B00] group-hover:scale-110 transition-transform" />
            ) : (
              <Menu className="w-6 h-6 text-[#FF6B00] group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-[#FF6B00]/20 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`block w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 font-bold text-sm animate-in fade-in slide-in-from-left ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white shadow-lg shadow-[#FF6B00]/30'
                    : 'text-gray-600 hover:bg-gradient-to-r hover:from-[#FF6B00]/10 hover:to-[#FF8C00]/10 hover:text-[#FF6B00] border-2 border-transparent hover:border-[#FF6B00]/20'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white px-5 py-4 rounded-2xl font-bold text-sm shadow-lg shadow-[#FF6B00]/40 hover:shadow-2xl transition-all duration-300 mt-4 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

