import React, { useState } from 'react';
import '../styles/HelpButton.css'; // Make sure this file exists

const HelpButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePopup = () => setShowPopup(!showPopup);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      question: 'Q1. What is the age range of male or female puppies?',
      answer: 'The age range of male or female puppies is approximately 0–12 months.'
    },
    {
      question: 'Q2. How can I adopt a dog?',
      answer: 'Click on the “Adopt” button next to a dog listing and fill out the form.'
    },
    {
      question: 'Q3. Are there any adoption fees?',
      answer: 'Adoption is usually free, but some shelters may have a small processing fee.'
    }
  ];

  return (
    <>
      <button className="help-btn" onClick={togglePopup}>
        🐾
      </button>

      {showPopup && (
        <div className="help-popup">
          <button className="close-button" onClick={togglePopup}>×</button>
          <h3>Need Help?</h3>
          {faq.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
                <span>{activeIndex === index ? '▲' : '▼'}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HelpButton;









// // HelpButton.jsx
// import React, { useState } from 'react';
// import '../styles/HelpButton.css';

// const faq = [
//   {
//     question: 'What is age range of male or female puppies?',
//     answer: 'Range of age of male or female puppies is 0-12 months (approx. 1 year).'
//   },
//   {
//     question: 'How to adopt a dog?',
//     answer: 'Click on the Adopt button, fill the form, and we will contact you via email or phone.'
//   },
//   {
//     question: 'How many categories of dogs are available?',
//     answer: 'We currently have Male Adult, Female Adult, and puppy categories.'
//   }
// ];

// const HelpButton = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const togglePopup = () => setShowPopup(!showPopup);

//   const toggleAnswer = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <>
//       <button className="help-button" onClick={togglePopup}>?</button>
//       {showPopup && (
//   <div className="help-popup">
//     <button className="close-button" onClick={togglePopup}>×</button>
//     <h3>Need Help?</h3>
//     {faq.map((item, index) => (
//       <div className="faq-item" key={index}>
//         <div className="faq-question" onClick={() => toggleFAQ(index)}>
//           {item.question}
//           <span>{activeIndex === index ? '▲' : '▼'}</span>
//         </div>
//         {activeIndex === index && (
//           <div className="faq-answer">{item.answer}</div>
//         )}
//       </div>
//     ))}
//   </div>
// )}*

/*
{showPopup && (
        <div className="help-popup">
          <h3>Need Help?</h3>
          <ul>
            {faqData.map((faq, index) => (
              <li key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleAnswer(index)}>
                  {faq.question} <span>{expandedIndex === index ? '▼' : '▶'}</span>
                </div>
                {expandedIndex === index && <p className="faq-answer">{faq.answer}</p>}
              </li>
            ))}
          </ul>
        </div>
      )} 
    </>
  );
};

export default HelpButton;*/
