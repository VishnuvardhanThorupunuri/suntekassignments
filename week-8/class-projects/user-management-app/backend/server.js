/*/Create HTTP Server
import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { UserApp } from './APIs/UserAPI.js'
//Read environment variables
const app=exp()
//Add body parser middleware
app.use(exp.json())
//Forward  req to UserAPI if path starts with/user-ap
//app.use("user-api", UserApp);
//connect to DB
async function connectDB() {
    try{
        await connect(process.env.DB_URL);
        console.log("Connected to DB")

        //Start http server
        app.listen(process.env.PORT,()=> console.log("server started"))
    } catch(err){
        console.log("Err in DB connection",err);
    }
 };
    






connectDB()

//Add error handling middleware
app.use((err,req,res,next)=>{
    console.log("err in middleware:",err)
    res.status(500).json({message:"error",description})
})*/



// Create HTTP server
import exp from 'express'
import { config } from 'dotenv'
import {connect} from 'mongoose'
import { UserApp } from './APIs/UserAPI.js';
import cors from 'cors'
// Read env variables
config();
// Create HTTP server
const app =exp()
// Add body parser middleware
app.use(exp.json())
//Add cors middleware
app.use(cors({
  origin:["http://localhost:5173"] // allow only frontedn server
}))
app.use(exp.json())
// Forward req to UserAPI if path start with /userr-api
app.use ("/user-api", UserApp)

// connect databse
const connectDB = async() =>{
    try{
        await connect(process.env.DB_URL)
        console.log("DATABASE Connected Successfully!")
        
        //start http server
        app.listen(process.env.PORT,()=>console.log("Server Started"))
    }
    catch(err){
        console.log("Error while DATABASE connection",err)
    }
}

connectDB()

//Add error handling middlewares
app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});

/*/ Add error handling middlewares
app.use((err,req,res,next)=>{
    const status = err.status || err.statusCode || 500;
    const isProduction = process.env.NODE_ENV === "production";
})*/