import React, { useState, useEffect } from 'react';
import Search from './Search'; 
import darkbluegradient from '../assets/gradient.avif'

const Left = ({ setLatitude, setLongitude, apiData, isFar }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const unit = isFar ? '°F' : '°C';

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());

    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);

    setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    return () => clearInterval(interval);
  }, [apiData]);

  // console.log(apiData?.weather?.icon);

  return (
  <div className="md:w-[30vw] bg-[#ffffff] p-5 flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url(${darkbluegradient})`}}>
    <Search setLatitude={setLatitude} setLongitude={setLongitude} />
      <img
        src={`https://openweathermap.org/img/wn/${apiData?.weather[0]?.icon}@2x.png`}
        alt="Weather Icon"
        className='p-3 opacity-0 md:opacity-100 h-40'
      />
      <p className='mt-[-150px] mb-[-30px] md:mb-0 md:mt-0 text-5xl p-3 text-white'>
        {apiData?.main?.temp ? `${apiData.main.temp} ${unit}` : 'Loading...'}
      </p>

      <div className='flex p-3 text-white'>
        <span className='p-3'>{currentDate}</span>
        <span className='p-3'>{currentTime}</span>
      </div>

      <p className='opacity-0 md:opacity-100 p-5 border-2 rounded-lg text-white'>
        {apiData?.name || 'Loading city...'}
      </p>
    </div>
  );
};

export default Left;
