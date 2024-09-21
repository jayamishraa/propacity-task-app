import React from 'react'

const Container = ({heading, value}) => {
  return (
    <div className='bg-[#ffffff] rounded-lg w-full md:w-[25vw] p-10 m-4 flex flex-col justify-center items-center'>
        <p>{heading}</p>      
        <p className='text-3xl'>{value}</p>      
    </div>
  )
}

export default Container
