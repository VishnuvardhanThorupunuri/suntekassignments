import { children, useState } from 'react'
import { CounterContext } from './Countercontext.js'

function CounterContextPrivider({children}) {
    
    //state
    const  [counter1,setCounter1] = useState(100)
    const  [counter2,setCounter2] = useState(200)
    //function to modify
    const ChangeCounter1 = ()=>{
        setCounter1(counter1 + 1)
    }

     const ChangeCounter2 = ()=>{
        setCounter2(counter2 + 1)
    }


  return (
    <CounterContext.Provider value={{
      counter1,
      counter2,
      ChangeCounter1,
      ChangeCounter2  
      }}>
        
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContextPrivider