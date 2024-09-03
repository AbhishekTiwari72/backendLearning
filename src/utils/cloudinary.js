import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs' 

  // Configuration
  cloudinary.config({ 
    cloud_name: 'dwlnmztmy', 
    api_key:'599645814118891', 
    api_secret:'VjP7m_3ZAmKcic9NIWjkRXtKDrQ' 
  });
  
  const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

const deleteFromCloudinary = async(file_public_id) => {
    try {

        if (!file_public_id) {
            console.log("File not found");
            return null;
        }

        const response = await cloudinary.uploader.destroy(file_public_id, {
            resource_type: "auto"
        });

        if (response.result === "ok") {
            console.log(`Successfully deleted file with public ID: ${file_public_id}`);
        } else {
            console.log(`Failed to delete file: ${response.result}`);
        }

        return response;
        
    } catch (error) {
        console.log("error while deleting the file");
        throw error;
    }
}



  export {uploadOnCloudinary, deleteFromCloudinary}