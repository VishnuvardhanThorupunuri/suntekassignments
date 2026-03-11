import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'
function C() {
  const {counter1,changeCounter1} = useContext(CounterContext);
  console.log("Component C");
  return (
    
      <div className='text-center shadow-2xl p-15'>
        <p className='text-2xl'>Component C</p>
        <p className='text-3xl mt-10'>Counter:{counter1}</p>
    </div>
    
  )
}

export default C