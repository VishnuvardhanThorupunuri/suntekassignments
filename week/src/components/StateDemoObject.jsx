import {useState} from 'react'

function StateDemoObject() {
    //State
    let [user,setUser]=useState({email:"test@gmail.com"})
    const updateUser=()=>{
        setUser({...user,city:"hyd"})
    }
    return (
        <div className='m-10'>
            <h1>User</h1>
            <p>{user.email}</p>
            <p>{user.city}</p>
        </div>
    )
}

export default StateDemoObject;