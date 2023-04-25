import ErrorHandler from "../utils/errorhandler.js"
import { User } from "../models/user.js"
import { catchAsyncError } from "../middlewares/catchAsyncError.js"
export const allUsers=(req,res,next) => {
    res.status(200).json({"message":"User Data"})
} 

export const createUser=catchAsyncError(async(req,res,next) => {
  
    const user = await User.findOne({email:"abc1@mail.com"});
    if(user){
         //return next(ErrorHandler.validationError());
         return next(new ErrorHandler("User Already Exists",400));
    }
    await User.create({
     name:"abc",email:"abc1@mail.com"
    })
    res.status(201).json({"message":"User Created Successfully"})

}) 

export const createnewUser= async(req,res,next) => {
    try{
        /*
        const userExist=false;
        if(userExist){
            return next(new ErrorHandler("User Already Exists",400));
        }*/

        const user = await User.findOne({email:"abc@mail.com"});
        if(user){
             return next(new ErrorHandler("User Already Exists",400));
        }
        await User.create({
         name:"abc",email:"abc@mail.com"
        })
        res.status(201).json({"message":"User Created Successfully"})
    }catch(error){
        return next(error)
        return next(new ErrorHandler(error))
    }
} 

