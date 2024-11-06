import { ArrowRight, Shield, Star, Zap } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: 'Instant Booking',
      description: 'Book your dream car in minutes with our seamless process',
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Secure Rentals',
      description: 'Full insurance coverage for peace of mind',
    },
    {
      icon: <Star className="h-6 w-6 text-blue-600" />,
      title: 'Premium Selection',
      description: 'Choose from our curated collection of luxury vehicles',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Luxury Car Rental Made Simple
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience the thrill of driving premium vehicles at competitive prices
            </p>
            <a
              href="/cars"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Browse Cars
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose LuxeWheels?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}