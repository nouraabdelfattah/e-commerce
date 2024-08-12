import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';

export default function Timer() {
  const { useTimer } = useContext(TimerContext);
  const { days, hours, minutes, seconds } = useTimer("2024-12-31T23:59:59");

  return (
    <div className='container  mt-5 text-center timer pb-3 pt-2  '>
      <h2 className=' text-center mb-3 text-white'>Flash sale!!</h2>
      <div className='row g-2  justify-content-center'>
        <p className='col-3  text-center  ms-1 sale'>{days}</p>
        <p className='col-2 text-center  ms-1  sale'>{hours}</p>
        <p className='col-2 text-center  ms-1  sale'>{minutes}</p>
        <p className='col-2 text-center   ms-1 sale'>{seconds}</p>
      </div>
    </div>
  );
}
