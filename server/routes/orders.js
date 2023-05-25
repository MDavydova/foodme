import express from "express";
import multer from "multer";
const upload = multer();
const router = express.Router();

import {
  createOrder,
  deleteOrder,
  updateProductAmount,
  getOrderById,
  getOrderByEmail,
  getOrderByPhone,
} from "../controllers/orders.js";

router.post("/", upload.none(), createOrder);
router.delete("/:id", deleteOrder);
router.patch("/:id", upload.none(), updateProductAmount);
router.get("/getOrderByEmail", upload.none(), getOrderByEmail);
router.get("/getOrderByPhone", upload.none(), getOrderByPhone);
router.get("/getOrderById", upload.none(), getOrderById);

export default router;
