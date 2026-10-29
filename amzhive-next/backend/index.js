import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDataBase from "./config/database.js";
import blogRoutes from "./routes/blogRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDataBase();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// ─── API Routes ───────────────────────────────────────────────
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/uploads", express.static(path.join(path.resolve(), "/uploads/")));

// ─── Health Check ─────────────────────────────────────────────
app.get("/api", (req, res) => {
  res.json({ message: "AMZHive API Running ✅" });
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
