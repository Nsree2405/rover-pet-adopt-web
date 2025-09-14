// src/pages/MaleDogs.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/all.css';

const MaleDogs = ({ onNavigate }) => {
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
      name: 'Max',
      age: 44,
      height: 57,
      weight: 28.3,
      photo: '/Images/Male dog/Max.jpg'
    },
    {
      name: 'Buddy',
      age: 16,
      height: 52,
      weight: 22.1,
      photo: '/Images/Male dog/Buddy.jpg'
    },
    {
      name: 'Rocky',
      age: 36,
      height: 55,
      weight: 25.5,
      photo: '/Images/Male dog/Rocky.jpg'
    },
    {
      name: 'Duke',
      age: 25,
      height: 59,
      weight: 21.0,
      photo: '/Images/Male dog/Duke.jpg'
    },
    {
      name: 'Leo',
      age: 84,
      height: 50,
      weight: 29.7,
      photo: '/Images/Male dog/Leo.jpg'
    }
  ].sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  return (
    <>
      <Header onNavigate={onNavigate} />
      <div className="container">
        <h1 className="table-title">Male Adult Dogs Available for Adoption</h1>
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
                <input type="hidden" name=" Height" value={adopting.height} />
                <input type="hidden" name=" Weight" value={adopting.weight} />

             
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

export default MaleDogs;
