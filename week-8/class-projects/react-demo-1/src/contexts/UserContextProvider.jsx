import { useState } from "react";
import { UserContext } from "./UserContext";

function UserContextProvider({ user1}) {
    //state
    const[user,setUser]=useState(null)
    let User={
        name:"ravi",
        age:20,
        email:"ravi@mail.com"
    }
    //function to modify state
    const changeUser=()=>{
        setUser(user.age+1)
    };


  return (
    <UserContextProvider  value={{user,setUser}}>
        {user1}
    </UserContextProvider>
  )
}

export default UserContextProvider