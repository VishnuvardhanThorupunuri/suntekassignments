import {useState} from 'react'

function StateDemoPrimitive() {
    //State
    let [counter,setCounter ]=useState(10)
    //setCounter rerenders the component
    //react does batch processing
    //runs all setCounter at once
    const increment=()=>{
        setCounter(prev=>prev+1);
        setCounter(prev=>prev+1);
        setCounter(prev=>prev+1);
    }
    const decrement=()=>{
        setCounter(counter-1);
    }
    const reset=()=>{
        setCounter(0);
    }
    return (
        <div>
            <p className="text-4xlmt-10">Counter : {counter}</p>
            <button onClick={increment} className="bg-blue-400 px-5 py-2 mt-5 me-3">Add</button>
            <button onClick={decrement} className="bg-blue-400 px-5 py-2 mt-5 me-3">Sub</button>
            <button onClick={reset} className="bg-red-500 px-5 py-2 mt-5">Reset</button>
        </div>
    )
}

export default StateDemoPrimitive;