import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function UsersList() {
    let [users,setUsers]=useState([])

    useEffect(()=>{
        async function getUsers() {
            let res=await fetch("http://localhost:4000/user-api/users",{ method:"GET",})
            
        }    
    });

    if (res.status ===200){
        //extract 
    }

  return (
    <div>
        <h1 className='text-5xl text-gray-600'>List of Users</h1>
        {
            users.map(userObj=><div key={userObj.email}>{userObj.name}</div>)
        }
    </div>
  )
}

export default UsersList