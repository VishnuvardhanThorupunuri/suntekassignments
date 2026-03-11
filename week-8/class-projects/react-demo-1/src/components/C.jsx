import {useContext} from 'react'
import {CounterContext} from "../contexts/CounterContext.js"
import { UserContext } from '../contexts/UserContext.js'

function C() {
 let {counter1, changeCounter1} = useContext(CounterContext)
 let {user,changeUser}=useContext(UserContext)
  
  return (
    <div className='text-center shadow-2xl p-10'>
      <p className='text-3xl'>Component C</p>
      <p className='text-2xl mt-10'>Counter1 : {counter1}</p>
      <p className='text-2xl mt-10'>User:{user}</p>
      <button onClick={changeCounter1} className='bg-blue-300 p-2 mt-10'>Change</button>
    </div>
  )
}
export default C