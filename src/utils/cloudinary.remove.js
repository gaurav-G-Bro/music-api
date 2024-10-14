import { ApiError } from "../utils/ApiError.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
});

const removeFileFromCloudinary = async function (public_id) {
  try {
    if (!public_id) throw new ApiError(400, "public id is required");
    const status = await cloudinary.uploader.destroy(public_id);
    if (!status)
      throw new ApiError(500, "something went wrong while removing the file");
    return status;
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
};

export { removeFileFromCloudinary };
