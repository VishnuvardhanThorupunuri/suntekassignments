import './App.css'
import Test1 from './components/Test1';
import Test2 from './components/Test2';

function App(){
  const messages=[
    {
      message1:"Good Morning",
      message2:"Hello",
    },
    {
      message1:"Good Afternoon",
      message2:"How are you",
    },
      {
      message1:"Good Evening",
      message2:"Take Care",
    },
    
  ]

  //return a react element(mandatory)
  return(
    <div className='text-center border-2 p-24 bg-gray-200'>
      <h1 className='text-5xl text-blue-400'>Welcome to React</h1>
      {
        messages.map(msgObj=><Test1 messages={msgObj})
      }   
    </div>
  );

}


export default App;

//JSX




/*/state(optional)
  let username='ravi'
  let person={
    pid:100,
    name:"bhanu",
  };
  let marks = [90,78,56];

  const test1=()=>{
    console.log("test1 called")
  }

  const test2=(a)=>{
    console.log('test2 called with a: ',a)
  }
//

// {/*username */
//       <h2 className='text-4xl'>Username:{username}</h2>
//       {/*person object */}
//       <h2>{person.pid}</h2>
//       <h2>{person.name}</h2>
//       {/* marks */}
//       {
//         marks.map((m,index)=><h2 key={index}>{m}</h2>)
//       }


//       <button onClick={test1} className='bg-amber-500 text-amber-100 p-3'>Click</button>
//       <button onClick={()=>test2(100)} className='bg-amber-500 text-amber-100  p-3'>Click</button>