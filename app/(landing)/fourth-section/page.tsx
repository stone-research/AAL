import React from 'react';

const FourthSection = () => {
  return (
    <div className="text-gray-800 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold">Create Stunning Visual Artworks</h2>
        <p className="text-lg md:text-xl">
          Unlock your creativity with our AI-powered tools. Transform your ideas into beautiful visual masterpieces effortlessly.
        </p>
        <div className="flex items-center justify-center mt-10">
          <video className="rounded-xl w-full md:w-3/4 lg:w-2/3" autoPlay muted loop>
            <source src="/content/video-4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
