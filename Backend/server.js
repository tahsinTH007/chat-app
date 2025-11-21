import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { connectDB } from "./utils/db.js";

const app = express();
const httpServer = http.createServer(app);

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

try {
  await connectDB();
  const port = process.env.PORT || 3000;

  httpServer.listen(port, () => {
    console.log(`Server running on port:${port}`);
  });
} catch (error) {
  console.error("This server failed to start", error);
  process.exit(1);
}
