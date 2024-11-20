"use client";
import React, { useState } from 'react';
import "../../globals.css";
import "../../styles.css";
const DownloadApp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending SMS to:', phoneNumber);
    // Add your SMS sending logic here
  };

  return (
    <section className="container-fullWidth">
      <div className="app-section-div download-section">
        <div className="image-container">
          <img
            src="footer-img.webp"
            alt="download"
            className="download-image"
          />
        </div>
        <div className="content-container">
          <div className="app-info size2">
            <h1 className="app-title">Download the Astro369 app</h1>
            <p className="app-description txtsize">
              Access video consultation with India's top doctors on the Astro369
              app. Connect with doctors online, available 24/7, from the comfort
              of your home.
            </p>
          </div>
          <div className="download-link">
            <h4 className="link-title size2">Get the link to download the app</h4>
            <form onSubmit={handleSubmit} style={{padding: 0}}>
              <div className="phone-input-wrapper">
                <div className="phone-input-container">
                  <div className="phone-input">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      pattern="[0-9]{10}"
                      required
                      className="phone-number-input"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="send-sms-button txtsize">
                  Send SMS
                </button>
              </div>
            </form>
          </div>
          <div className="store-buttons">
            <button className="google-play-button">Google Play</button>
            <button className="app-store-button">App Store</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp; 