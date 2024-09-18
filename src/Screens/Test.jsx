import React, { useState } from 'react';

const Test = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
        onClick={handleClick}
      >
        Toggle Slide
      </button>

      <div
        className={`transition-transform duration-500 ease-in-out transform ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        } fixed right-0 top-0 h-full w-64 bg-white shadow-lg`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Sliding Card</h2>
          <p>This card slides in and out when the button is clicked.</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
