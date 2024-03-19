import express from "express";
import connectDB from "../db/index.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();
const app = express();
connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server listening on port 3000");
    });
    app.use('/api/user',userRoutes);
})
.catch((err)=>{
    console.log(err.message);
})