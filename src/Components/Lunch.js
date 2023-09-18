import React, { useState }from 'react';
import './Lunch.css';
import { LunchData } from './LunchData';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function Lunch ()  {
  const [index, setIndex] = useState(0);
  const hasNext = index < LunchData.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    } else {
      setIndex(LunchData.length - 1);
    }
  }
  let lunchDay = LunchData[index];

  return (
    <section id='lunch'> 
    <div className='lunch-container'>
      <div>
      <h2 className='lunch-title'>Dagens lunch</h2>
       {/**<p className='lunch-sub-title'>Sallad, saft, kaffe och vatten ingår i lunchen</p> */} 
        <p className='lunch-sub-info'>Serveras mellan 11:00 - 14:30 | 119:- </p>
        
      </div>

      <div>
       
        <h4 className='dish-name'>{lunchDay.a}</h4>
        <p className='dish-info'>{lunchDay.aInfo}</p>

        <h4 className='dish-name'>{lunchDay.b}</h4>
        <p className='dish-info'>{lunchDay.bInfo}</p>

        <h4 className='dish-name'>{lunchDay.c}</h4>
        <p className='dish-info'>{lunchDay.cInfo}</p>

        <h4 className='dish-name'>{lunchDay.d}</h4>
        <p className='dish-info'>{lunchDay.dInfo}</p>
        
        <h4 className='dish-name'>{lunchDay.e}</h4>
        <p className='dish-info'>{lunchDay.eInfo}</p>
        
        <h4 className='dish-name'>{lunchDay.f}</h4>
        <p className='dish-info'>{lunchDay.fInfo}</p>

        <h4 className='dish-name'>{lunchDay.g}</h4>
        <p className='dish-info'>{lunchDay.gInfo}</p>

        <h4 className='dish-name'>{lunchDay.h}</h4>
        <p className='dish-info'>{lunchDay.hInfo}</p>
        </div>
        <div className='day-controller'>
      
        <FaChevronLeft size={24} className = 'prev' onClick={handlePrevClick}></FaChevronLeft>
      {lunchDay.id}
      <FaChevronRight size={24} className = 'next' onClick={handleNextClick}></FaChevronRight>
      </div>
      </div>
        
        
   
      
    </section>
  )
}

export default Lunch
