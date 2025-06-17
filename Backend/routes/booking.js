const express = require('express');
const router = express.Router();
const mod = require('../model/booking');

// Create booking
router.post('/api/booking', async (req, res) => {
    try {
        const { name, email, mobile, total, date, destination } = req.body;
        const booking = new mod({ name, email, mobile, total, date, destination });
        await booking.save();
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Fetch all bookings
router.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await mod.find({});
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.delete('/api/booking/:id', async (req, res) => {
    const bookingId = req.params.id;
    try {
        const deletedBooking = await mod.findByIdAndDelete(bookingId);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        else {
            res.status(200).json({ message: 'Booking deleted successfully', booking: deletedBooking });
        }
    }
    catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
);

module.exports = router;
