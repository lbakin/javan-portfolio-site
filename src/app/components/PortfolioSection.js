"use client"

import { useRef, useState } from 'react';

export default function PortfolioSection({ title, reelUrls, images, id, sectionStyle }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const lightboxRef = useRef(null)
  
  const videoRefs = useRef(reelUrls.map(() => null));

  // const handleFullScreen = (index) => {
  //   const videoRef = videoRefs.current[index];
  //   if (videoRef) {
  //     if (videoRef.requestFullscreen) {
  //       videoRef.requestFullscreen();
  //     } else if (videoRef.webkitRequestFullscreen) {
  //       videoRef.webkitRequestFullscreen(); // For Safari
  //     } else if (videoRef.msRequestFullscreen) {
  //       videoRef.msRequestFullscreen(); // For IE/Edge
  //     }
  //   }
  // };

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  const handleClickOutside = (e) => {
    if (lightboxRef.current && !lightboxRef.current.contains(e.target)) {
      closeLightbox();
    }
  };
  const videoGridClass = reelUrls.length === 1 ? 'justify-center lg:w-1/2 mx-auto' : 'lg:grid-cols-2';

  return (
    <section id={id} className={`py-8 px-12 ${sectionStyle}`}>
      <h2 className={`text-2xl text-center font-bold mb-8 sticky top-0 ${sectionStyle} text-[#e2a43d] py-4 z-10`}>{title}</h2>

      <div className={`grid grid-cols-1 ${videoGridClass} gap-12 mb-12`}>
        {reelUrls.map((reelUrl, index) => (
          <div key={index} className="relative w-full pb-56.25% h-0">
            <video ref={videoRefs.current[index]} controls className="absolute top-0 left-0 w-full h-full object-cover">
              <source src={reelUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {images.map((image, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div className="relative w-full h-64 lg:h-96 bg-indigo-300 overflow-hidden ">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover md:group-hover:opacity-75 transition-opacity duration-300 shadow-xl"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-black bg-opacity-50 flex items-center justify-center text-[#e3d3a1] text-lg px-4 md:opacity-0 md:group-hover:opacity-100 opacity-1000 group-hover:opacity-100 transition-opacity duration-300">
                {image.text}
              </div>
            </div>
            {/* Shadow below the image */}
            {/* <div className="absolute inset-x-0 h-12 bg-cover bg-no-repeat pointer-events-none"
                 style={{ backgroundImage: `url('images/below-shadow.png')`, height: '20%', backgroundSize: 'cover', backgroundPosition: 'bottom center' }}>
            </div> */}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleClickOutside}
        >
          <div ref={lightboxRef} className="relative m-12">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-1 bg-gray-700 bg-opacity-50 text-white rounded hover:bg-gray-600"
            >
              &times;
            </button>
            <img src={currentImage.src} alt={currentImage.alt} className="max-w-full max-h-screen p-4" />
            <div className="text-white text-center">{currentImage.text}</div>
          </div>
        </div>
      )}
    </section>
  );
}
