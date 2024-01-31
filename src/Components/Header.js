import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitterSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="index.html"><img src="Images/Logo.svg" alt="Logotype" /></a>
        <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
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
                <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              </nav>
            </div>
          </div>
          <div className="main-menu">
            <nav>
                <Link to="/home">Home</Link>
                <a href="services.html">Service</a>
                <a href="news.html">News</a>
                <Link to="/contact">Contact</Link>
            </nav>
            <a className="btn-yellow" href="Login">Login <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
