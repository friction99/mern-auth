import express from "express";
import connectDB from "../db/index.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"
dotenv.config();
const app = express();
app.use(express.json());
connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server listening on port 3000");
    });
    app.use('/api/user',userRoutes);
    app.use('/api/auth',authRoutes);
    app.use((err,req,res,next)=>{
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal Server error";
        return res.status(statusCode).json({
            success:false,
            message,
            statusCode
        })
    })
})
.catch((err)=>{
    console.log(err.message);
})