class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode;
        console.log(Error)
    }

    static validationError(message = 'All fields are required!') {
        return new ErrorHandler(message,422);
    }
}

export default ErrorHandler;