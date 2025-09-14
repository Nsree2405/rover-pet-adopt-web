// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = ({ onNavigate }) => (
  <footer className="custom-footer">
    <div className="footer-content">
      {/* Brand Section */}
      <div className="footer-section brand">
        <h2>🐾 Rover</h2>
        <p>Connecting paws with homes 💙</p>
        <div className="footer-icons">
          <a href="https://github.com/Nsree2405" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://instagram.com/siri" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Explore Section - Split into Dogs and Cats */}
      <div className="footer-section explore-columns">
        <h3>Explore</h3>
        <div className="explore-split">
          <ul>
            <li onClick={() => onNavigate('maleDogs')}>Male Dog</li>
            <li onClick={() => onNavigate('femaleDogs')}>Female Dog</li>
            <li onClick={() => onNavigate('malePups')}>Male Puppy</li>
            <li onClick={() => onNavigate('femalePups')}>Female Puppy</li>
          </ul>
          <ul>
            <li onClick={() => onNavigate('maleCats')}>Male Cat</li>
            <li onClick={() => onNavigate('femaleCats')}>Female Cat</li>
            <li onClick={() => onNavigate('maleKittens')}>Male Kitty</li>
            <li onClick={() => onNavigate('femaleKittens')}>Female Kitty</li>
          </ul>
        </div>
      </div>

      {/* Site Section */}
      <div className="footer-section">
        <h3>Site</h3>
        <ul>
          <li><button onClick={() => onNavigate('home')}>Home</button></li>
          <li><button onClick={() => onNavigate('about')}>About</button></li>
          <li><button onClick={() => onNavigate('contact')}>Contact</button></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="footer-section">
        <h3>Contact</h3>
        <p><FaEnvelope /> sayitqwerty</p><br />
        <p><FaPhone /> +91 8523040012</p><br />
        <p><FaMapMarkerAlt /> Hyderabad, Telangana 500086, India</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2024-2025 Rover. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;


//VV
// import React from 'react';
// import { FaGithub, FaInstagram, FaEnvelope, FaPhone,FaMapMarkerAlt } from 'react-icons/fa';
// import '../styles/footer.css'; 

// const Footer = ({ onNavigate }) => (
//   <footer className="custom-footer">
//     <div className="footer-content">
//       {/* Left Section */}
//       <div className="footer-section brand">
//         <h2>🐾 Rover</h2>
//         <p>Connecting paws with homes 💙</p>
//         <div className="footer-icons">
//           {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
//             <FaFacebook />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
//             <FaTwitter />
//           </a> */}
//           <a href="https://github.com/Nsree2405" target="_blank" rel="noopener noreferrer" title="GitHub">
//             <FaGithub />
//           </a>
//           <a href="https://instagram.com/siri" target="_blank" rel="noopener noreferrer" title="Instagram">
//             <FaInstagram />
//           </a>
//         </div>
//       </div>

//       {/* Explore Section */}
//       <div className="footer-section">
//         <h3>Explore</h3>
//         <ul>
//           <li onClick={() => onNavigate('maleDogs')}> Male Dog </li>
//           <li onClick={() => onNavigate('femaleDogs')}> Female Dog</li>
//           <li onClick={() => onNavigate('malePups')}> Male Puppy</li>
//           <li onClick={() => onNavigate('femalePups')}> Female Puppy</li>
//           <li onClick={() => onNavigate('maleCats')}> Male Cat</li>
//           <li onClick={() => onNavigate('femaleCats')}> Female Cat</li>
//           <li onClick={() => onNavigate('maleKittens')}> Male Kitty</li>
//           <li onClick={() => onNavigate('femaleKittens')}> Female Kitty</li>
//         </ul>
//       </div>

//       {/* Site Section */}
//       <div className="footer-section">
//         <h3>Site</h3>
//         <ul>
//           <li><button onClick={() => onNavigate('home')}>Home</button></li>
//           <li><button onClick={() => onNavigate('about')}>About</button></li>
//           <li><button onClick={() => onNavigate('contact')}>Contact</button></li>
//           {/* <li><button onClick={() => onNavigate('feedback')}>Feedback</button></li> */}
//         </ul>
//       </div>

//       {/* Contact Section */}
//       <div className="footer-section">
//         <h3>Contact</h3>
//         <p><FaEnvelope/> sayitqwerty</p><br />
//         <p><FaPhone/> +91 8523040012</p><br />
//         <p><FaMapMarkerAlt/> Hyderabad, Telangana 500086, India</p>
//       </div>
//     </div>

//     <div className="footer-bottom">
//       <p>© 2024-2025 Rover. All rights reserved.</p>
//     </div>
//   </footer>
// );

// export default Footer;


// import React from 'react';

// const Footer = ({ onNavigate }) => (
//   <footer>
//     <div className="myfooter"> 
//       <div id="card1"> 
//         <button onClick={() => onNavigate('contact')}>Contact Us</button>
//       </div>
//       <div id="card2">
//         <button onClick={() => onNavigate('about')}>About</button>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;
