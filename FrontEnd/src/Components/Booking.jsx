import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Booking = () => {
  const destinations = [
     {
    name: "Paris, France",
    country: "France",
    basePrice: 999,
    description: "Experience the romance of the City of Light with its iconic landmarks and exquisite cuisine.",
    img: "/imgP/P1.png",
    days: "5 Days"
  },
  {
    name: "Bali, Indonesia",
    country: "Indonesia",
    basePrice: 799,
    description: "Relax on pristine beaches and immerse yourself in Balinese culture and spirituality.",
    img: "/imgP/P2.png",
    days: "7 Days"
  },
  {
    name: "New York, USA",
    country: "USA",
    basePrice: 1099,
    description: "Explore the vibrant energy of the Big Apple with its world-famous attractions.",
    img: "/imgP/P3.png",
    days: "4 Days"
  },
  {
    name: "Tokyo, Japan",
    country: "Japan",
    basePrice: 1199,
    description: "Discover the perfect blend of traditional culture and cutting-edge technology.",
    img: "/imgP/P4.png",
    days: "6 Days"
  },
  {
    name: "Maldives",
    country: "Maldives",
    basePrice: 899,
    description: "Experience paradise with crystal-clear waters and luxurious overwater bungalows.",
    img: "/imgP/P5.png",
    days: "5 Days"
  },
  {
    name: "Rome, Italy",
    country: "Italy",
    basePrice: 950,
    description: "Step back in time with the Colosseum, Vatican, and delicious Italian cuisine in the Eternal City.",
    img: "/imgP/P6.png",
    days: "4 Days"
  },
  {
    name: "Dubai, UAE",
    country: "UAE",
    basePrice: 1050,
    description: "Experience luxury, towering skyscrapers, desert safaris, and world-class shopping in this modern oasis.",
    img: "/imgP/P7.png",
    days: "5 Days"
  },
  {
    name: "London, UK",
    country: "UK",
    basePrice: 980,
    description: "Discover royal history, iconic landmarks like Big Ben, and enjoy rich arts and theatre scenes.",
    img: "/imgP/P8.png",
    days: "6 Days"
  },
  {
    name: "Sydney, Australia",
    country: "Australia",
    basePrice: 1290,
    description: "Explore the stunning harbor, Sydney Opera House, and golden beaches of Australia's most famous city.",
    img:"/imgP/P9.png",
    days: "7 Days"
  },
  {
    name: "Bangkok, Thailand",
    country: "Thailand",
    basePrice: 650,
    description: "A vibrant city of street food, golden temples, night markets, and friendly Thai culture.",
    img: "/imgP/P10.png",
    days: "5 Days"
  },
  {
    name: "Cape Town, South Africa",
    country: "South Africa",
    basePrice: 780,
    description: "Marvel at Table Mountain, visit wineries, and discover diverse cultures and natural beauty.",
    img:"/imgP/P11.png",
    days: "6 Days"
  },
  {
    name: "Barcelona, Spain",
    country: "Spain",
    basePrice: 890,
    description: "Stroll through vibrant streets with Gaudí architecture, beaches, and delicious tapas.",
    img:"/imgP/P12.png",
    days: "5 Days"
  },
  ];

// const backend = "http://localhost:3000/";
const backend = "https://rcbproject.onrender.com/";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: 1,
    date: new Date(),
    destination: destinations[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "destination" 
        ? destinations.find(dest => dest.name === value)
        : value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const handleTravelerChange = (e) => {
    const travelers = parseInt(e.target.value) || 1;
    setFormData(prev => ({ ...prev, travelers }));
  };

  const calculateTotal = () => {
    return formData.destination.basePrice * formData.travelers;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Booking submitted for ${formData.travelers} traveler(s) to ${formData.destination.name}`);
    // Here you would typically send the data to your backend
    try {
      axios.post(`${backend}api/booking`, {
        name: formData.fullName,
        email: formData.email,
        mobile: formData.phone,
        total: formData.travelers,
        date: formData.date.toISOString().split('T')[0],
        destination: formData.destination.name
      })
      alert("Booking confirmed! We will contact you soon.");
    }
    catch (err) {
      console.log("Error submitting booking:", err);
      alert("error submitting booking. Please try again later.");
      
    }
  };

  return (
    <div className="container py-5 booking-page">
      <style>{`
        .booking-page {
          background-color: #f8f9fa;
          min-height: 100vh;
        }
        .booking-card {
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          overflow: hidden;
          border: none;
        }
        .form-section, .summary-section {
          padding: 2rem;
        }
        .form-section {
          background: white;
        }
        .summary-section {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
        }
        .destination-image {
          height: 200px;
          object-fit: cover;
          width: 100%;
        }
        .form-control, .form-select {
          border-radius: 8px;
          padding: 10px 15px;
          border: 1px solid #ced4da;
        }
        .form-control:focus, .form-select:focus {
          border-color: #6a11cb;
          box-shadow: 0 0 0 0.25rem rgba(106, 17, 203, 0.25);
        }
        .btn-book {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          border: none;
          padding: 12px 30px;
          font-weight: 600;
          letter-spacing: 0.5px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .btn-book:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .total-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffcc00;
        }
        .react-datepicker-wrapper {
          width: 100%;
        }
        .section-title {
          position: relative;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .section-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 3px;
          background: #2575fc;
        }
        .summary-section .section-title::after {
          background: #ffcc00;
        }
        @media (max-width: 768px) {
          .booking-card {
            flex-direction: column;
          }
          .destination-image {
            height: 150px;
          }
        }
      `}</style>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="booking-card">
            <div className="row g-0">
              <div className="col-md-7">
                <div className="form-section">
                  <h2 className="section-title">Traveler Information</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="travelers" className="form-label">Number of Travelers</label>
                        <input
                          type="number"
                          className="form-control"
                          id="travelers"
                          name="travelers"
                          min="1"
                          max="20"
                          value={formData.travelers}
                          onChange={handleTravelerChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="date" className="form-label">Travel Date</label>
                        <DatePicker
                          selected={formData.date}
                          onChange={handleDateChange}
                          className="form-control"
                          minDate={new Date()}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="destination" className="form-label">Destination</label>
                        <select
                          className="form-select"
                          id="destination"
                          name="destination"
                          value={formData.destination.name}
                          onChange={handleChange}
                          required
                        >
                          {destinations.map((dest, index) => (
                            <option key={index} value={dest.name}>{dest.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-primary btn-book w-100">
                          Confirm Booking
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5">
                <div className="summary-section h-100">
                  <h2 className="section-title">Booking Summary</h2>
                  <img 
                    src={formData.destination.img} 
                    alt={formData.destination.name} 
                    className="destination-image mb-3 rounded"
                  />
                  <div className="mb-3">
                    <h5>{formData.destination.name}</h5>
                    <p className="mb-1"><strong>Country:</strong> {formData.destination.country}</p>
                    <p className="mb-1"><strong>Duration:</strong> {formData.destination.days}</p>
                    <p><strong>Base Price:</strong> ${formData.destination.basePrice} per person</p>
                  </div>
                  <div className="mb-3">
                    <p className="mb-1"><strong>Travelers:</strong> {formData.travelers}</p>
                    <p className="mb-1"><strong>Travel Date:</strong> {formData.date.toDateString()}</p>
                  </div>
                  <div className="mt-4 pt-3 border-top">
                    <h4 className="total-price">Total Price: ${calculateTotal()}</h4>
                  </div>
                  <div className="mt-4">
                    <h5>About this destination</h5>
                    <p>{formData.destination.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;