import Router from "express";
import {
  shareSong,
  getSharedSong,
  unshareSong,
} from "../controllers/shared_song.controller.js";

const router = Router();

router.route("/:songId/share").post(shareSong);
router.route("/:userId/shared-songs").get(getSharedSong);
router.route("/:sharedSongId").delete(unshareSong);

export default router;
