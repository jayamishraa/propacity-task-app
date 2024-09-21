import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-center md:items-center'>
      <i className="fa-solid fa-magnifying-glass p-2"></i>
      <input 
        type="text"  
        className='outline-none focus:ring-0' 
        placeholder='Enter the city name...'
      />
    </div>
  )
}

export default Search
