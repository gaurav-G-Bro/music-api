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
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.upload.js";

const router = Router();

router.route("/auth/signup").post(upload.single("avatar"), register);
router.route("/auth/login").post(login);
router.route("/").get(getAllUser);
router.route("/:userId").get(getSingleUser);
router.route("/profile/:userId").put(updateProfile);
router.route("/profile/:userId").delete(deleteProfile);
router.route("/:userId/profile-picture").post(uploadProfileAvatar);
router.route("/:userId/bio").patch(updateBio);
router.route("/logout").post(logout);
router.route("/refresh-token").post(refreshToken);

export default router;
