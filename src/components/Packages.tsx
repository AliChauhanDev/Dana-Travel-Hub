import { useState, useEffect } from 'react';
import { supabase, Package } from '../lib/supabase';
import PackageCard from './PackageCard';
import BookingModal from './BookingModal';
import { Loader } from 'lucide-react';

export default function Packages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const { data, error } = await supabase
        .from('packages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPackages(data || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPackages = filter === 'all'
    ? packages
    : packages.filter(pkg => pkg.category === filter);

  const categories = [
    { value: 'all', label: 'All Packages' },
    { value: 'umrah', label: 'Umrah' },
    { value: 'hajj', label: 'Hajj' },
    { value: 'ziyarat', label: 'Ziyarat' },
    { value: 'tour', label: 'Tours' },
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Sacred Journey Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated packages designed to make your spiritual journey comfortable and memorable
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.value
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="w-12 h-12 animate-spin text-emerald-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onBookNow={setSelectedPackage}
              />
            ))}
          </div>
        )}

        {!loading && filteredPackages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No packages found in this category.</p>
          </div>
        )}
      </div>

      {selectedPackage && (
        <BookingModal
          package={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </section>
  );
}
