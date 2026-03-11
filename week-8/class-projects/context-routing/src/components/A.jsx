import { useContext,useRef,useEffect } from "react"
import { CounterContext } from "../../context/Countercontext"
import { useTest } from "../store/TestStore.js"

function A() {
  let inputRef=useRef(null)
  let name = useTest((state)=>state.user.name)
  let age = useTest((state)=>state.user.age)
  const updateUserName  =useTest((state)=>state.updateUserName)


  let {counter1,ChangeCounter1,counter2,ChangeCounter2}=useContext(CounterContext)
  console.log("component A rendered")

  useEffect(()=>{
    //side effect
    inputRef.current.focus()
  },[])
  return (
    <div className='text-center p-20 m-1.5 border-2 rounded-2xl shadow-2xl bg-red-200 text-red-700'>
      <p className="text-3xl text-red-400">Component A</p>
      <p className="text-2xl mt-10">name: {name}</p>
      <p className="text-2xl mt-10">age: {age}</p>
      <p className="text-2xl mt-10">Counter1: {counter1}</p>
      <p className='text-2xl mt-2'>Counter 2: {counter2}</p>
      <button onClick = {ChangeCounter1} className="bg-red-500 text-white cursor-pointer p-2 mt-10 rounded-2xl border-red-500 border-2">
        Change Counter1
        </button>

        <button onClick = {ChangeCounter2} className="bg-red-500 text-white cursor-pointer p-2 mt-10 rounded-2xl border-red-500 border-2">
        Change Counter2
        </button>

         <button onClick = { () => updateUserName("rohit")} className="bg-red-500 text-white cursor-pointer p-2 mt-10 rounded-2xl border-red-500 border-2">
        Change username
        </button>
        <input ref={inputRef} type="text" className="border-4"></input>
    </div>
  )
}

export default A