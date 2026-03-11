import {useState} from 'react'

function StateDemoArray() {
    //State
    let [marks,setMarks]=useState([1,2])
    const addMarks=()=>{
        setMarks([...marks,123])
    }
    return (
        <div className='m-10'>
            <button onClick={addMarks} className="bg-blue-400 px-5 py-2 mt-5 me-3">Add Marks</button>
            <h1>Marks </h1>
            {
                marks.map((m,index)=><h2 key={index}>{m}</h2>)
            }
        </div>
    )
}

export default StateDemoArray;


//// Update  marks state by inserting elements 
// at begining , at ending and in between the index
// delete marks from the end of the array