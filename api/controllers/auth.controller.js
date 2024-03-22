import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { ApiError } from "../Utils/ApiError.js";
import jwt from "jsonwebtoken";
import { version } from "mongoose";
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
export const signin = async(req,res,next)=>{
    const {username,password} = req.body;
    try{
        const validUser = await User.findOne({username});
        if(!validUser) return next(ApiError(404,"User not found"));
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(ApiError(401,"Wrong credentials"));
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password:hashedPassword, ...rest} = validUser._doc;
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
    }catch(error){
        next(error);
    }
}