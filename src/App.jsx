import React, { useEffect, useState } from 'react';
import Left from './components/Left';
import Right from './components/Right';
import axios from 'axios';
import darkbluegradient from '../src/assets/nightsky.jpg';

const App = () => {
  const [latitude, setLatitude] = useState('51.5073219');
  const [longitude, setLongitude] = useState('-0.1276474');
  const [isFar, setIsFar] = useState(false);
  const [apiData, setApiData] = useState();

  useEffect(() => {
    handleAPIData(); 
  }, [latitude, longitude, isFar]);

  const handleAPIData = async () => {
    try {
      const units = isFar ? 'imperial' : 'metric';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=75ca029450f2d081831b0ff51bf5de45&units=${units}`
      );
      setApiData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div
      className="md:flex h-full bg-cover bg-fixed dark-gradient"
    >
      <Left
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        apiData={apiData}
        isFar={isFar}
      />
      <Right
        latitude={latitude}
        longitude={longitude}
        apiData={apiData}
        setIsFar={setIsFar}
        isFar={isFar}
      />
    </div>
  );
};

export default App;
