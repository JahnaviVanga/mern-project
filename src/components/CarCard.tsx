import { Car } from 'lucide-react';
import type { Car as CarType } from '../types';

interface CarCardProps {
  car: CarType;
  onRent: (car: CarType) => void;
}

export default function CarCard({ car, onRent }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
          <span className="text-blue-600 font-bold">${car.price}/day</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Car className="h-4 w-4 mr-2" />
            <span>{car.type}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{car.seats} Seats</span>
            <span>{car.transmission}</span>
            <span>{car.fuelType}</span>
          </div>
        </div>
        <button
          onClick={() => onRent(car)}
          disabled={!car.available}
          className={`mt-4 w-full py-2 px-4 rounded-md ${
            car.available
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {car.available ? 'Rent Now' : 'Not Available'}
        </button>
      </div>
    </div>
  );
}