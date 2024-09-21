import React, { useState, useEffect } from 'react';
import Search from '../../src/components/Search';

const Left = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());

        const interval = setInterval(() => {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 60000); 

        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="md:w-[30vw] -[#ffffff] p-5 flex flex-col items-center justify-center">
            <Search />
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGt3t_ZkYA3MLelnrlxTyP6NhYuFcPkYZnOVy1-abzDnDGDLxEMPqoh5oIp_DA7TJZUU&usqp=CAU'
            alt="Placeholder"
            className='p-3 opacity-0 md:opacity-100'
            />
            <p className='mt-[-150px] mb-[-30px] md:mb-0 md:mt-0 text-5xl p-3'>12 C</p> 
            <div className='flex p-3'>
                <span className='p-3'>{currentDate}</span>
                <span className='p-3'>{currentTime}</span>
            </div>
            <p className='opacity-0 md:opacity-100 p-5 border-2 rounded-lg'>City Name, Country</p>
        </div>
    )
}

export default Left
