// components/EEGCard.js

import React from 'react';

const EEGCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-10">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-theme-gray-dark">Please Connect to EEG</div>
      </div>
      <div className="px-6 py-4">
        <span className="bg-blue-500 text-white py-1 px-2 rounded-full text-xs">
          Blinking
        </span>
      </div>
    </div>
  );
};

export default EEGCard;
