import { createContext } from "react";


//this context will store user-related data
const UserContext=createContext(null);

    

//export teh context
export default UserContext;

//createContext() create a global container 
//initially it has no values.
//values si provided later using Provider.