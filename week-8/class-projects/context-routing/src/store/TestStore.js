import { create } from "zustand";


//create store
export const useTest = create((set)=>({
    //state
    x:10,
    y:20,
    user:{
        name:"karthik",
        age:20
    },
    //functions to modify state
    incrementX:()=>set((state)=>({x:state.x+1})),
    decrementX:()=>set((state)=>({x:state.x-1})),

    incrementy:()=>set((state)=>({y:state.y+1})),
    decrementy:()=>set((state)=>({y:state.y-1})),
    incrementybyvalue:(v)=>set(state=>({y:state.y+v})),

    updateUserName:(newuser)=>set((state)=>({user:{...state.user,age:22,name:newuser}}))
})) //returns a hook