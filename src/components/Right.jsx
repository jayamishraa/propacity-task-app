import Container from './Container'
import React from 'react'
import ToggleButton from './ToggleButton'

const Right = () => {
  return (
      <div className="md:w-[70vw] bg-[#eae9ef] p-5 flex flex-col justify-center ">
        <div className='flex items-center justify-between'>
            <h2 className='ml-5 text-xl font-medium'>Today's Highlights</h2>
           <ToggleButton />
        </div>

        <div className='md:flex'>
            <Container 
            heading="City Name" 
            value="New York"
            />
            <Container 
            heading="Current Temperature" 
            value="12 C"
            />
            <Container 
            heading="Weather Condition" 
            value="Sunny"
            />
        </div>

        <h2 className='ml-5 text-xl font-medium'>Future Forecast</h2>
        <div className='md:flex'>
            <Container 
            heading="Monday" 
            value="12 C"
            />
            <Container 
            heading="Monday" 
            value="12 C"
            />
            <Container 
            heading="Monday" 
            value="12 C"
            />
            <Container 
            heading="Monday" 
            value="12 C"
            />
            <Container 
            heading="Monday" 
            value="12 C"
            />
        </div>
      </div>
    
  )
}

export default Right
