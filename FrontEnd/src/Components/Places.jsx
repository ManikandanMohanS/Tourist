import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const placesData = [
  {
    name: "Paris",
    img: "/imgP/P1.png",
    price: "$999",
    days: "5 Days",
    location: "France",
  },
  {
    name: "Bali",
    img: "/imgP/P2.png",
    price: "$799",
    days: "7 Days",
    location: "Indonesia",
  },
  {
    name: "New York",
    img: "/imgP/P3.png",
    price: "$1099",
    days: "4 Days",
    location: "USA",
  },
  {
    name: "Tokyo",
    img: "/imgP/P4.png",
    price: "$1199",
    days: "6 Days",
    location: "Japan",
  },
  {
    name: "Maldives",
    img: "/imgP/P5.png",
    price: "$899",
    days: "5 Days",
    location: "Maldives",
  },
  {
    name: "Rome",
    img: "/imgP/P6.png",
    price: "$950",
    days: "4 Days",
    location: "Italy",
  },
  {
    name: "Dubai",
    img: "/imgP/P7.png",
    price: "$1050",
    days: "5 Days",
    location: "UAE",
  },
  {
    name: "London",
    img: "/imgP/P8.png",
    price: "$980",
    days: "6 Days",
    location: "UK",
  },
  {
    name: "Sydney",
    img: "/imgP/P9.png",
    price: "$1290",
    days: "7 Days",
    location: "Australia",
  },
  {
    name: "Bangkok",
    img: "/imgP/P10.png",
    price: "$650",
    days: "5 Days",
    location: "Thailand",
  },
  {
    name: "Cape Town",
    img: "/imgP/P11.png",
    price: "$780",
    days: "6 Days",
    location: "South Africa",
  },
  {
    name: "Barcelona",
    img: "/imgP/P12.png",
    price: "$890",
    days: "5 Days",
    location: "Spain",
  },
];

const Places = () => {
  const navigate = useNavigate();

  return (
    <div className="places-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <style>{`
        .place-card {
          transition: all 0.3s ease;
          border: none;
          border-radius: 15px;
          overflow: hidden;
        }
        
        .place-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        }
        
        .card-img-top {
          height: 200px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .place-card:hover .card-img-top {
          transform: scale(1.05);
        }
        
        .section-title {
          position: relative;
          display: inline-block;
          margin-bottom: 2rem;
          font-weight: 700;
          color: #2c3e50;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          width: 50%;
          height: 4px;
          bottom: -10px;
          left: 25%;
          background: linear-gradient(to right, #3498db, #2ecc71);
          border-radius: 2px;
        }
        
        .book-btn {
          background: linear-gradient(45deg, #3498db, #2ecc71);
          border: none;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }
        
        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
        }
        
        .card-body {
          padding: 1.5rem;
        }
        
        .card-title {
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .card-text {
          color: #7f8c8d;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .card-img-top {
            height: 180px;
          }
        }
        
        @media (max-width: 576px) {
          .card-img-top {
            height: 150px;
          }
          
          .card-body {
            padding: 1rem;
          }
          
          .card-title {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="text-center section-title">
          Explore Our Top Destinations
        </h2>
        <div className="row g-4">
          {placesData.map((place, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100 shadow place-card">
                <img
                  src={place.img}
                  className="card-img-top"
                  alt={place.name}
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{place.name}</h5>
                  <div className="mb-2">
                    <p className="card-text mb-1">
                      <i className="fas fa-dollar-sign me-2"></i>
                      <strong>Price (per person):</strong> {place.price}
                    </p>
                    <p className="card-text mb-1">
                      <i className="far fa-calendar-alt me-2"></i>
                      <strong>Duration:</strong> {place.days}
                    </p>
                    <p className="card-text">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      <strong>Location:</strong> {place.location}
                    </p>
                  </div>
                  <button
                    className="btn book-btn mt-auto"
                    onClick={() => navigate("/Booking")} // <-- Capital B
                  >
                    <i className="fas fa-shopping-cart me-2"></i>Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
