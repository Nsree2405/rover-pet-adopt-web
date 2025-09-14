// src/pages/FemaleDogs.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/all.css';

const FemaleDogs = ({ onNavigate }) => {
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

  const Data = [
    {
      name: 'Bella',
      age: 14,
      height: 48,
      weight: 17.4,
      photo: '/Images/Female dog/Bella.jpg'
    },
    {
      name: 'Daisy',
      age: 30,
      height: 54,
      weight: 24.5,
      photo: '/Images/Female dog/Daisy.jpg'
    },
    {
      name: 'Lucy',
      age: 23,
      height: 45,
      weight: 18.7,
      photo: '/Images/Female dog/Lucy.jpg'
    },
    {
      name: 'Molly',
      age: 50,
      height: 47,
      weight: 21.6,
      photo: '/Images/Female dog/Molly.jpg'
    },
    {
      name: 'Zoe',
      age: 62,
      height: 51,
      weight: 18.6,
      photo: '/Images/Female dog/Zoe.jpg'
    }
    ].sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  return (
    <>
      <Header onNavigate={onNavigate} />
      <div className="container">
        <h1 className="table-title">Female Adult Dogs Available for Adoption</h1>
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
                  <button className="photo-btn" onClick={() => setSelectedPhoto(dog.photo)}>View</button>
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
            
                <input type="hidden" name=" Name" value={adopting.name} />
                <input type="hidden" name=" Age" value={adopting.age} />
                <input type="hidden" name=" Height" value={adopting.height} />
                <input type="hidden" name=" Weight" value={adopting.weight} />

          
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} required />
                <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleFormChange} required />

                <button type="submit2">Submit</button>
              </form>
              <button className="close-button2" onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FemaleDogs;
