import exp from 'express'
import {register} from '../services/authService.js'
import {authenticate} from '../services/authService.js'
import {config} from 'dotenv'
import { articleTypeModel } from '../models/ArticleModel.js';
config();
export const userRoute=exp.Router()

//register user
userRoute.post("/users",async(req,res)=>{
    //get user obj from req bpdy
    let userObj=req.body;
    //call register service
    const newUserObj=await register({... userObj,role:"USER"});
    //send response
    res.status(201).json({message:"user created",payload:newUserObj});
})
//authenticate user 
userRoute.post("/users/authenticate",async(req,res)=>{
    //get user credential from req body
    let userCred=req.body;
    //call authenticate service
    let {token,user}=await authenticate({...userCred});
    //save token in cookie
    res.cookie("token",token,
        {
            httpOnly:true,
            sameSite:"lax",
            secure:false,
        });
    //send response
    res.status(200).json({message:"user login success",payload:user});
})
//read all the articles(protected route)
userRoute.get('/user/read-all/authorId',async(req,res))=>{
    let authorId=await
    let ,articles=await articleTypeModel.find({author:authorId,isActive:true}).populate('author.articles');
    res.status(200).json({message:"The articles are",articles:articles});
}



//add comment to an article(protected route)