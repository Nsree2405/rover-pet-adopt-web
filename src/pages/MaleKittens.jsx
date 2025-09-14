// src/pages/MaleKittens.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/all.css';

const MaleKittens = ({ onNavigate }) => {
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
      name: 'Oscar',
      age: 2,
      height: 17,
      weight: 2.1,
      photo: '/Images/Male Kitten/Oscar.jpg'
    },
    {
      name: 'Tiger',
      age: 5,
      height: 13,
      weight: 1.5,
      photo: '/Images/Male Kitten/Tiger.jpg'
    },
    {
      name: 'Binx',
      age: 4,
      height: 15,
      weight: 0.9,
      photo: '/Images/Male Kitten/Binx.jpg'
    },
    {
      name: 'Milo',
      age: 5,
      height: 10,
      weight: 1.1,
      photo: '/Images/Male cat/Milo.jpg'
    },
    {
      name: 'Gizmo',
      age: 6,
      height: 12,
      weight: 2.4,
      photo: '/Images/Male Kitten/Gizmo.jpg'
    },
    {
      name: 'Louie',
      age: 3,
      height: 18,
      weight: 1.8,
      photo: '/Images/Male Kitten/Louie.jpg'
    }
  ].sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  return (
    <>
      <Header onNavigate={onNavigate} />
      <div className="container">
        <h1 className="table-title">Male Kittens Available for Adoption</h1>
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
            {Data.map((cat, index) => (
              <tr key={index}>
                <td>{cat.name.charAt(0).toUpperCase() + cat.name.slice(1).toLowerCase()}</td>
                <td>{cat.age}</td>
                <td>{cat.height}</td>
                <td>{cat.weight}</td>
                <td>
                  <button className="photo-btn" onClick={() => setSelectedPhoto(cat.photo)}>
                    View
                  </button>
                </td>
                <td>
                  <button onClick={() => handleClick(cat)}>Adopt</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
        {selectedPhoto && (
          <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedPhoto} alt="Cat" style={{ width: "500px", height: "500px", objectFit: "cover" }}  />
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

export default MaleKittens;
