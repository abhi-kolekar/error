const errorMiddleware=(err,req,res,next)=>{
    err.message     = err.message || "internal server error";
    err.statusCode  = err.statusCode || 500;
    
    if(err.code === 11000){
        err.message     = "Duplicate key error";
        err.statusCode  = 400;
    }
    if (err instanceof SyntaxError) {
        throw new ReadError("Syntax Error", err);
    }
    res.status(err.statusCode)
        .json({
                success:false, 
                message: err.message
            })

}

export default errorMiddleware;