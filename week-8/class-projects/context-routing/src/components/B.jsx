import {useContext} from 'react'
import { CounterContext } from '../../context/Countercontext.js'
import { useTest } from '../store/TestStore.js'

function B() {

  const {x,incrementX,decrementX} = useTest((state)=>state)


  let {counter1,ChangeCounter1,counter2,ChangeCounter2}=useContext(CounterContext)

  console.log("component B rendered")

  return (
    <div className='text-center p-20 m-1.5  border-2 rounded-2xl shadow-2xl bg-red-200 text-red-700'>
      <p className="text-3xl text-red-400">Component b</p>
      <p className="text-2xl mt-10">x: {x}</p>
      <p className="text-2xl mt-10">Counter1: {counter1}</p>
      <p className='text-2xl mt-2'>Counter 2: {counter2}</p>
      <button onClick={ChangeCounter1} className="bg-red-500 text-white p-2 cursor-pointer mt-10 rounded-2xl border-red-500 border-2">
        Change Counter1
        </button>

         <button onClick={ChangeCounter2} className="bg-red-500 text-white cursor-pointer p-2 mt-10 rounded-2xl border-red-500 border-2">
        Change Counter2
        </button>

        <button onClick={incrementX} className="bg-red-500 text-white p-2 cursor-pointer mt-10 rounded-2xl border-red-500 border-2">
        Change x +
        </button>

        <button onClick={decrementX} className="bg-red-500 text-white p-2 cursor-pointer mt-10 rounded-2xl border-red-500 border-2">
        Change x -
        </button>
    </div>
  )
}

export default B