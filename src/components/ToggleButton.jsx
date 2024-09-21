import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="relative flex items-center space-x-2">
      <span className={`transition-opacity duration-300 ${isToggled ? 'opacity-0' : 'opacity-100'}`}>
        Celsius
      </span>

      <button
        onClick={handleToggle}
        className={`w-16 h-8 rounded-full p-0 focus:outline-none transition-colors duration-300 
          ${isToggled ? 'bg-green-500' : 'bg-gray-300'}`}
      >
        <div
          className={`h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 
            ${isToggled ? 'translate-x-9' : 'translate-x-1'}`}
        />
      </button>

      <span className={`transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`}>
        Fahrenheit
      </span>
    </div>
  );
};

export default ToggleButton;
