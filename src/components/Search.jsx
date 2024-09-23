import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = ({setLatitude, setLongitude}) => {
  const [search, setSearch] = useState('London');

  useEffect(() => {
    handleSearch();
  }, [search])

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=75ca029450f2d081831b0ff51bf5de45`
      );
      if (response.data.length > 0) {
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);
        console.log("Latitude:", response.data[0].lat);
        console.log("Longitude:", response.data[0].lon);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className='flex justify-center md:items-center'>
      <input 
        type="text" 
        className='outline-none focus:ring-0 p-2 rounded bg-gray-300' 
        placeholder='Enter the city name...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button 
        onClick={handleSearch} 
        className='rounded-lg bg-gray-500 p-1.5 m-1 text-black hover:bg-[#eae9ef] hover:text-white shadow-md transition duration-300 ease-in-out'
      >
        <i className="fa-solid fa-magnifying-glass p-2"></i>
      </button>
    </div>
  );
};

export default Search;
