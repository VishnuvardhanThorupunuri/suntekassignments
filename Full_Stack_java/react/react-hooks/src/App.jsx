import { useState } from "react";
import UserContext from "./components/UserContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App(){
  //create state to store logged-in user
  //initially user is emty
    const[user,setUser]=useState("");

    return(
      <UserContext.Provider value={{user,setUser}}>
        <Login></Login>
        <Dashboard></Dashboard>

      </UserContext.Provider>

    );
}
export default App