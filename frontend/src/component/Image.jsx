import React, { useState, useEffect } from 'react';

const Image = () => {
  const images = [
    "https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2024/tranguudaikhongtienmat_T12_1920x500.png",
    "https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2024/LDPTheleMegasale_Mainbanner_1920x500.png",
    "https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2024/trangpartnership_1920x500.jpg",
    "https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2024/DarkFridayManga_mainbanner_1920x500.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Image;
