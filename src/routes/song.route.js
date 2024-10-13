import Router from "express";
import {
  registerSong,
  getAllSong,
  getSingleSong,
  updateSong,
  deleteSong,
  uploadSong,
  uploadSongCoverImage,
} from "../controllers/song.controller.js";

const router = Router();

router.route("/").post(registerSong);
router.route("/").get(getAllSong);
router.route("/:songId").get(getSingleSong);
router.route("/:songId").put(updateSong);
router.route("/:songId").delete(deleteSong);
router.route("/:songId/upload-song").post(uploadSong);
route.route("/:songId/cover-image").post(uploadSongCoverImage);

export default router;
