import { Menu, X } from 'lucide-react';
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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-white to-orange-50 shadow-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group"
          >
            <img 
              src="/src/assets/logo.png" 
              alt="Saga Infographics Logo" 
              className="w-14 h-14 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
              Saga Infographics
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 relative ${
                  currentPage === item.id
                    ? 'text-orange-600 bg-orange-100'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
                {currentPage === item.id && (
                  <span className="absolute bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
                )}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="ml-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-orange-100 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-orange-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white to-orange-50 border-t border-orange-100">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 shadow-md'
                    : 'text-gray-700 hover:bg-orange-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md mt-2"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
