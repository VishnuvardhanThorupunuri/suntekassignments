import {useContext} from 'react'
import {CounterContext} from "../contexts/CounterContext.js"

function A() {

  let {counter1, changeCounter1} = useContext(CounterContext)

  return (
    <div className='text-center shadow-2xl p-10'>
      <p className='text-3xl'>Component A</p>
      <p className='text-2xl mt-10'>Counter1 : {counter1}</p>
      <button onClick={changeCounter1} className='bg-blue-300 p-2 mt-10'>Change Counter1</button>
    </div>
  )
}

export default A