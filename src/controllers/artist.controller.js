import { Artist } from "../models/artist.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerArtist = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getAllArtist = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getSingleArtist = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const updateArtist = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const deleteArtist = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const uploadArtistAvatar = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getSongByArtist = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export {
  registerArtist,
  getAllArtist,
  getSingleArtist,
  updateArtist,
  deleteArtist,
  uploadArtistAvatar,
  getSongByArtist,
};
