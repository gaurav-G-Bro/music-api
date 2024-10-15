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
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/auth/signup").post(upload.single("avatar"), register);
router.route("/auth/login").post(login);
router.route("/").get(verifyToken, getAllUser);
router.route("/:userId").get(verifyToken, getSingleUser);
router.route("/profile/:userId").put(verifyToken, updateProfile);
router.route("/profile/:userId").delete(verifyToken, deleteProfile);
router.route("/:userId/profile-picture").post(verifyToken, uploadProfileAvatar);
router.route("/:userId/bio").patch(verifyToken, updateBio);
router.route("/logout").post(verifyToken, logout);
router.route("/refresh-token").post(verifyToken, refreshToken);

export default router;
