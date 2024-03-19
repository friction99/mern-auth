import express from "express";
import connectDB from "../db/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server listening on port 3000");
    });
})
.catch((err)=>{
    console.log(err.message);
})