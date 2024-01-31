import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitterSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('https://win23-assignment.azurewebsites.net/api/contactform', formData);

      if (response.status === 200) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <a href="index.html"><img src="Images/Logo.svg" alt="Logotype" /></a>
        <button className="menu-bars"><FontAwesomeIcon icon={faBars} /></button>
        <div className="menu">
          <div className="top-menu">
            <div className="contact-information">
              <div className="content-box">
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                +46 (8) 121 470 50
              </div>
              <div className="content-box">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
                info@crito.com
              </div>
              <div className="content-box last">
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '5px' }} />
                Sveavägen 31, 111 34 STOCKHOLM
              </div>
            </div>
            <div className="social-media">
              <nav>
                <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </nav>
            </div>
          </div>
          <div className="main-menu">
            <nav>
              <div className="button-container">
                <Link to="/">Home</Link>
                <a className="active" href="index.html">Contact</a>
              </div>
              <div className="connect-section">
                <h1 className="connect-heading">Let's Connect</h1>
                <p className="section-text">Leave us a message for any information.</p>
                {formSubmitted ? (
                  <p>Message Sent!</p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message*"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    <button type="submit" className="btn-yellow btn-submit">
                      Send Message <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </form>
                )}
              </div>
            </nav>
            <a className="btn-yellow" href="Login">Login <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Contact;
