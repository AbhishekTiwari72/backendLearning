class ApiError extends Error {

    constructor(
        statusCode, 
        message = "Something Went Wrong",
        errors = [],
        stack = ""
    ) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.data = null,
        this.errors = errors

        if(stack) { 
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }

}

export {ApiError}