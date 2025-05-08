import React, { useState } from 'react';
import "../Pages/Modal.css";

export default function Modal({ onClose, onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [languages, setLanguages] = useState([]);
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleLanguageChange = (lang) => {
    if (languages.includes(lang)) {
      setLanguages(languages.filter(l => l !== lang));
    } else {
      setLanguages([...languages, lang]);
    }
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !gender || !email || !agree) {
      setError("Please fill all required fields and agree to terms.");
      setShowNotification(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return;
    }
    setError('');
    onSubmit();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Get Started Today!</h2>
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>

        <p>Fill in your details and take control of your tasks.</p>

        {/* Custom Notification */}
        {showNotification && (
          <div className="custom-notification">
            {error}
          </div>
        )}

        <div className="form-row">
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={e => setGender(e.target.value)}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={e => setGender(e.target.value)}
              /> Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Language</label>
          <label className='lang'>
            <input
              type="checkbox"
              onChange={() => handleLanguageChange('English')}
              checked={languages.includes('English')}
            /> English
          </label>
          <label className='lang'>
            <input
              type="checkbox"
              onChange={() => handleLanguageChange('Hindi')}
              checked={languages.includes('Hindi')}
            /> Hindi
          </label>
          <label className='lang'>
            <input
              type="checkbox"
              onChange={() => handleLanguageChange('Marathi')}
              checked={languages.includes('Marathi')}
            /> Marathi
          </label>
        </div>

        <input
          className="email-input"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
          /> <span>I agree to the <a href="#">terms and conditions</a></span>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>Done</button>
      </div>
    </div>
  );
}
