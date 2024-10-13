import Router from "express";
import {
  addNewRelease,
  getNewRelease,
  getNewReleaseByArtist,
  deleteNewRelease,
} from "../controllers/new_release.controller.js";

const router = Router();

router.route("/").post(addNewRelease);
router.route("/").get(getNewRelease);
router.route("/:artistId/new-release").get(getNewReleaseByArtist);
router.route("/:new-releaseId").delete(deleteNewRelease);

export default router;
