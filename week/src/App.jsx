import './App.css'
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import StateDemoPrimitive from './components/StateDemoPrimitive';
import StateDemoArray from './components/StateDemoArray';
import StateDemoObject from './components/StateDemoObject';




function App(){

  return(
    <div className='text-center border-2 p-10 bg-gray-200'>
      <h1 className="text-5xl text-blue-400">State Demo</h1>
      <StateDemoPrimitive />
      <StateDemoArray />
      <StateDemoObject />
    </div>
  )

}

export default App;






//jSX


// //return a react element(mandatory)
//   return(
//     //it is JSX not HTML
//     <div className='text-center'>
//       <h1 className='text-5xl text-blue-400'>Welcome to React</h1>
//       {/* username */}
//       <h2 className='text-4xl'>Username: {username}</h2>
//       {/* person */}
//       <h2 >{person.pid}</h2>
//       <h2 >{person.name}</h2>
//       {/* How to Iterate an array */}
//       {/* marks */}
//       {
//         marks.map((m, index)=><h2 key={index}>{m}</h2>)
//       }
//       {/* Event Handeler */}
//       <button onClick={test1} className='bg-amber-500 text-lime-50 pl-4 pr-4'>Click</button>
//       <button onClick={()=>test2(100)} className='bg-amber-500 text-lime-50 pl-4 pr-4'>Click</button>
//     </div>
//   )
