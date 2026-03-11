/**
  useEffect Hook
  -------------------
  useEffect is used to handle side effects like 
  Api calls
  Dom updates 
  timers
  subscription 

  Syntax;-
  ----------

  useEffect (()=>{
    //side effects code
    },[dependencies]);

    types of useEffect:-
    []           runs once (componentsDidMount)
    [state]
 */




import { useEffect } from "react";

function Effect(){

    useEffect(()=>{
        alert("component loaded....")
    })
}

export default Effect