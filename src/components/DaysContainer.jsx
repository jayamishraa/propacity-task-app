import React from 'react';
import darkbluegradient from '../assets/gradient.avif'

const DaysContainer = ({ day, min, max, isFar, imgsrc }) => {
  const unit = isFar ? '°F' : '°C';
  return (
    <div className='text-white bg-white rounded-lg white-shadow w-full md:w-[25vw] h-40 p-5 m-4 flex flex-col justify-center items-center' style={{ backgroundImage: `url(${darkbluegradient})`}}>
    <p>{day}</p>
      <div className='text-center'>
        <img 
          src={`https://openweathermap.org/img/wn/${imgsrc}@2x.png`} 
          className='h-20'        
        />
        <p className='text-xs text-gray-200'>Min: <span>{min}{unit}</span></p>
        <p className='text-xs text-gray-200'>Max: <span>{max}{unit}</span></p>
      </div>
    </div>
  );
}

export default DaysContainer;
