import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { ENV } from "./lib/env.js";

const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({
  origin: ENV.CLIENT_URL,
  credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
  });
});