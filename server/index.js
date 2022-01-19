import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import bodyParser from "body-parser";

import productRoutes from "./routes/productRoutes.js";
import suuqRoutes from "./routes/suuqRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

//routes

app.use("/api/products", productRoutes);
app.use("/api/suuq", suuqRoutes);
app.use("/api/auth", userRoutes);

// middleWare

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World! I am server and running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `app is running on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
  );
});
