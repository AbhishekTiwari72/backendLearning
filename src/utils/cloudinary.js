import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs' 

  // Configuration
  cloudinary.config({ 
    cloud_name: 'dwlnmztmy', 
    api_key:'599645814118891', 
    api_secret:'VjP7m_3ZAmKcic9NIWjkRXtKDrQ' 
  });
  

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null

        //upload this file on cloudinary 

       const response =  await cloudinary.uploader.upload(localFilePath, { resource_type:"auto"})

        fs.unlinkSync(localFilePath) // remove the locally saved temparary file upload operation got failed
        
        return response

    }catch(error){
        console.log(error)
        fs.unlinkSync(localFilePath) // remove the locally saved temparary file upload operation got failed
        return null
    }
}


export {uploadOnCloudinary}