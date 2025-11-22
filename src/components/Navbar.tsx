import { Plane, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Plane className="w-8 h-8 text-emerald-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">DanaTravelHub</h1>
              <p className="text-xs text-emerald-600">Your Journey to Sacred Lands</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-emerald-600 transition">
              Packages
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition">
              Contact
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600">
              Home
            </button>
            <button onClick={() => scrollToSection('packages')} className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600">
              Packages
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
