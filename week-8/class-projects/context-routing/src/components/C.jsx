import {useContext} from 'react'
import { CounterContext } from '../../context/Countercontext.js'
import { useTest } from '../store/TestStore.js'


function C() {

  //get sate from zustand store
  let y = useTest((state)=>state.y)
  let incrementy = useTest((state)=>state.incrementy)
  const decrementy = useTest((state)=>state.decrementy)
  let incrementybyvalue = useTest((state)=>state.incrementybyvalue)
   console.log("y :",y)

  let {counter1,ChangeCounter1,counter2,ChangeCounter2}=useContext(CounterContext)
  console.log("component c rendered")
  return (
    <div className='text-center p-20 m-1.5 border-2 rounded-2xl shadow-2xl bg-red-200 text-red-700'>
      <p className="text-3xl text-red-400">Component c</p>
      <p className="text-2xl mt-10">y: {y}</p>
      <p className="text-2xl mt-10">Counter1: {counter1}</p>
      <p className='text-2xl mt-2'>Counter 2: {counter2}</p>
      <button onClick={ChangeCounter1} className="bg-red-500 text-white p-2 mt-10 rounded-2xl border-red-500 border-2">
        Change Counter1
        </button>

        <button onClick={ChangeCounter2} className="bg-red-500 text-white cursor-pointer p-2 mt-10 rounded-2xl border-red-500 border-2">
        Change Counter2
        </button>

        <button onClick={incrementy} className="bg-red-500 text-white p-2 mt-10 rounded-2xl border-red-500 border-2">
        Change y +
        </button>

        <button onClick={decrementy} className="bg-red-500 text-white p-2 mt-10 rounded-2xl border-red-500 border-2">
        Change y -
        </button>

        <button onClick={() => incrementybyvalue(3)} className="bg-red-500 text-white p-2 mt-10 rounded-2xl border-red-500 border-2">
        Change y + v
        </button>

    </div>
  )
}

export default C