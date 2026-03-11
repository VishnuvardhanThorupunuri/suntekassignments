import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'
import { UserContext } from '../Context/UserContext'
function A() {
  const {counter1,changeCounter1} = useContext(CounterContext);
  console.log("Component A");
  const {user,changeUser} = useContext(UserContext);
  return (
    <div className='text-center shadow-2xl p-15'>
        <p className='text-2xl'>Component A</p>
        <p className='text-3xl mt-10'>Counter1:{counter1}</p>
        <p className='text-3xl mt-10'>UserName:{user.name}</p>
        <p className='text-3xl mt-10'>UserAge:{user.age}</p>
        <p className='text-3xl mt-10'>UserEmail:{user.email}</p>
        <button onClick={changeCounter1} className='bg-blue-500 px-4 py-2 rounded-lg mt-4 me-3'>Increment 1</button>
        <button onClick={changeUser} className='bg-blue-500 px-4 py-2 rounded-lg mt-4'>Change User</button>
    </div>
  )
}

export default A