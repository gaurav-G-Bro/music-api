import Router from "express";
import {
  createCuratedPlaylist,
  getAllCuratedPlaylist,
  getSingleCuratedPlaylist,
  updateCuratedPlaylist,
  deleteCuratedPlaylist,
} from "../controllers/curated_playist.controller.js";

const router = Router();

router.route("/").post(createCuratedPlaylist);
router.route("/").get(getAllCuratedPlaylist);
router.route("/:curatedPlaylistId").get(getSingleCuratedPlaylist);
router.route("/:curatedPlaylistId").put(updatePupdateCuratedPlaylistrofile);
router.route("/:curatedPlaylistId").delete(deleteCuratedPlaylist);

export default router;
