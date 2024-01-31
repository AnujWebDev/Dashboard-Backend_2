import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import userRouter from "./Routes/user.js";
import entryRouter from "./Routes/entry.js";
import adminRouter from "./Routes/admin.js";
import bodyParser from "express";
import cors from "cors";

const app = express();

// creating config file
config({ path: ".env" });
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// userRouter
app.use("/api", userRouter);
//entryRouter
app.use("/api", entryRouter);
//adminRouter
app.use("/api", adminRouter);

// DB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Dashboard",
  })
  .then(() => console.log("MongoDB is Connected..!"))


// Server Setup
const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
