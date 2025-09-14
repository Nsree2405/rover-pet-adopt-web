
// not using this integrated in header itself
// src/components/Navbar.jsx
import React from 'react';
import '../App.css';

const Navbar = ({ onNavigate }) => {
  return (
    <header className="myheader">
      <div className="heading1">
        Rover!<sub>Adopt Gracefully</sub>
      </div>
      <nav className="navbar">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('about')}>About</button>
        <button onClick={() => onNavigate('contact')}>Contact</button>
        <button onClick={() => onNavigate('feedback')}>Feedback</button>
      </nav>
    </header>
  );
};

export default Navbar;

// import React from 'react';
// import '../App.css';

// const Navbar = () => {
//   return (
//     <header className="myheader">
//       <div className="heading1">
//         Rover!<sub>Adopt Gracefully</sub>
//       </div>
//       <nav className="navbar">
//         <a href="/">Home</a>
//         <a href="/about.html">About</a>
//         <a href="/contact.html">Contact</a>
//         <a href="/feedback.html">Feedback</a>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;