import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs' 

  // Configuration
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null

        //upload this file on cloudinary 

       const response =  await cloudinary.uploader.upload(localFilePath, { resource_type:"auto"})
        // file upload successfully 
        console.log("file is uoploaded on cloudinary", response.url);

        return response

    }catch(error){
        console.log(error)
        fs.unlinkSync(localFilePath) // remove the locally saved temparary file upload operation got failed
        return null
    }
}


export {uploadOnCloudinary}