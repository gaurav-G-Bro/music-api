import { UserFollowingArtist } from "../models/user_following_artist.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const followArtist = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const unfollowArtist = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getArtistFollowedByUser = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getArtistFollowers = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export {
  followArtist,
  unfollowArtist,
  getArtistFollowedByUser,
  getArtistFollowers,
};
