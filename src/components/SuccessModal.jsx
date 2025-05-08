import React from 'react';
import '../Pages/Modal.css'; 

export default function SuccessModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container2">
        <div className="modal-header2">
          <div><h1>❤️ 
          </h1></div>
          <h2>Thank you for connect with us.</h2>
        </div>
        <p>Our team will contacting with you soon</p>
        <button className="submit-btn" onClick={onClose}>Done</button>
      </div>
    </div>
  );
}
