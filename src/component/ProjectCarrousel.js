import React, { useState } from 'react';
import './ProjectCarrousel.css';

const ProjectCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="project-carousel">
      <div className="container-slider-wrapper">
        <button onClick={prevSlide} className="slide-button material-symbols-rounded">Précédent</button>
        <img src={images[currentImageIndex]} alt={`Project Slide ${currentImageIndex + 1}`} />
        <button onClick={nextSlide} className="slide-button material-symbols-rounded">Suivant</button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
