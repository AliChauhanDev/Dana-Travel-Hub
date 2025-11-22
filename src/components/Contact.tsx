import { Phone, MapPin, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our packages? Our team is here to help you plan your perfect journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <a
                  href="tel:+917600790054"
                  className="text-emerald-600 hover:text-emerald-700 font-medium text-lg"
                >
                  +91 76007 90054
                </a>
                <p className="text-gray-600 text-sm mt-1">Available 24/7 for your queries</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  Surat, Gujarat, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Instagram className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
                <a
                  href="https://www.instagram.com/danatravelhub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  @danatravelhub
                </a>
                <p className="text-gray-600 text-sm mt-1">Stay updated with latest packages</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <a
                  href="mailto:info@danatravelhub.com"
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  info@danatravelhub.com
                </a>
                <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">About Our Owner</h3>
            <div className="space-y-4">
              <div>
                <p className="text-emerald-100 text-sm mb-1">Owner & Founder</p>
                <p className="text-xl font-semibold">Ahamad Raza Saya</p>
              </div>

              <p className="text-emerald-50 leading-relaxed">
                With a passion for facilitating spiritual journeys and years of experience in the travel
                industry, Ahamad Raza Saya founded DanaTravelHub to provide Muslims with seamless,
                affordable, and enriching pilgrimage experiences.
              </p>

              <div className="bg-white/10 rounded-lg p-4 mt-6">
                <p className="text-sm text-emerald-100 mb-2">Our Commitment</p>
                <p className="text-white">
                  "We believe every Muslim deserves the opportunity to fulfill their spiritual obligations
                  with comfort and peace of mind. That's why we strive to offer the best service at the
                  most competitive prices."
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-emerald-500">
                <p className="text-emerald-100 text-sm mb-2">Registered & Licensed</p>
                <p className="text-white text-sm">
                  All our packages are fully compliant with travel regulations and we maintain transparent
                  operations to ensure your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Office Hours:</span> Monday - Saturday, 9:00 AM - 8:00 PM
            </p>
            <p className="text-gray-600 text-sm">
              Emergency support available 24/7 for booked travelers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
