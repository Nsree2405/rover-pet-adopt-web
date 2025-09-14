// src/pages/FemalePups.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/all.css';

const FemalePups = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [adopting, setAdopting] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleClick = (animal) => {
    setAdopting(animal);
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Alphabetically sorted  data
  const Data = [
    {
      name: 'Rosie',
      age: 3,
      height: 28,
      weight: 5.1,
      photo: '/Images/Female Puppy/Rosie.jpg'
    },
    {
      name: 'Lilly',
      age: 6,
      height: 32,
      weight: 7.7,
      photo: '/Images/Female Puppy/Lilly.jpg'
    },
    {
      name: 'Mia',
      age: 4,
      height: 24,
      weight: 8.6,
      photo: '/Images/Female Puppy/Mia.jpg'
    },
    {
      name: 'Peanut',
      age: 2,
      height: 19,
      weight: 4.1,
      photo: '/Images/Female Puppy/Peanut.jpg'
    },
    {
      name: 'Maggie',
      age: 4,
      height: 16,
      weight: 5.5,
      photo: '/Images/Female Puppy/Ruby.jpg'
    },
    {
      name: 'Ruby',
      age: 5,
      height: 21,
      weight: 7.3,
      photo: '/Images/Female Puppy/Ruby.jpg'
    }
  ].sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  return (
    <>
      <Header onNavigate={onNavigate} />
      <div className="container">
        <h1 className="table-title">Female Puppies Available for Adoption</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age (months)</th>
              <th>Height (cm)</th>
              <th>Weight (kg)</th>
              <th>Photo</th>
              <th>Adopt</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((dog, index) => (
              <tr key={index}>
                <td>{dog.name.charAt(0).toUpperCase() + dog.name.slice(1).toLowerCase()}</td>
                <td>{dog.age}</td>
                <td>{dog.height}</td>
                <td>{dog.weight}</td>
                <td>
                  <button className="photo-btn" onClick={() => setSelectedPhoto(dog.photo)}>
                    View
                  </button>
                </td>
                <td>
                  <button onClick={() => handleClick(dog)}>Adopt</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
        {selectedPhoto && (
          <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedPhoto} alt="Dog" style={{ width: "500px", height: "500px", objectFit: "cover" }} />
              <button className="close-button" onClick={() => setSelectedPhoto(null)}>Close</button>
            </div>
          </div>
        )}

        {showForm && adopting && (
          <div className="modal-overlay2" onClick={() => setShowForm(false)}>
            <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
              <h2>Adopt {adopting.name}</h2>
              <form
                action="https://formspree.io/f/xanjgael"
                method="POST"
                className="adoption-form"
              >
                <input type="hidden" name="Name" value={adopting.name} />
                <input type="hidden" name="Age" value={adopting.age} />
                <input type="hidden" name="Height" value={adopting.height} />
                <input type="hidden" name="Weight" value={adopting.weight} />

             
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />

                <button type="submit">Submit</button>
              </form>
              <button className="close-button2" onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FemalePups;
