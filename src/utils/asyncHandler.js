//One way to do it using Promise    

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error)=>{
        next(error)
    })
}


export {asyncHandler}

// One way to do it using function async and try catch


// const asyncHandler = (fn) = async(req, res, next)=>{
//     try{
 //   return fn(req, res, next)

//     }catch(error){
//     res.status(500).json({
//     success:false,
//     message:error.message
//     })
//     }
// }