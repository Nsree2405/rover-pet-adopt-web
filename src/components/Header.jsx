
import React, { useState } from 'react';
import '../styles/header.css';

const Header = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  /* Categories */
  const MD = ['Buddy','Duke','Leo','Max','Rocky'].sort();
  const FD = ['Bella','Daisy','Lucy','Molly','Zoe'].sort();
  const MP = ['Charlie','Cooper','Finn','Hero','Teddy','Toby'].sort();
  const FP = ['Lilly','Maggie','Mia','Peanut','Rosie','Ruby'].sort();
  const MC = ['Alex','Lambo','Jasper','Oliver','Simba'].sort();
  const FC = ['Chloe','Luna','Nala','Sugar','Willow'].sort();
  const MK = ['Binx','Gizmo','Louie','Milo','Oscar','Tiger'].sort();
  const FK = ['Angel','Cleo','Ivy','Maple','Mochi'].sort();

  const all = [...MD, ...FD, ...MP, ...FP, ...MC, ...FC, ...MK, ...FK];
  const allCategories = [
    'maleDogs',
    'femaleDogs',
    'malePups',
    'femalePups',
    'maleCats',
    'femaleCats',
    'maleKittens',
    'femaleKittens'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.toLowerCase().trim();

    switch (true) {
      case MD.map(n => n.toLowerCase()).includes(query):
      case query.includes('male') && (query.includes('dog') || query.includes('dogs')):
        onNavigate('maleDogs');
        break;

      case FD.map(n => n.toLowerCase()).includes(query):
      case query.includes('female') && (query.includes('dog') || query.includes('dogs')):
        onNavigate('femaleDogs');
        break;

      case MP.map(n => n.toLowerCase()).includes(query):
      case query.includes('male') && (query.includes('puppy') || query.includes('puppies')):
        onNavigate('malePups');
        break;

      case FP.map(n => n.toLowerCase()).includes(query):
      case query.includes('female') && (query.includes('puppy') || query.includes('puppies')):
        onNavigate('femalePups');
        break;

      case MC.map(n => n.toLowerCase()).includes(query):
      case query.includes('male') && (query.includes('cat') || query.includes('cats')):
        onNavigate('maleCats');
        break;

      case FC.map(n => n.toLowerCase()).includes(query):
      case query.includes('female') && (query.includes('cat') || query.includes('cats')):
        onNavigate('femaleCats');
        break;

      case MK.map(n => n.toLowerCase()).includes(query):
      case query.includes('male') && (query.includes('kitten') || query.includes('kittens')):
        onNavigate('maleKittens');
        break;

      case FK.map(n => n.toLowerCase()).includes(query):
      case query.includes('female') && (query.includes('kitten') || query.includes('kittens')):
        onNavigate('femaleKittens');
        break;

      default:
        alert('No results found!');
    }

    setSuggestions([]);
    setSearchTerm('');
    setIsSearchFocused(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(e.target.value); // keep original case for display

    const filtered = [...all, ...allCategories].filter(item =>
      item.toLowerCase().includes(value)
    );
    setSuggestions(filtered.slice(0, 5));
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);

    const query = suggestion.toLowerCase().trim();

    switch (true) {
      case MD.map(n => n.toLowerCase()).includes(query):
      case query.includes('male') && (query.includes('dog') || query.includes('dogs')):
        onNavigate('maleDogs');
        break;

      case FD.map(n => n.toLowerCase()).includes(query):
      case query.includes('female') && (query.includes('dog') || query.includes('dogs')):
        onNavigate('femaleDogs');
        break;

      case MP.map(n => n.toLowerCase()).includes(query):
      case query.includes('male') && (query.includes('puppy') || query.includes('puppies')):
        onNavigate('malePups');
        break;

      case FP.map(n => n.toLowerCase()).includes(query):
      case query.includes('female') && (query.includes('puppy') || query.includes('puppies')):
        onNavigate('femalePups');
        break;

      case MC.map(n => n.toLowerCase()).includes(query):
      case query.includes('male') && (query.includes('cat') || query.includes('cats')):
        onNavigate('maleCats');
        break;

      case FC.map(n => n.toLowerCase()).includes(query):
      case query.includes('female') && (query.includes('cat') || query.includes('cats')):
        onNavigate('femaleCats');
        break;

      case MK.map(n => n.toLowerCase()).includes(query):
      case query.includes('male') && (query.includes('kitten') || query.includes('kittens')):
        onNavigate('maleKittens');
        break;

      case FK.map(n => n.toLowerCase()).includes(query):
      case query.includes('female') && (query.includes('kitten') || query.includes('kittens')):
        onNavigate('femaleKittens');
        break;

      default:
        alert('No results found!');
    }

    setIsSearchFocused(false);
  };

  return (
    <header className="myheader">
      <div className="header-left">
        <h1 className="heading1">
          Rover!<sub>Adopt gracefully</sub>
        </h1>
      </div>

      <div className="header-center">
        <form
          className="search-form"
          onSubmit={handleSearch}
          autoComplete="off"
          style={{ position: 'relative' }}
        >
          <input
            className="search-input"
            type="search"
            placeholder="Find your homie here..."
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 150)}
          />
          <button className="search-button" type="submit">
            Search
          </button>

          {isSearchFocused && suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((item, idx) => (
                <li key={idx} onMouseDown={() => handleSuggestionClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>

      <nav className="header-right">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('about')}>About</button>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;



// import React, { useState } from 'react';
// import '../styles/header.css';

// const Header = ({ onNavigate }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [isSearchFocused, setIsSearchFocused] = useState(false);

//   const maleAdultDogs = ['bruno', 'max', 'rocky', 'z'].sort();
//   const FD = ['beauty', 'daisy', 'luna', 'sweety'].sort();

//   const allDogs = [...maleAdultDogs, ...FD];
//   const allCategories = [
//     'male adult',
//     'female adult',
//     'male puppy',
//     'female puppy'
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const query = searchTerm.toLowerCase().trim();

//     switch (true) {
//       case maleAdultDogs.includes(query):
//       case query.includes('male') && query.includes('adult'):
//         onNavigate('adultMale');
//         break;

//       case FD.includes(query):
//       case query.includes('female') && query.includes('adult'):
//         onNavigate('adultFemale');
//         break;

//       case query.includes('male') && query.includes('puppy'):
//         alert('Male Puppy page not added yet');
//         break;

//       case query.includes('female') && query.includes('puppy'):
//         alert('Female Puppy page not added yet');
//         break;

//       default:
//         alert('No results found!');
//     }

//     setSuggestions([]);
//     setSearchTerm('');
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filtered = [...allDogs, ...allCategories].filter(item =>
//       item.toLowerCase().includes(value)
//     );
//     setSuggestions(filtered.slice(0, 5));
//   };

//   const handleSuggestionClick = (suggestion) => {
//   setSearchTerm(suggestion);
//   setSuggestions([]);

//   const query = suggestion.toLowerCase().trim();

//   switch (true) {
//     case maleAdultDogs.includes(query):
//     case query.includes('male') && query.includes('adult'):
//       onNavigate('adultMale');
//       break;

//     case FD.includes(query):
//     case query.includes('female') && query.includes('adult'):
//       onNavigate('adultFemale');
//       break;

//     case query.includes('male') && query.includes('puppy'):
//       alert('Male Puppy page not added yet');
//       break;

//     case query.includes('female') && query.includes('puppy'):
//       alert('Female Puppy page not added yet');
//       break;

//     default:
//       alert('No results found!');
//   }
// };
//   // const handleSuggestionClick = (suggestion) => {
//   //   setSearchTerm(suggestion);
//   //   setSuggestions([]);
//   // };

//   return (
//     <header className="myheader">
//       <div className="header-left">
//         <h1 className="heading1">
//           Rover!<sub>Adopt gracefully</sub>
//         </h1>
//       </div>

//       <div className="header-center">
//         <form
//           className="search-form"
//           onSubmit={handleSearch}
//           autoComplete="off"
//           style={{ position: 'relative' }}
//         >
//           <input
//             className="search-input"
//             type="search"
//             placeholder="Find your homie here..."
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           <button className="search-button" type="submit">
//             Search
//           </button>

//           {suggestions.length > 0 && (
//             <ul className="suggestions-list">
//               {suggestions.map((item, idx) => (
//                 <li key={idx} onClick={() => handleSuggestionClick(item)}>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </form>
//       </div>

//       <nav className="header-right">
//         <button onClick={() => onNavigate('home')}>Home</button>
//         <button onClick={() => onNavigate('about')}>About</button>
//         <button onClick={() => onNavigate('contact')}>Contact</button>
//         <button onClick={() => onNavigate('feedback')}>Feedback</button>
//       </nav>
//     </header>
//   );
// };

// export default Header;



// import React, { useState } from 'react';
// import '../styles/header.css';

// const Header = ({ onNavigate }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const maleAdultDogs = ['bruno', 'max', 'rocky', 'z'].sort();
//   const FD = ['beauty', 'daisy', 'luna', 'sweety'].sort();

//   const allDogs = [...maleAdultDogs, ...FD];
//   const allCategories = [
//     'male adult',
//     'female adult',
//     'male puppy',
//     'female puppy'
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const query = searchTerm.toLowerCase().trim();

//     switch (true) {
//       case maleAdultDogs.includes(query):
//       case query.includes('male') && query.includes('adult'):
//         onNavigate('adultMale');
//         break;

//       case FD.includes(query):
//       case query.includes('female') && query.includes('adult'):
//         onNavigate('adultFemale');
//         break;

//       case query.includes('male') && query.includes('puppy'):
//         alert('Male Puppy page not added yet');
//         break;

//       case query.includes('female') && query.includes('puppy'):
//         alert('Female Puppy page not added yet');
//         break;

//       default:
//         alert('No results found!');
//     }
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filtered = [...allDogs, ...allCategories].filter(item =>
//       item.toLowerCase().includes(value)
//     );
//     setSuggestions(filtered.slice(0, 5));
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//     setSuggestions([]);
//   };

//   return (
//     <header className="myheader">
//       <div className="header-left">
//         <h1 className="heading1">
//           Rover!<sub>Adopt gracefully</sub>
//         </h1>
//       </div>

//       <div className="header-center">
//         <form className="search-form" onSubmit={handleSearch} autoComplete="off">
//           <input
//             className="search-input"
//             type="search"
//             placeholder="Find your homie here..."
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           <button className="search-button" type="submit">Search</button>
//           {suggestions.length > 0 && (
//             <ul className="suggestions-list">
//               {suggestions.map((item, idx) => (
//                 <li key={idx} onClick={() => handleSuggestionClick(item)}>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </form>
//       </div>

//       <nav className="header-right">
//         <button onClick={() => onNavigate('home')}>Home</button>
//         <button onClick={() => onNavigate('about')}>About</button>
//         <button onClick={() => onNavigate('contact')}>Contact</button>
//         <button onClick={() => onNavigate('feedback')}>Feedback</button>
//       </nav>
//     </header>
//   );
// };

// export default Header;




//v3
// import React, { useState } from 'react';
// import '../styles/header.css';

// const Header = ({ onNavigate }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // ✅ Sorted alphabetically
//   const maleAdultDogs = ['bruno', 'max', 'rocky', 'z'].sort();
//   const FD = ['beauty', 'daisy', 'luna', 'sweety'].sort();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const query = searchTerm.toLowerCase().trim();

//     switch (true) {
//       case maleAdultDogs.includes(query):
//         onNavigate('adultMale');
//         break;

//       case FD.includes(query):
//         onNavigate('adultFemale');
//         break;

//       case query.includes('male') && query.includes('adult'):
//         onNavigate('adultMale');
//         break;

//       case query.includes('female') && query.includes('adult'):
//         onNavigate('adultFemale');
//         break;

//       case query.includes('male') && query.includes('puppy'):
//         alert('Male Puppy page not added yet');
//         break;

//       case query.includes('female') && query.includes('puppy'):
//         alert('Female Puppy page not added yet');
//         break;

//       default:
//         alert('No results found!');
//     }
//   };

//   return (
//     <header className="myheader">
//       {/* Left: Logo */}
//       <div className="header-left">
//         <h1 className="heading1">
//           Rover!<sub>Adopt gracefully</sub>
//         </h1>
//       </div>

//       {/* Center: Search Bar */}
//       <div className="header-center">
//         <form className="search-form" onSubmit={handleSearch}>
//           <input
//             className="search-input"
//             type="search"
//             placeholder="Find your homie here..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="search-button" type="submit">Search</button>
//         </form>
//       </div>

//       {/* Right: Navbar */}
//       <nav className="header-right">
//         <button onClick={() => onNavigate('home')}>Home</button>
//         <button onClick={() => onNavigate('about')}>About</button>
//         <button onClick={() => onNavigate('contact')}>Contact</button>
//         <button onClick={() => onNavigate('feedback')}>Feedback</button>
//       </nav>
//     </header>
//   );
// };

// export default Header;




//v2
// import React, { useState } from 'react';
// import '../styles/header.css';

// const Header = ({ onNavigate }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const query = searchTerm.toLowerCase().trim();

//     if (['max', 'bruno', 'rocky', 'z'].includes(query)) {
//       onNavigate('adultMale');
//     }else if (['daisy', 'luna', 'sweety', 'beauty'].includes(query)) {
//       onNavigate('adultMale');
//     }else if (query.includes('male') && query.includes('adult')) {
//       onNavigate('adultMale');
//     }else if (query.includes('male') && query.includes('adult')) {
//       onNavigate('adultMale');
//     } else if (query.includes('female') && query.includes('adult')) {
//       onNavigate('adultFemale');
//     } else if (query.includes('male') && query.includes('puppy')) {
//       alert('Male Puppy page not added yet');
//     } else if (query.includes('female') && query.includes('puppy')) {
//       alert('Female Puppy page not added yet');
//     } else {
//       alert('No results found!');
//     }
//   };

//   return (
//     <header className="myheader">
//       {/* Left: Logo */}
//       <div className="header-left">
//         <h1 className="heading1">
//           Rover!<sub>Adopt gracefully</sub>
//         </h1>
//       </div>

//       {/* Center: Search Bar */}
//       <div className="header-center">
//         <form className="search-form" onSubmit={handleSearch}>
//           <input
//             className="search-input"
//             type="search"
//             placeholder="Find your homie here..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="search-button" type="submit">Search</button>
//         </form>
//       </div>

//       {/* Right: Navbar */}
//       <nav className="header-right">
//         <button onClick={() => onNavigate('home')}>Home</button>
//         <button onClick={() => onNavigate('about')}>About</button>
//         <button onClick={() => onNavigate('contact')}>Contact</button>
//         <button onClick={() => onNavigate('feedback')}>Feedback</button>
//       </nav>
//     </header>
//   );
// };

// export default Header;


//v1
// import React from 'react';
// import '../styles/header.css';

// const Header = ({ onNavigate }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const query = searchTerm.toLowerCase().trim();

//     if (['max', 'x', 'y', 'z'].includes(query)) {
//       onNavigate('adultMale');
//     } else if (query.includes('male') && query.includes('adult')) {
//       onNavigate('adultMale');
//     } else if (query.includes('female') && query.includes('adult')) {
//       onNavigate('adultFemale');
//     } else if (query.includes('male') && query.includes('puppy')) {
//       alert('Male Puppy page not added yet');
//     } else if (query.includes('female') && query.includes('puppy')) {
//       alert('Female Puppy page not added yet');
//     } else {
//       alert('No results found!');
//     }
//   };
//   return (
//     <header className="myheader">
//       {/* Left: Logo */}
//       <div className="header-left">
//         <h1 className="heading1">
//           Rover!<sub>Adopt gracefully</sub>
//         </h1>
//       </div>

//       {/* Center: Search Bar */}
//       <div className="header-center">
//         <form className="search-form">
//           <input
//             className="search-input"
//             type="search"
//             placeholder="Find your homie here..."
//           />
//           <button className="search-button" type="submit">
//             Search
//           </button>
//         </form>
//       </div>

//       {/* Right: Navbar */}
//       <nav className="header-right">
//         <button onClick={() => onNavigate('home')}>Home</button>
//         <button onClick={() => onNavigate('about')}>About</button>
//         <button onClick={() => onNavigate('contact')}>Contact</button>
//         <button onClick={() => onNavigate('feedback')}>Feedback</button>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// // import React from 'react';
// // import SearchBar from './SearchBar';

// // const Header = () => (
// //   <header className="myheader">
// //     <h1 className="heading1">Rover!<sub style={{ fontSize: '17px' }}>Adopt gracefully</sub></h1>
// //   </header>
// // );

// // export default Header;