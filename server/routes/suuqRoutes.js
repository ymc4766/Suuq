import express from "express";
import { getSuuq, getSuuqById } from "../controllers/suuqControllers.js";

const router = express.Router();

router.route("/").get(getSuuq);
// router.route("/new").post(createProducts);
router.get("/:id", getSuuqById);

export default router;
