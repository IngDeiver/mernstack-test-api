import "./config/environment";
import "./database/connection";
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import productRouter from "./api/product.route";
import { errorHandler } from "./middlewares";
const path = require('path')

const app: Application = express();
const port = process.env.PORT || 3000;

// midddlwares
app.use(cors({ origin: process.env.ORIGIN }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));


// set routes
app.use("/api/products", productRouter);

// Error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Resdtful API listening at port: ${port}`);
});
