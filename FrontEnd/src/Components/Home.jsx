import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeImg from "../img/image.png";
import {Link} from "react-router-dom";

const Home = () => {
  const changeContentRef = useRef(null);

  useEffect(() => {
    const places = [
      "India",
      "Sri Lanka",
      "America",
      "Dubai",
      "London",
      "China",
      "Singapore",
      "Maldives",
    ];
    let i = 0;

    const interval = setInterval(() => {
      if (changeContentRef.current) {
        changeContentRef.current.textContent = places[i];
        i = (i + 1) % places.length;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .changecontent {
          font-weight: 800;
          background: linear-gradient(45deg, #2E86AB, #4B7BFF, #A23B72);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 300% 300%;
          animation: gradient 3s ease infinite, bounce 0.5s ease;
          display: inline-block;
          padding: 0 8px;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

       .home {
  position: fixed;
  top: 56px; /* assuming your Navbar height */
  left: 0;
  width: 100%;
  height: calc(100vh - 56px); /* full viewport height minus Navbar */
  background-image: url(${HomeImg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}


        .home::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.15);
          z-index: 0;
        }

        .home-overlay {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .text-container {
          padding: 2.5rem;
          max-width: 90%;
          width: 650px;
          margin: 0 auto;
          text-align: center;
          background: rgba(255, 255, 255, 0.21);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(202, 191, 191, 0.42);
          backdrop-filter: blur(2px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        h5 {
          font-weight: 700;
          color: rgba(245, 249, 32, 0.85);
          margin-bottom: 1.2rem;
          font-size: 1.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        h1 {
          font-weight: 900;
          color: rgba(0, 0, 0, 0.74);
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          letter-spacing: 1px;
        }

        p {
          color: rgba(0, 0, 0, 0.7);
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          line-height: 1.7;
          font-weight: 500;
        }

        .btn-book {
          background: linear-gradient(45deg, #2E86AB, #4B7BFF);
          border: none;
          padding: 1rem 3rem;
          font-weight: 700;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(46, 134, 171, 0.3);
          border-radius: 50px;
          color: white;
          text-transform: uppercase;
          font-size: 1rem;
        }

        .btn-book:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(64, 176, 224, 0.4);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.8rem;
          }

          h5 {
            font-size: 1.3rem;
          }

          p {
            font-size: 1.1rem;
          }

          .text-container {
            padding: 2rem;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2.2rem;
          }

          h5 {
            font-size: 1.1rem;
          }

          p {
            font-size: 1rem;
          }

          .btn-book {
            padding: 0.8rem 2rem;
          }

          .text-container {
            padding: 1.5rem;
            max-width: 95%;
          }
        }
      `}</style>

      <div className="home"></div>

      <div className="home-overlay">
        <div className="text-container">
          <h5>Welcome To Paradise</h5>
          <h1>
            Discover <span className="changecontent" ref={changeContentRef}>India</span>
          </h1>
          <p>
            Journey to the world's most breathtaking destinations with our exclusive travel experiences.
          </p>
          <Link to="/places" className="btn btn-book">
            Start Adventure
          </Link>
          {/* <a href="#book" className="btn btn-book">
            Start Adventure
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Home;
