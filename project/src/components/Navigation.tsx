import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-white to-blue-50 backdrop-blur-md bg-white/95 shadow-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                src="/src/assets/logo.png" 
                alt="Saga Infographics Logo" 
                className="relative w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent hidden sm:inline">
                Saga Infographics 
              </span>
              <span className="text-xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent sm:hidden">
                Saga
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-300 relative group/nav overflow-hidden ${
                  currentPage === item.id
                    ? 'text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {currentPage !== item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 opacity-0 group-hover/nav:opacity-100 transition-opacity rounded-xl"></div>
                )}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="group ml-6 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-1">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-gradient-to-br hover:from-orange-100 hover:to-pink-100 transition-all duration-300 group"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white via-white to-blue-50 border-t border-gray-100 backdrop-blur-sm">
          <div className="px-4 py-6 space-y-2 max-w-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-5 py-3 rounded-xl transition-all duration-300 font-semibold text-sm ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all duration-300 shadow-md mt-4 flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
