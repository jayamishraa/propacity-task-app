import Container from './Container';
import React, { useEffect, useState } from 'react';
import ToggleButton from './ToggleButton';
import axios from 'axios';
import DaysContainer from './DaysContainer';
import darkbluegradient from '../assets/starrysky.png'


const Right = ({ latitude, longitude, apiData, setIsFar, isFar }) => {
  const [weekApiData, setWeekApiData] = useState([]);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const unit = isFar ? '°F' : '°C';

  useEffect(() => {
    handleWeekAPIData();
  }, [latitude, longitude, isFar]);

  const handleWeekAPIData = async () => {
    try {
      const units = isFar ? 'imperial' : 'metric'
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=75ca029450f2d081831b0ff51bf5de45&units=${units}`
      );
      setWeekApiData(response.data.list); // Assuming 'list' contains the forecast data
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const getCurrentDayIndex = () => {
    const today = new Date();
    return today.getDay(); 
  };

  return (
    <div className="md:w-[70vw] p-5 flex flex-col justify-center " >
      <div className='flex items-center justify-between'>
        <h2 className='ml-5 text-xl font-medium text-white'>Today's Highlights</h2>
        <ToggleButton
          setIsFar={setIsFar}
        />
      </div>

      <div className='md:flex'>
        <Container 
          heading="City Name" 
          value={apiData?.name || 'N/A'}
        />
        <Container 
          heading="Current Temperature" 
          value={`${apiData?.main?.temp || 'N/A'}${unit}`}
        />
        <Container 
          heading="Weather Condition" 
          value={apiData?.weather?.[0]?.main || 'N/A'}
        />
      </div>

      <h2 className='ml-5 text-xl font-medium text-white'>Future Forecast</h2>
      <div className='md:flex'>
        {Array.from({ length: 5 }, (_, index) => {
          const dayIndex = (getCurrentDayIndex() + index + 1) % 7; 
          return (
            <DaysContainer 
              key={index}
              day={daysOfWeek[dayIndex]} 
              min={weekApiData[index]?.main.temp_min || 'N/A'} 
              max={weekApiData[index]?.main.temp_max || 'N/A'}
              isFar={isFar}
              imgsrc={weekApiData[index]?.weather[0]?.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Right;
