import { Plane, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="w-8 h-8 text-emerald-500" />
              <div>
                <h3 className="text-xl font-bold">DanaTravelHub</h3>
                <p className="text-sm text-gray-400">Your Journey to Sacred Lands</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              We specialize in providing exceptional Islamic travel experiences, from Umrah and Hajj
              to cultural tours of historic Muslim destinations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/danatravelhub/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-full transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+917600790054"
                className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-full transition"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@danatravelhub.com"
                className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-full transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-emerald-500 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-emerald-500 transition"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-emerald-500 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-emerald-500 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Umrah Packages</li>
              <li>Hajj Services</li>
              <li>Ziyarat Tours</li>
              <li>Visa Assistance</li>
              <li>Hotel Booking</li>
              <li>Travel Insurance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} DanaTravelHub. All rights reserved.</p>
          <p className="text-sm mt-2">
            Owned and operated by Ahamad Raza Saya | Surat, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
