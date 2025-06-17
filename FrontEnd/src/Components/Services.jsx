import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faBus, 
  faHotel, 
  faUmbrellaBeach, 
  faConciergeBell,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Food Arrangement",
      icon: faUtensils,
      color: "#FF6B6B",
      description: "Professional catering services for all events with diverse menu options."
    },
    {
      id: 2,
      title: "Transport",
      icon: faBus,
      color: "#4ECDC4",
      description: "Comfortable and reliable transportation solutions for individuals and groups."
    },
    {
      id: 3,
      title: "Hotels",
      icon: faHotel,
      color: "#45B7D1",
      description: "Luxurious accommodations with premium amenities at competitive prices."
    },
    {
      id: 4,
      title: "Trips",
      icon: faUmbrellaBeach,
      color: "#FFA07A",
      description: "Curated travel experiences to exotic destinations with expert guides."
    },
    {
      id: 5,
      title: "Hospitality",
      icon: faConciergeBell,
      color: "#A78BFA",
      description: "Exceptional guest services to make your events memorable and seamless."
    },
    {
      id: 6,
      title: "Event Planning",
      icon: faCalendarAlt,
      color: "#F9C74F",
      description: "End-to-end event management from concept to execution."
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Virat",
      avatar: "/imgP/vkImg.png",
      rating: 5,
      feedback: "The food arrangement was exceptional! Every dish was delicious and beautifully presented."
    },
    {
      id: 2,
      name: "Rohit Sharma",
      avatar: "/imgP/rohit.png",
      rating: 4,
      feedback: "Transport service was punctual and comfortable. Drivers were very professional."
    },
    {
      id: 3,
      name: "Cristiano Ronaldo",
      avatar: "/imgP/Cr.png",
      rating: 5,
      feedback: "The hotel recommended by them was perfect - great location and amazing service!"
    },
    {
      id: 4,
      name: "Hardik Pandya",
      avatar: "/imgP/hp.png",
      rating: 5,
      feedback: "Our trip to Bali was unforgettable thanks to their excellent planning and support."
    },
    {
      id: 5,
      name: "MS Dhoni",
      avatar: "/imgP/msd.png",
      rating: 5,
      feedback: "The hospitality team went above and beyond to ensure our event was a success."
    },
    
  ];

  const renderStars = (rating) => {
    return (
      <div className="star-rating mb-3">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            style={{
              color: i < rating ? "#FFD700" : "#6B7280",
              fontSize: '1.75rem',
              margin: '0 3px',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bold" style={{
          background: 'linear-gradient(45deg, #3a7bd5, #00d2ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Our Premium Services
        </h2>
        <p className="lead text-muted">Discover the exceptional services we offer to make your experience unforgettable</p>
      </div>
      
      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-md-4">
            <div 
              className="card h-100 border-0 shadow-lg rounded-3"
              style={{ 
                transition: 'transform 0.3s ease',
                borderTop: `5px solid ${service.color}`,
                backgroundColor: 'white'
              }}
            >
              <div className="card-body text-center p-4">
                <div 
                  className="mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: `${service.color}20`,
                    color: service.color,
                    fontSize: '2rem'
                  }}
                >
                  <FontAwesomeIcon icon={service.icon} size="2x" />
                </div>
                <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold" style={{
            background: 'linear-gradient(45deg, #3a7bd5, #00d2ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            What Our Clients Say
          </h2>
          <p className="lead text-muted">Hear from our satisfied customers</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Carousel indicators={false} interval={4000} pause="hover">
              {reviews.map((review) => (
                <Carousel.Item key={review.id}>
                  <div 
                    className="card border-0 shadow-lg rounded-3 overflow-hidden"
                    style={{ 
                      background: 'linear-gradient(135deg, #4b5563 0%, #1f2937 100%)',
                      border: 'none',
                      color: '#f3f4f6'
                    }}
                  >
                    <div className="card-body p-4 p-lg-5 text-center">
                      <div className="mb-4 mx-auto" style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid rgba(255,215,0,0.3)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                      }}>
                        <img 
                          src={review.avatar} 
                          alt={review.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      {renderStars(review.rating)}
                      <blockquote className="my-4 px-lg-5" style={{
                        fontSize: '1.25rem',
                        fontStyle: 'italic',
                        lineHeight: '1.6',
                        color: '#e5e7eb'
                      }}>
                        "{review.feedback}"
                      </blockquote>
                      <footer className="mt-3" style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#f9fafb'
                      }}>
                        {review.name}
                      </footer>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;