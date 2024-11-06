export interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  available: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  bookings: Booking[];
}

export interface Booking {
  id: string;
  carId: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalAmount: number;
}