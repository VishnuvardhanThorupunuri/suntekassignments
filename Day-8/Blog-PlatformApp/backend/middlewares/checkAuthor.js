import { UserTypeModel } from "../models/UserModel.js";
export const checkAuthor=async(req,res,next)=>{
    //console.log(req.params)
    //get author id 
    try{
        let authorId=req.body?.author||req.params.authorId;
        //check the author
        let author=await UserTypeModel.findById(authorId);
        if(!author || author.role!=="AUTHOR"){
            return res.status(401).json({message:"author not found"});
        }
        if(!author.isActive){
             return res.status(403).json({message:"Account is not active"})
        }
        //forward the request to next middleware or route handler
        next();
}catch(err){
    res.status(500).json({message:"error",reason:err.message});
}
}