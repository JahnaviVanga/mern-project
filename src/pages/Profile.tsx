import { useState } from 'react';
import { Calendar, Car, User } from 'lucide-react';
import type { Booking } from '../types';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings'>('profile');
  const [bookings] = useState<Booking[]>([
    {
      id: '1',
      carId: '1',
      startDate: '2024-03-15',
      endDate: '2024-03-18',
      status: 'confirmed',
      totalAmount: 450,
    },
    {
      id: '2',
      carId: '2',
      startDate: '2024-04-01',
      endDate: '2024-04-03',
      status: 'pending',
      totalAmount: 300,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <User className="inline-block h-5 w-5 mr-2" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'bookings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Calendar className="inline-block h-5 w-5 mr-2" />
                My Bookings
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'profile' ? (
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-10 w-10 text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                    <p className="text-gray-600">john.doe@example.com</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                      value="John Doe"
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                      value="john.doe@example.com"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Car className="h-6 w-6 text-blue-600 mr-2" />
                        <span className="font-medium">Booking #{booking.id}</span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {booking.status.charAt(0).toUpperCase() +
                          booking.status.slice(1)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Start Date:</span>{' '}
                        {booking.startDate}
                      </div>
                      <div>
                        <span className="font-medium">End Date:</span>{' '}
                        {booking.endDate}
                      </div>
                      <div>
                        <span className="font-medium">Total Amount:</span> $
                        {booking.totalAmount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}