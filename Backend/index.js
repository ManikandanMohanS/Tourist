const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bookingRoutes = require('./routes/booking'); // make sure the path is correct

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://manikandan:mani%401234@cluster0.obi94.mongodb.net/rcb_holidays";
mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use(bookingRoutes);

// Test route
app.get('/api', (req, res) => {
    res.json('Welcome to RCB Holidays Backend API');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
