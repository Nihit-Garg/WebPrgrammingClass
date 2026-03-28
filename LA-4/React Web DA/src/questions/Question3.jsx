import React, { useState } from 'react';
import './Question3.css';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=1000', alt: 'Mountain Landscape' },
  { id: 2, url: 'https://images.unsplash.com/photo-1682687962501-1e58f813f228?auto=format&fit=crop&q=80&w=1000', alt: 'Desert Dunes' },
  { id: 3, url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=1000', alt: 'Ocean Waves' },
  { id: 4, url: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?auto=format&fit=crop&q=80&w=1000', alt: 'Forest Path' },
  { id: 5, url: 'https://images.unsplash.com/photo-1682686560950-891d1eaeb3f8?auto=format&fit=crop&q=80&w=1000', alt: 'City Skyline' },
  { id: 6, url: 'https://images.unsplash.com/photo-1682687981922-7b55f38ce716?auto=format&fit=crop&q=80&w=1000', alt: 'Snowy Peaks' }
];

const Question3 = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h3>Nihit Garg - 24BCE0627</h3>
        <h2>Interactive Image Gallery</h2>
      </div>

      <div className="main-image-container">
        <img
          src={selectedImage.url}
          alt={selectedImage.alt}
          className="main-image"
        />
      </div>

      <div className="thumbnails-container">
        {images.map((image) => (
          <div
            key={image.id}
            className={`thumbnail ${selectedImage.id === image.id ? 'active' : ''}`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.url} alt={`Thumbnail ${image.alt}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question3;
