import { children,useState} from 'react'
import { UserContext } from './UserContext'

function UserContextProvider({children}) {
    //state
    const [user,setUser] = useState({
        "name":"ravi",
        "age":20,
        "email":"abc@mail.com"
    })



  return (
   <UserContext.Provider>
    {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider