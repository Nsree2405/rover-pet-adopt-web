import React from 'react';

const CategoryCard = ({ label, imgSrc, onClick }) => {
  return (
    <div className="all" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={imgSrc} alt={label} />
      <p>{label}</p>
    </div>
  );
};

export default CategoryCard;