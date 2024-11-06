import { Award, Clock, Shield, Users } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      value: '10,000+',
      label: 'Happy Customers',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      value: '24/7',
      label: 'Customer Support',
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      value: '500+',
      label: 'Luxury Vehicles',
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      value: '100%',
      label: 'Secure Booking',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About LuxeWheels</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're passionate about providing exceptional car rental experiences with
            our premium fleet of vehicles and outstanding customer service.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1562519819-016930ada31c?auto=format&fit=crop&q=80"
                alt="Luxury car showroom"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Commitment to Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                At LuxeWheels, we believe in delivering more than just a car rental
                service. We provide an experience that combines luxury,
                convenience, and reliability. Our fleet is regularly maintained and
                updated to ensure you always get the best vehicles in perfect
                condition.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <Shield className="h-5 w-5 text-blue-600 mr-3" />
                  Comprehensive insurance coverage
                </li>
                <li className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  Flexible rental periods
                </li>
                <li className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 text-blue-600 mr-3" />
                  Personalized customer service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}