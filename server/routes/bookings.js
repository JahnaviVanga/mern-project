import express from 'express';
import Booking from '../models/Booking.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const { carId, startDate, endDate, totalAmount } = req.body;
    const booking = new Booking({
      user: req.user.id,
      car: carId,
      startDate,
      endDate,
      totalAmount,
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking' });
  }
});

router.get('/user', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('car')
      .sort('-createdAt');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});

export default router;