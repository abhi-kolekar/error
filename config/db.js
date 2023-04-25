import mongoose from "mongoose"
export const connectDB=async()=>{
    try{
        const {connection} = await mongoose.connect('mongodb://127.0.0.1:27017/crud');
        console.log(`Connected with ${connection.host}`);

    }catch(err){
        console.log(err);
    }
}