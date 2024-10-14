import { ApiError } from "../utils/ApiError.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
});

const uploadFileOnCloudinary = async function (localPath) {
  try {
    if (!localPath) throw new ApiError(400, "file path is required");
    const status = await cloudinary.uploader.upload(localPath, {
      resource_type: "image",
    });
    if (!status)
      throw new ApiError(500, "something went wrong while uploading the file");
    await fs.unlinkSync(localPath);
    return status;
  } catch (error) {
    await fs.unlinkSync(localPath);
    throw new ApiError(error.statusCode, error.message);
  }
};

export { uploadFileOnCloudinary };
