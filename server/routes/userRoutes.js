import express from "express";
import {
  authUser,
  getUserById,
  registerUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/:id").get(getUserById);

export default router;
