import React, { Children } from 'react'
import { useState } from 'react'
import { CounterContext } from './CounterContext';
function ContextCounterProvider({children}) {
    //state
    const [counter1,setCounter1] = useState(1);
    const [counter2,setCounter2] = useState(0);
    //function to modify state
    const changeCounter1 = () => {
        setCounter1(counter1+1)
    }
    const changeCounter2 = () => {
        setCounter2(counter1+1)
    }
    
  return (
    <CounterContext.Provider value={{counter1,changeCounter1,counter2,changeCounter2}}>
        {children}
    </CounterContext.Provider>
    
  )
}

export default ContextCounterProvider