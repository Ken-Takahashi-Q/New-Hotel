import { useState, useEffect } from "react";

export default function ImageGallery() {
  const images = [
    '233443426-2.png',
    'https://via.placeholder.com/500x250?text=Image+2',
    'https://via.placeholder.com/500x250?text=Image+3',
    'https://via.placeholder.com/500x250?text=Image+4',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
    }, [activeIndex, images.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="absolute w-full h-[276px] top-[110px]">
      <div className="absolute w-[352px] h-[200px] bg-[#D9D9D9] rounded-lg -translate-x-2/4 left-2/4 top-[64px]">
        {images.map((imageUrl, index) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt="image"
            style={{
              display: activeIndex === index ? "block" : "none",
              width: "384px",
              height: "220px",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
      
      <div className='absolute top-[290px] -translate-x-2/4 left-2/4'>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              display: "inline-block",
              margin: "0 5px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index === activeIndex ? "#326BFF" : "#E2ECF8",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
    
  );
}
