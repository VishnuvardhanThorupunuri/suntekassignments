import { useState } from "react";
import { useForm } from "react-hook-form";

function Formhandson()
{

    //form submition
    const submitForm=(obj)=>{

        //the date is not after 2020
        setError("dob",{
            type:"manual",
            message:"the date not after 2020"
        })
        //{ errors.dob?.type=="manual" && <p>{error .dob.message}</p>}
       setUsers([...users,obj])

    }


    const {register,handleSubmit,formState:{errors}}=useForm()
    const [users,setUsers]=useState([])



    return(
        <div className="bg-blue-300">
        <form onSubmit={handleSubmit(submitForm)} className="bg-pink-300 w-100 m-auto h-100">
            <h3 className=" m-auto">User registration Form</h3>
            <div>
            <input type="text" {...register("FirstName",{required:true,minLength:3})} placeholder='FirstName' className='border'></input>
                    { errors.username?.type=='required' && <p className='text-red-500'>FirstName required</p>}
                    { errors.username?.type=='minLength' && <p className='text-red-500'>MinLength should be 3</p>}
            </div>
            <div>
            <input type="text" {...register("LastName",{required:true,minLength:3})} placeholder='LastName' className='border'></input>
            { errors.username?.type=='required' && <p className='text-red-500'>LastName required</p>}
            { errors.username?.type=='minLength' && <p className='text-red-500'>MinLength should be 3</p>}
            </div>
            <div className='mb-3'>
            <input type="email"{...register("email")} placeholder='Email ' className='border-2' ></input> 
            </div>
            <div className='mb-3'>
            <input type="date"{...register("date")} placeholder='Date ' className='border-2' ></input> 
            </div>
            <button type="submit" className='bg-yellow-300 p-3 text-black-100 '>Add New User</button>  



            


        </form>
        {/* Table */}
        <table >
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Dob</th>

                </tr>
                
            </thead>
            <tbody>
                {
                users.map((userObj,index)=>(
                <tr>
                <td className="border">{userObj.FirstName}</td>
                <td className="border">{userObj.LasttName}</td>
                <td className="border">{userObj.email}</td>
                <td className="border">{userObj.date}</td>
                </tr>
                     ))
                }
            </tbody>
        </table>

       </div>
    )
    
    
}




export default Formhandson;
