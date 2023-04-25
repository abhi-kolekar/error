import express from  'express';
import userRoute from './routes/userRoute.js'
import errorMiddleware from './middlewares/Error.js'
import { connectDB } from './config/db.js';
const app=express();


connectDB();

app.get("/",(req, res, next) => {
    res.status(200).json({"message":"Error Handling"})
})
app.use('/user',userRoute);

app.get('*',(req, res, next) => {
    next(Error("Oops, Something Went wrong."))
})
app.use(errorMiddleware);

/*
app.get("/",(req, res, next) => {
    //res.status(200).json({"message":"data"})
    console.log("A")
    next("error");
    //next();
})

app.use((err, req, res, next)=>{
//     console.log('error')
//     res.status(200).json({"message":"data"})
})
*/
app.listen(4000,()=>{
    console.log(`server runing`)
})

