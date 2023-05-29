import express from "express";
import multer from "multer";
const upload = multer();
const router = express.Router();

import {
  createOrder,
  deleteOrder,
  updateProductAmount,
  getOrderByKey,
} from "../controllers/orders.js";

router.post("/", upload.none(), createOrder);
router.delete("/:id", deleteOrder);
router.patch("/:id", upload.none(), updateProductAmount);
router.post("/getOrderByKey", upload.none(), getOrderByKey);

export default router;
