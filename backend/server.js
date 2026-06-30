import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./routes/mail.js";

dotenv.config();
const app = express();

// Allow both local dev and deployed frontend
app.use(cors({
  origin: [
    "http://localhost:5173",          // React dev server
    "https://eresume-es.netlify.app"  // Deployed frontend
  ],
  methods: ["GET", "POST"],
}));

app.use(express.json());
app.use("/api", mailRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
