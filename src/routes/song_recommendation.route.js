import Router from "express";
import {
  addSongRecommendation,
  getAllSongRecommendation,
  removeSongFromRecommendation,
} from "../controllers/song_recommendation.controller.js";

const router = Router();

router.route("/:userId/recommendation").post(addSongRecommendation);
router.route("/:userId/recommendation").get(getAllSongRecommendation);
router
  .route("/:userId/recommendation/:songId")
  .delete(removeSongFromRecommendation);

export default router;
