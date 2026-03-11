import exp from 'express'
import {register} from '../services/authService.js'
import {authenticate} from '../services/authService.js'
import {config} from 'dotenv'
import { UserTypeModel } from '../models/UserModel.js';
import { articleTypeModel } from '../models/ArticleModel.js';
import { checkAuthor } from '../middlewares/checkAuthor.js';
import { verifyToken } from '../middlewares/verifyToken.js';
config();
export const authorRoute=exp.Router()

//register author(public)
authorRoute.post("/users",async(req,res)=>{
    //get user obj from req bpdy
    let userObj=req.body;
    //call register service
    const newUserObj=await register({... userObj,role:"AUTHOR"});
    //send response
    res.status(201).json({message:"author created",payload:newUserObj});
})
//authenticate author(public)

authorRoute.post("/users/authenticate",async(req,res)=>{
    //get user credential from req body
    let authorCred=req.body;
    //call authenticate service
    let {token,author}=await authenticate({...authorCred,role:"AUTHOR"});
    //save token in cookie
    res.cookie("token",token,
        {
            httpOnly:true,
            sameSite:"lax",
            secure:false,
        });
    //send response
    res.status(200).json({message:"author login success",payload:author});
})
//create article(protected route)
authorRoute.post("/article",verifyToken,checkAuthor,async(req,res)=>{
    //get article obj from req body
    let article=req.body;
    
    //create article
    let newArticleDoc=new articleTypeModel(article);
    //save article document
    let createdArticleDoc=await newArticleDoc.save();
    //send response
    res.status(201).json({message:"article created",payload:createdArticleDoc});
})
//read articles of author (protectd route)
authorRoute.get("/articles/:authorId",verifyToken,checkAuthor,async(req,res)=>{
    //get author id 
    let authorId=req.params.authorId;
    //read articles of the author
    let articles=await articleTypeModel.find({author:authorId,isActive:true}).populate("author.user");
    //send res
    res.status(200).json({message:"author articles",payload:articles});
})
//edit article(protected route)

//delete(soft delete)article



//soft delete article

