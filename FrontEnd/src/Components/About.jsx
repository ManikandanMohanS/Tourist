import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const darkBg = { backgroundColor: '#1c1c1c' };
  const whiteText = { color: '#ffffff' };
  const dividerStyle = { height: '3px', width: '60px', background: '#ffffff' };
  const rgbText = {
    background: 'linear-gradient(90deg, red, #00f0ff, lime)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <div style={darkBg} className="text-white">
      {/* Header */}
      <div className="text-center py-5 border-bottom border-secondary position-relative">
        <Container>
          <h1 className="display-4 fw-bold" style={rgbText}>About RCB Holidays</h1>
          <p className="lead text-white-50">Your trusted travel partner since 2025</p>
        </Container>
      </div>

      {/* Philosophy Section */}
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 className="fw-bold mb-3 text-white">Our Philosophy</h2>
            <div className="mx-auto mb-4" style={dividerStyle}></div>
            <p className="fs-5 mb-4 text-white">
              At <strong>RCB Holidays</strong>, travel is transformation. Since 2025, we’ve designed
              journeys with purpose, heart, and cultural respect.
            </p>
            <p className="fs-5 mb-4 text-white">
              Our team combines local expertise with global insight to deliver deeply personalized experiences
              tailored to your desires.
            </p>
            <p className="fs-5 text-white">
              From hidden gems to luxury escapes, we are your dedicated partner in exploration.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Core Values */}
      <div className="py-5 border-top border-bottom border-secondary">
        <Container>
          <h2 className="fw-bold text-center mb-4 text-white">Our Core Values</h2>
          <div className="mx-auto mb-5" style={dividerStyle}></div>
          <Row className="g-4">
            {[
              {
                icon: 'bi-globe2',
                title: 'Authenticity',
                desc: 'Real local experiences, curated by locals who know their regions best.'
              },
              {
                icon: 'bi-shield-lock',
                title: 'Safety',
                desc: '24/7 global assistance and rigorously vetted partners for worry-free travel.'
              },
              {
                icon: 'bi-person-check',
                title: 'Personalization',
                desc: 'Each itinerary is crafted to match your style, preferences, and pace.'
              }
            ].map((item, idx) => (
              <Col md={4} key={idx}>
                <Card className="h-100 bg-transparent border-0 text-center">
                  <Card.Body>
                    <i className={`bi ${item.icon} fs-1 mb-3 text-white`}></i>
                    <h5 className="fw-bold mb-2 text-white">{item.title}</h5>
                    <p className="text-white">{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Team Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="fw-bold mb-4 text-white">Meet Our Experts</h2>
            <div className="mx-auto mb-4" style={dividerStyle}></div>
            <p className="fs-5 text-white mb-3">
              Our team consists of seasoned travel designers, each with deep regional knowledge and a passion
              for cultural immersion.
            </p>
            <p className="fs-5 text-white">
              From solo adventures to grand group getaways, they create memories that last a lifetime.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Contact & Offices */}
      <div className="py-5 border-top border-secondary">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 bg-dark text-white border-0">
                <Card.Body>
                  <h4 className="fw-bold mb-3"><i className="bi bi-envelope me-2"></i>Contact Us</h4>
                  <p>Email: info@rcb-holidays.com</p>
                  <p>Phone: +1 (800) 123-4567</p>
                  <p className="text-white-50 small">Support: Mon–Fri, 8am–8pm</p>
                  <hr className="border-secondary" />
                  <p>Emergency: +1 (800) 987-6543</p>
                  <p className="text-white-50 small">Available 24/7</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 bg-dark text-white border-0">
                <Card.Body>
                  <h4 className="fw-bold mb-3"><i className="bi bi-geo-alt me-2"></i>Global Offices</h4>
                  <p><strong>Dubai:</strong> 456 Travel Plaza</p>
                  <p className="text-white-50">+971 4 123 4567</p>
                  <hr className="border-secondary" />
                  <p><strong>Singapore:</strong> 78 Wanderlust Street</p>
                  <p className="text-white-50">+65 6123 4567</p>
                  <hr className="border-secondary" />
                  <p><strong>India :</strong> Bangalore</p>
                  <p className="text-white-50">+91 1234 5678</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;