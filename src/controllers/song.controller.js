import { Song } from "../models/song.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerSong = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getAllSong = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const getSingleSong = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const updateSong = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const deleteSong = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const uploadSong = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

const uploadSongCoverImage = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});

export {
  registerSong,
  getAllSong,
  getSingleSong,
  updateSong,
  deleteSong,
  uploadSong,
  uploadSongCoverImage,
};
