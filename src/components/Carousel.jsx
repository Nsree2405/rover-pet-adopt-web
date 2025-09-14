import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';

const dogImages = [
  {
    url: '/Images/Male dog/Leo.jpg',
    description: 'Leo! A brave and Friendly protector.'
  },
  {
    url: '/Images/Female dog/Bella.jpg',
    description: 'Meet Bella! A loyal and playful companion.'
  },
  {
    url: '/Images/Male puppy/Hero.jpg',
    description: 'Hero is gentle and great with kids.'
  },
  {
    url: '/Images/Female puppy/Maggie.jpg',
    description: 'Maggie is Playful and loves treats.'
  },
  {
    url: '/Images/Male cat/Alex.jpg',
    description: 'Alex is calm and Gentleman.'
  },
  {
    url: '/Images/Female Cat/Sugar.jpg',
    description: 'Sugar is energetic and loves fetching balls!'
  },
  {
    url: '/Images/Male Kitten/Milo.jpg',
    description: 'Milo is innocent and well-behaved.'
  },
  {
    url: '/Images/Female Kitten/Cleo.jpg',
    description: 'Cleo is calm, cuddly, and charming.'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? dogImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dogImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={prevSlide}>&lt;</button>
      <div className="carousel-slide">
        <img src={dogImages[currentIndex].url} alt={`Dog ${currentIndex}`} />
        <div className="description">{dogImages[currentIndex].description}</div>
      </div>
      <button className="carousel-btn right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Carousel;
