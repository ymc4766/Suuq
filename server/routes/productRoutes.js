import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productControllers.js";

const router = express.Router();

router.route("/").get(getProducts);
// router.route("/new").post(createProducts);
router.get("/:id", getProductById);

export default router;
