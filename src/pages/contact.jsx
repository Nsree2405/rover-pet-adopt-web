import React,{ useEffect } from 'react';
// import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../styles/contact.css'; // Optional styling

const Contact = ({ onNavigate }) => {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Header onNavigate={onNavigate}/>
      {/* <Navbar onNavigate={onNavigate}/> */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out through any of the platforms below.</p>

        <div className="contact-links">
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+9185230 40012">+91 8523040012</a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:sayitqwerty@gmail.com">sayitqwerty@gmail.com</a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/Nsree2405" target="_blank" rel="noopener noreferrer">
              Nsree2405
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/navya-sree-antharam" target="_blank" rel="noopener noreferrer">
              navya-sree-antharam
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{' '}
            <a href="https://www.instagram.com/siri" target="_blank" rel="noopener noreferrer">
              siri1507
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
