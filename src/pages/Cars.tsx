import { useState } from 'react';
import { Filter } from 'lucide-react';
import CarCard from '../components/CarCard';
import type { Car } from '../types';

export default function Cars() {
  const [cars] = useState<Car[]>([
    {
      id: '1',
      name: 'Tesla Model S',
      type: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80',
      price: 200,
      seats: 5,
      transmission: 'Automatic',
      fuelType: 'Electric',
      available: true,
    },
    {
      id: '2',
      name: 'BMW X5',
      type: 'SUV',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80',
      price: 150,
      seats: 7,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      available: true,
    },
    {
      id: '3',
      name: 'Mercedes C-Class',
      type: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80',
      price: 180,
      seats: 5,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      available: false,
    },
  ]);

  const handleRentCar = (car: Car) => {
    // Handle rental logic
    console.log('Renting car:', car);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Cars</h1>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} onRent={handleRentCar} />
          ))}
        </div>
      </div>
    </div>
  );
}