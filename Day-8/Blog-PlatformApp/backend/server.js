import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import cookieParser from 'cookieparser'
import { userRoute } from './APIs/UserAPI.js'
import { authorRoute } from './APIs/AuthorAPI.js'
import { adminRoute } from './APIs/AdminAPI.js'
import { verifyToken } from './middlewares/verifyToken.js'
config() //process.env
//create express application
const app=exp()
//add body parser middleware
app.use(exp.json())
//add cookie parser middleware
app.use
//connect APIs
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)

//connect to db
const connectDB=async()=>{
    try{
    await connect(process.env.DB_URL)
    console.log("DB connection success")
    //start server
    app.listen(process.env.PORT,()=>console.log("server listening on 3000"))
    }catch(err){
        console.log("DB connection failed",err)
    }
}
connectDB();

app.post('/logout',(req,res)=>{
    //Clear the cookie named "token"
    res.clearCookie('token',{
        httpOnly:true, //Must match  original settings
        secure:false,//Must match original settings
        sameSite:'lax'//Must match original settings
    });
    res.status(200).json({message:'Logged out successfully'});
});












//error handling middleware
app.use((err, req,res,next)=>{
    console.log("err:",err)
    res.json({message:"error",reason:err.message})
})