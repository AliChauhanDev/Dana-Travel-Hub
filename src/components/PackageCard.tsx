import { MapPin, Clock, Check, ChevronRight } from 'lucide-react';
import { Package } from '../lib/supabase';

interface PackageCardProps {
  pkg: Package;
  onBookNow: (pkg: Package) => void;
}

export default function PackageCard({ pkg, onBookNow }: PackageCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image_url}
          alt={pkg.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase">
            {pkg.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
          <span className="text-sm">{pkg.destination}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="w-4 h-4 mr-2 text-emerald-600" />
          <span className="text-sm">{pkg.duration}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Package Includes:</h4>
          <ul className="space-y-1">
            {pkg.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <Check className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
            {pkg.features.length > 3 && (
              <li className="text-sm text-emerald-600 font-medium ml-6">
                +{pkg.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="text-3xl font-bold text-emerald-600">
                ₹{pkg.price.toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-gray-500">per person</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Available</p>
              <p className="text-lg font-semibold text-gray-900">{pkg.available_slots} slots</p>
            </div>
          </div>

          <button
            onClick={() => onBookNow(pkg)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 group"
          >
            <span>Book Now</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
