import Router from "express";
import {
  followArtist,
  unfollowArtist,
  getArtistFollowedByUser,
  getArtistFollowers,
} from "../controllers/user_following_artist.controller.js";

const router = Router();

router.route("/:userId/follow-artist/:artistId").post(followArtist);
router.route("/:userId/unfollow-artist/:artistId").delete(unfollowArtist);
router.route("/:userId/followed-artist").get(getArtistFollowedByUser);
router.route("/:artistId/followers").get(getArtistFollowers);

export default router;
