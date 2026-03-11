import { useState } from 'react'
import { UserContext } from './UserContext';
function UserContextProvider({children}) {
    const [user, setUser] = useState({
        name:"ravi",
        age:20,
        email:"ravi@gmail.com"
    });
    const changeUser=()=>{
        setUser({
            name:"mohan",
            age:25,
            email:"mohan@gmail.com"
        })
}

    return (
        <UserContext.Provider value={{user,changeUser}}>
            {children}
        </UserContext.Provider>
    )
    
}
export default UserContextProvider