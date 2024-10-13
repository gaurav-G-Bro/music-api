import Router from "express";
import {
  createPlaylist,
  getAllPlaylist,
  getSinglePlaylist,
  updatePlaylist,
  deletePlaylist,
  changePlaylistVisibility,
  getPlaylistByUser,
} from "../controllers/playlist.controller.js";

const router = Router();

router.route("/").post(createPlaylist);
router.route("/").get(getAllPlaylist);
router.route("/:playlistId").get(getSinglePlaylist);
router.route("/:playlistId").put(updatePlaylist);
router.route("/:playlistId").delete(deletePlaylist);
route.route("/:playlistId/visibility").patch(changePlaylistVisibility);
router.route("/:userId/playlist").get(getPlaylistByUser);

export default router;
