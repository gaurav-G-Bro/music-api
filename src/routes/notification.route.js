import Router from "express";
import {
  createNotification,
  getAllNotification,
  markAsReadNotification,
  deleteNotification,
} from "../controllers/notification.controller.js";

const router = Router();

router.route("/").post(createNotification);
router.route("/:userId/notification").get(getAllNotification);
router.route("/:notificationId/read").patch(markAsReadNotification);
router.route("/:notificationId").delete(deleteNotification);

export default router;
