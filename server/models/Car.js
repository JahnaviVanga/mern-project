import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    enum: ['Automatic', 'Manual'],
    required: true,
  },
  fuelType: {
    type: String,
    enum: ['Petrol', 'Diesel', 'Electric'],
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

export default mongoose.model('Car', carSchema);