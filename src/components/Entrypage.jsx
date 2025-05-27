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
          <img src="/Images/logo.png" alt="Logo" />
        </div>
        <nav className="menu">
          <div>About Us</div>
          <div>Features</div>
          <div>More Options</div>
          <div>Contact</div>
        </nav>
        <div className="Entry_buttons">
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
            aria-label="Log in to your account"
          >
            Log in
          </button>
          <button
            className="signup-btn"
            onClick={() => navigate("/signup")}
            aria-label="Sign up for a new account"
          >
            Sign up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
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
            <button
              className="cta-btn"
              onClick={() => setShowModal(true)}
              aria-label="Get started with the Todo app"
            >
              Get Started Today
            </button>
            <button
              className="learn-more-btn"
              onClick={() => navigate("/features")}
              aria-label="Learn more about the Todo app"
            >
              Discover Features
            </button>
          </div>
        </div>
        {/* Right Image (Optional) */}
        <div className="hero-image">{/* Add an image here if needed */}</div>
      </section>

      {/* Modals */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)} onSubmit={handleSubmit} />
      )}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}

      {/* Hero Section */}
      <section className="hero-section2">
        <div className="hero-content-left">
          <h1>
            <span className="n1">Organize.</span>
            <br />
            <span className="n2">Achieve.</span>
            <br />
            <span className="n3">Relax.</span>
          </h1>
          <p>
            Turn clutter into clarity, chaos into control, and dreams into done.
            <br />
            Bold visions into market success.
          </p>
          <div className="hero-actions">
            <button
              className="hero-btn-primary"
              onClick={() => setShowModal(true)}
            >
              Get Started Today
            </button>
            <button
              className="hero-btn-secondary"
              onClick={() => navigate("/features")}
            >
              Discover Features
            </button>
            
          </div>
        </div>
        <div>
              <img src="/Images/Card.png" alt="" />
            </div>
            <div className="downstrip"><img src="/Images/Logo Strip.png" alt="" /></div>
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
            <img src="/Images/Group 23.png" alt="Feature 1" />
          </div>
          <div>
            <img src="/Images/Group 24.png" alt="Feature 2" />
          </div>
          <div>
            <img src="/Images/Group 25.png" alt="Feature 3" />
          </div>
          <div>
            <img src="/Images/Group 26.png" alt="Feature 4" />
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
            alt="Vector illustration"
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
            alt="Frame illustration"
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
            <button
              className="cta-btn"
              onClick={() => setShowModal(true)}
              aria-label="Get started with the Todo app"
            >
              Get Started
            </button>
            <button
              className="learn-more-btn"
              onClick={() => navigate("/features")}
              aria-label="Learn more about the Todo app"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Entrypage;
