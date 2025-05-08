import { useNavigate } from "react-router-dom";
import "../Pages/Entrypage.css";
import Footer from "./Footer";
import Modal from "./Modal";
import { useState } from "react";
import SuccessModal from "./SuccessModal";

function Entrypage() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    setShowModal(false);
    setShowSuccess(true);
  };

  const navigate = useNavigate();
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <span>
            <img src="/Images/logo.png" alt="logopng" />
          </span>
        </div>
        <div className="menu">
          <div>About Us</div>
          <div>Features</div>
          <div>More Options</div>
          <div>Contact</div>
        </div>
        <div className="Entry_buttons">
          <button className="login-btn" >
            Log in
          </button>
          <button className="signup-btn" >
            Sign up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Left Content */}
        <div className="hero-content">
          <h1>
            Simplify Your Life with Our <br />
            Todo App
          </h1>
          <p>
            Stay organized and boost your productivity with our intuitive todo
            website. Experience a modern approach to task management that fits
            your lifestyle.
          </p>
          <div className="hero-buttons">
            <button className="cta-btn" onClick={() => setShowModal(true)}>
              Get Started
            </button>
            {showModal && (
              <Modal
                onClose={() => setShowModal(false)}
                onSubmit={handleSubmit}
              />
            )}
            {showSuccess && (
              <SuccessModal onClose={() => setShowSuccess(false)} />
            )}
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-img">
          <img src="/Images/Header.png" alt="Analytics" />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="analytics">
        <div className="analytics-card">
          <h3>
            Transform Your Productivity with Our Innovative To-Do List Features
          </h3>
        </div>

        <div className="analytics-img">
          <div>
            <img src="/Images/Group 23.png" alt="" />
          </div>
          <div>
            <img src="/Images/Group 24.png" alt="" />
          </div>
          <div>
            <img src="/Images/Group 25.png" alt="" />
          </div>
          <div>
            <img src="/Images/Group 26.png" alt="" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content">
        <div className="content-text">
          <h2>Customer Testimonials</h2>
          <p>This tool has transformed my productivity and organization!</p>
        </div>
        <div className="image-container">
          <img
            src="/Images/Vector (1).png"
            alt="Contentimg"
            className="vector-img"
          />
          <img
            src="/Images/Testimonial.png"
            alt="Testimonial"
            className="testimonial-img"
          />
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations">
        <div>
          <img
            src="/Images/Photo rectangle.png"
            alt="Frame"
            className="frameimg"
          />
        </div>
        <div className="hero-content2">
          <h1>Start Organizing Your Life Today</h1>
          <p>
            Join us now and transform your productivity with our intuitive to-do
            list platform!
          </p>
          <div className="hero-buttons">
            <button className="cta-btn" onClick={() => setShowModal(true)}>
              Get Started
            </button>
            {showModal && (
              <Modal
                onClose={() => setShowModal(false)}
                onSubmit={handleSubmit}
              />
            )}
            {showSuccess && (
              <SuccessModal onClose={() => setShowSuccess(false)} />
            )}
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Entrypage;


  //  Aditya Mohite 
  // adityamohite4973@gmail.com