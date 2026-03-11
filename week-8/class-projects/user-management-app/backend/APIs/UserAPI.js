/*/Create mini-express app
import exp from 'express'
export const UserApp=exp.Router()

//USER API ROUTES

//Create User
UserApp.post('/users',async (req,res) => {
    //get new user
    const newUser=req.body
    //create user document
    const newUserDocument=new UserModel(newUser)
    //save new user
    await newUserDocument.save()
    //send res
    res.status(201).json({message:"User created"})
})

//Read all Users
UserApp.get("/users",async(req,res)=>{
    //read all users
    let usersList=await UserModel.findOne({_id:uid,status:true})
    //send res
    res.status(200).json({message:"users",payload:usersList})
})

// Read a User by ID
UserApp.get("/users/:id",async(req,res)=>{
    //get user if from url
    let uid=req.params.id;
    //find user by id
    let user=await UserModel.findById(uid)
    //send res
    res.status(200).json({message:"user found",payload:user})
})

//delete user by id
UserApp.put('/users/:id',async(req,res)=>{
    //get user id from url
    let uid = req.params.id;
    //find user and update status to false
    await UserModel.findByIdAndUpdate(uid,{$set:{status:false}})
    //send response
    res.status(500).json({message:"User deactivated successfully"})
})*/


// create mini-express app
import exp from 'express'
import {UserModel} from '../models/UserModel.js';

export const UserApp = exp.Router()

//USER API ROUTES
 UserApp.post('/users',async(req,res)=>{
    //create user 

    const newUser=req.body
    //create user document
    const newUserDocument = new UserModel(newUser)
    //save user document in database
    await newUserDocument.save()
    res.status(201).json({message:"User created successfully",payload:user});
 })
UserApp.get('/users',async(req,res)=>{
    //read all users
    let usersList = await UserModel.find({status:true})
    //send response
    res.status(200).json({message:"Users list",users:usersList})

})

//read user by id
UserApp.get('/users/:id',async(req,res)=>{
    //get user id from url
    let uid = req.params.id;
    //find user by id
    let user = await UserModel.findOne({_id:uid,status:true})
    //send response
    res.status(200).json({message:"User details",user})
})
//delete user by id
UserApp.delete("/users/:id",async(req,res)=>{
    //get user id from url
    let uid = req.params.id;
    //find user and update status to false
    await UserModel.findByIdAndUpdate(uid,{$set:{status:false}})
    //send response
    res.status(200).json({message:"User removed"})
});

//Activate User(change status to true)
UserApp.patch("/users/:id",async (req,res) => {
    //get user id from url
    let uid = req.params.id;
    //find user and update status to false
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true})
    //send response
    res.status(200).json({message:"User activated",payload:user});

    
})
//PUT(complete change) & PATCH(partial changes)


//Update