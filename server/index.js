import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import orderRouter from "./routes/orders.js";
import dotenv from "dotenv";
import multer from "multer";
import { shops } from "./public/data.js";
const upload = multer();

import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
//app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(cors());
app.use("/order", orderRouter); // http://localhost:5000/order

app.get("/shops", upload.none(), (req, res) => {
  res.send(shops);
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
