import exp from 'express';
//create min-express(Seperate Route)app

export const userApp=exp.Router();




//test local in-memory data
    let users=[];
        //get req handling route(Read users)
        userApp.get('/users',(req,res)=>{//request,response
            //send res to client
            res.status(200).json({message:"all users",payload:users});//message,payload
        });
        //post req handing route(Create users)
        userApp.post('/users',(req,res)=>{
            //get user resource from req
            let newUser=req.body
            //console.log("new user",newUser)
            //insert newUser into users Array
            users.push(newUser)
            //send res
            res.status(201).json({message:"User created"})
            
        });
        //put req handing route(Update users)
        userApp.put('/users',(req,res)=>{

            //get modified user from req
            let  modifiedUser=req.body
            //console.log(modifiedUser)
            //find the user with id exists in array 
            let user=users.findIndex(userobj=>userobj.id===modifiedUser.id)
            //if user not found,send res as "user not found"
            if(userIndex===-1){
                return res.status(404).json({message:"User not found"})
            }
            //if user found,then modify the user
            let deleteUser=users.splice(userIndex,1,modifiedUser)
            //send res as "User modified"
            res.status.apply(200).json({message:"User modified"});
        });

        //read user by id
        userApp.get('/users/:id',(req,res)=>{

            console.log(req.params)
            //read id from url parameter
            let userid=Number(req.params.id) // {id:'200'}
            //read user by this id 
            let user=users.find(userObj=>userObj.id===userId)
            if(!user){
                return res.status(404).json({message:"user not found"})
            }
            //send res
            res.status(200).json({message:"user",payload:user})


        })
        //delete req handing route(Delete users)
        userApp.delete('/users/:id',(req,res)=>{

            let userid=Number(req.params)
            //send res
            res.json({ message:"This response form DELETE req handler"});

        });

