import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { ApiError } from "../Utils/ApiError.js";
export const signup = async(req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedPassword = await bcryptjs.hash(password,10);
    const newUser = new User({username,email,password:hashedPassword});
    try{
        await newUser.save();
        res.status(201).json({
            message:"User created Successfuly"
        });
    }catch(error){
        next(error);
    }
}