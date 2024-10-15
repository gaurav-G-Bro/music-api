import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadFileOnCloudinary } from "../utils/cloudinary.upload.js";
import fs from "fs";
import { emailRegex, imageMimeTypeRegex } from "../constants/constant.js";

const register = asyncHandler(async (req, res) => {
  const { username, email, password, fullname, bio } = req.body;
  try {
    if (!username || username.trim() === "")
      throw new ApiError(400, "username is required");

    if (username.length < 5 || username.length > 20)
      throw new ApiError(
        400,
        "username characters must be greater than 4 and less than 20"
      );

    if (!email || email.trim() === "")
      throw new ApiError(400, "email is required");

    if (!emailRegex.test(email)) throw new ApiError(400, "invalid email");

    if (!password || password.trim() === "")
      throw new ApiError(400, "password is required");

    if (password.length < 5)
      throw new ApiError(
        400,
        "password must be greater or equal to 5 characters"
      );

    if (!fullname || fullname.trim() === "")
      throw new ApiError(400, "fullname is required");

    if (!req.file) throw new ApiError(400, "avatar file is required");

    if (!imageMimeTypeRegex.test(req.file?.mimetype)) {
      await fs.unlinkSync(req.file?.path);
      throw new ApiError(
        400,
        "avatar must be type of these [jpeg, png, bmp, webp] only"
      );
    }

    const localAvatarPath = req.file?.path;
    if (!localAvatarPath) throw new ApiError(500, "unknown error");

    const existingUser = await User.findOne({
      $or: [
        { username: username.toLowerCase() },
        { email: email.toLowerCase() },
      ],
    });

    if (existingUser)
      throw new ApiError(400, "username or email is already registered");

    const avatarUploadStatus = await uploadFileOnCloudinary(localAvatarPath);
    if (!avatarUploadStatus?.url)
      throw new ApiError(
        500,
        "something went wrong while uploading the avatar"
      );

    const userData = {
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password,
      fullname,
      avatar: avatarUploadStatus?.url,
      bio: !bio ? "" : bio,
    };

    const user = await User.create(userData);
    if (!user)
      throw new ApiError(
        500,
        "something went wrong while registering the user"
      );

    return res
      .status(200)
      .json(new ApiResponse(200, "user registered successfully", user));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || email.trim() === "")
      throw new ApiError(400, "email or username is required");

    if (!password || password.trim() === "")
      throw new ApiError(400, "password is required");

    const existedUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { username: email.toLowerCase() }],
    });

    if (!existedUser) throw new ApiError(404, "user not registered");

    let passwordStatus;
    if (existedUser) {
      passwordStatus = await existedUser.isPasswordValid(password);
      if (!passwordStatus) throw new ApiError(401, "Invalid login credentials");
    }

    let accessToken, refreshToken;
    if (passwordStatus) {
      accessToken = await existedUser.generateAccessToken(existedUser._id);
      refreshToken = await existedUser.generateRefreshToken(existedUser._id);

      if (!accessToken || !refreshToken)
        throw new ApiError(
          500,
          "something went wrong while generating the access and refresh token"
        );

      const existingUser = await User.findById(existedUser._id).select(
        "-password"
      );

      return res
        .status(200)
        .cookie("accessToken", accessToken)
        .cookie("refreshToken", refreshToken)
        .json(
          new ApiResponse(200, "user logged in successfully", {
            existingUser,
            accessToken,
            refreshToken,
          })
        );
    }
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getAllUser = asyncHandler(async (req, res) => {
  try {
    if (!req.user) throw new ApiError(401, "user not logged in");
    const existingUser = await User.findById(req.user._id);
    if (!existingUser)
      throw new ApiError(404, "user not available in the database");

    const users = await User.find({}).select("-password");
    if (!users) throw new ApiError(500, "No users found");

    return res
      .status(200)
      .json(new ApiResponse(200, "users fetched successfully", users));
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getSingleUser = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const updateProfile = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const deleteProfile = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const uploadProfileAvatar = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const updateBio = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const logout = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const refreshToken = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export {
  register,
  login,
  getAllUser,
  getSingleUser,
  updateProfile,
  deleteProfile,
  uploadProfileAvatar,
  updateBio,
  logout,
  refreshToken,
};
