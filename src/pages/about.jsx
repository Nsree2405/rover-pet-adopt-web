import React,{useEffect} from 'react';
// import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../styles/about.css'; // optional styling

const teamMembers = [
  {
    name: 'Navyasree Antharam',
    role: 'Frontend Developer',
    phone: '+91 85230 40012',
    email: 'navyasree2405@gmail.com',
    github: 'https://github.com/Nsree2405',
    linkedin: 'https://linkedin.com/in/navya-sree-antharam',
    instagram: 'https://instagram.com/siri',
    image: 'nsree.jpg'
  },
  {
    name: 'SriTulasi Rayapudi',
    role: 'Frontend Developer',
    phone: '+91 90590 85608',
    email: 'rayapudisritulasi@gmail.com',
    github: 'https://github.com/Siri1507',
    linkedin: 'https://linkedin.com/in/sri-tulasi-rayapudi',
    instagram: 'https://instagram.com/',
    image: 'siri.jpeg'
  },
  {
    name: 'Soumya Avula',
    role: 'Frontend Developer',
    phone: '+91 63058 80620',
    email: 'soumyaavula5880@gmail.com',
    github: 'https://github.com/Soumya-048/ITA',
    linkedin: 'https://linkedin.com/in/soumya-reddy-avula',
    instagram: 'https://instagram.com/_soumya_reddyy/',
    image: 'soumya.jpg'
  }
];

const About = ({ onNavigate }) => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      {/* <Navbar onNavigate={onNavigate}/> */}
      <Header onNavigate={onNavigate}/>
      <div className="about-container">
        <h1>About Us</h1>
        <p className="intro-text">Meet the team behind this pet adoption platform:</p>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <img src={member.image} alt={member.name} className="team-photo" />
              <h2>{member.name}</h2>
              <p className="role">{member.role}</p>
              <p><strong>Phone:</strong> <a href={`tel:${member.phone}`}>{member.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>
              <div className="social-links">
                <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
