import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
// import Feedback from './pages/Feedback';

// dogs
import MaleDogs from './pages/MaleDogs';
import FemaleDogs from './pages/FemaleDogs';
import MalePups from './pages/MalePups';
import FemalePups from './pages/FemalePups';

//cats
import MaleCats from './pages/MaleCats';
import FemaleCats from './pages/FemaleCats';
import MaleKittens from './pages/MaleKittens';
import FemaleKittens from './pages/FemaleKittens';
function App() {
  // Load the last page from localStorage or default to 'home'
  const [page, setPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('currentPage', page);
    window.scrollTo(0, 0); // scroll to top on page change
  }, [page]);

  // ✅ Page rendering logic
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={setPage} />;
      case 'about':
        return <About onNavigate={setPage} />;
      case 'contact':
        return <Contact onNavigate={setPage} />;
      // case 'feedback':
      //   return <Feedback onNavigate={setPage} />;
      // dogs
      case 'maleDogs':
        return <MaleDogs onNavigate={setPage} />;
      case 'femaleDogs':
        return <FemaleDogs onNavigate={setPage} />;
      case 'malePups':
        return <MalePups onNavigate={setPage} />;
      case 'femalePups':
        return <FemalePups onNavigate={setPage} />;
      
      //cats
      case 'maleCats':
        return <MaleCats onNavigate={setPage} />;
      case 'femaleCats':
        return <FemaleCats onNavigate={setPage} />;
      case 'maleKittens':
        return <MaleKittens onNavigate={setPage} />;
      case 'femaleKittens':
        return <FemaleKittens onNavigate={setPage} />;
      default:
        return <Home onNavigate={setPage} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;


// src/App.js
// import React, { useState, useEffect } from 'react';
// import Home from './pages/Home';
// import About from './pages/about';
// import Contact from './pages/contact';
// // import Feedback from './pages/Feedback';
// import AdultMaleDogs from './pages/AdultMaleDogs';
// import AdultFemaleDogs from './pages/AdultFemaleDogs';

// function App() {
//   // Load the last page from localStorage or default to 'home'
//   const [page, setPage] = useState(() => {
//     return localStorage.getItem('currentPage') || 'home';
//   });

//   useEffect(() => {
//     localStorage.setItem('currentPage', page);
//     window.scrollTo(0, 0); // scroll to top on page change
//   }, [page]);

//   const renderPage = () => {
//     switch (page) {
//       case 'home':
//         return <Home onNavigate={setPage} />;
//       case 'about':
//         return <About onNavigate={setPage} />;
//       case 'contact':
//         return <Contact onNavigate={setPage} />;
//       // case 'feedback':
//       //   return <Feedback onNavigate={setPage} />;
//       case 'adultMale':
//         return <AdultMaleDogs onNavigate={setPage} />;
//       case 'adultFemale':
//         return <AdultFemaleDogs onNavigate={setPage} />;
//       default:
//         return <Home onNavigate={setPage} />;
//     }
//   };

//   return <div>{renderPage()}</div>;
// }

// export default App;


// // src/App.js
// import React, { useState } from 'react';
// import Home from './pages/Home';
// import About from './pages/about';
// import Contact from './pages/contact';
// // import Feedback from './pages/Feedback';
// import AdultMaleDogs from './pages/AdultMaleDogs';
// import AdultFemaleDogs from './pages/AdultFemaleDogs';

// function App() {
//   const [page, setPage] = useState('home');

//   const renderPage = () => {
//     switch (page) {
//       case 'home':
//         return <Home onNavigate={setPage} />;
//       case 'about':
//         return <About onNavigate={setPage} />;
//       case 'contact':
//         return <Contact onNavigate={setPage} />;
//       case 'feedback':
//         return <Feedback onNavigate={setPage} />;
//       case 'adultMale':
//         return <AdultMaleDogs onNavigate={setPage} />;
//       case 'adultFemale':
//         return <AdultFemaleDogs onNavigate={setPage} />;
//       default:
//         return <Home onNavigate={setPage} />;
//     }
//   };

//   return (
//     <div>
//       {renderPage()}
//     </div>
//   );
// }

// export default App;

// // import React from 'react';
// // import Home from './pages/Home';
// // import './App.css';

// // function App() {
// //   return <Home />;
// // }

// // export default App;

