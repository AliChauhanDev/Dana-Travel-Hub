import { Heart, Shield, Award, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Trusted Service',
      description: 'Years of experience in organizing spiritual journeys with dedication and care',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Complete documentation support, visa assistance, and 24/7 travel support',
    },
    {
      icon: Award,
      title: 'Best Value',
      description: 'Competitive pricing with no hidden charges and transparent booking process',
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Experienced guides who ensure your journey is spiritually enriching',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner for Sacred Journeys
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At DanaTravelHub, we understand that performing Umrah or Hajj is a once-in-a-lifetime spiritual journey.
              We are committed to making your pilgrimage comfortable, affordable, and memorable.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience in Islamic travel, we offer carefully crafted packages that cater to
              diverse needs and budgets. From visa processing to accommodation and guided tours, we handle
              every detail so you can focus on your spiritual experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">5000+</div>
                <p className="text-gray-600">Happy Pilgrims</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100 hover:shadow-lg transition-all"
                >
                  <feature.icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
