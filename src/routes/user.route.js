import Router from "express";
import {
  register,
  login,
  getAllUser,
  getSingleUser,
  updateProfile,
  deleteProfile,
  uploadProfileAvatar,
  updateBio,
  logout,
  refreshToken,
  getPlaylistByUser,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/signup").post(register);
router.route("/login").post(login);
router.route("/").get(getAllUser);
router.route("/:userId").get(getSingleUser);
router.route("/profile/:userId").put(updateProfile);
router.route("/profile/:userId").delete(deleteProfile);
router.route("/:userId/profile-picture").post(uploadProfileAvatar);
router.route("/:userId/bio").patch(updateBio);
router.route("/logout").post(logout);
router.route("/refresh-token").post(refreshToken);

export default router;
