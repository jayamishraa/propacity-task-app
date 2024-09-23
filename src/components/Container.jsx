import React from 'react';
import darkbluegradient from '../assets/gradient.avif';

const Container = ({ heading, value }) => {
  return (
    <div 
      className='text-white bg-[#ffffff] shadow-md rounded-lg w-full md:w-[25vw] p-10 m-4 flex flex-col justify-center items-center bg-cover white-shadow' 
      style={{ backgroundImage: `url(${darkbluegradient})` }}
    >
      <p>{heading}</p>      
      <p className='text-3xl'>{value}</p>      
    </div>
  );
}

export default Container;
