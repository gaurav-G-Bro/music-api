import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const generateAccessRefreshToken = async function (userId) {
  try {
    if (!userId) throw new ApiError(400, "user Id is required");
    const user = await User.findById(userId);
    if (!user) throw new ApiError(400, "Invalid user Id");

    const accessToken = await user.generateAccessToken(userId);
    const refreshToken = await user.generateRefreshToken(userId);

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
};

export { generateAccessRefreshToken };
