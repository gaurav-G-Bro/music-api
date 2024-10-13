import Router from "express";
import {
  registerArtist,
  getAllArtist,
  getSingleArtist,
  updateArtist,
  deleteArtist,
  uploadArtistAvatar,
  getSongByArtist,
} from "../controllers/artist.controller.js";

const router = Router();

router.route("/").post(registerArtist);
router.route("/").get(getAllArtist);
router.route("/:artistId").get(getSingleArtist);
router.route("/:artistId").put(updateArtist);
router.route("/:artistId").delete(deleteArtist);
route.route("/:artistId/profile-avatar").post(uploadArtistAvatar);
router.route("/:artistId/songs").get(getSongByArtist);

export default router;
