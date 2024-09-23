import React from 'react';

const Container = ({ heading, value }) => {
  return (
    <div 
      className='text-white bg-[#ffffff] shadow-md rounded-lg w-[85vw] md:w-[25vw] p-10 m-4 flex flex-col justify-center items-center bg-cover white-shadow light-gradient z-10' 
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
    >
      <p>{heading}</p>      
      <p className='text-3xl'>{value}</p>      
    </div>
  );
}

export default Container;
