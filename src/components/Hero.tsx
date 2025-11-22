import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Begin Your Sacred Journey
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Discover the beauty of Islamic heritage with our premium Umrah, Hajj, and Ziyarat packages
        </p>
        <button
          onClick={scrollToPackages}
          className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2 shadow-2xl"
        >
          <span>Explore Packages</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="animate-bounce text-white">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
