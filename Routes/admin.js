import express from "express"
import { adminProfile, login,register } from "../controllers/admin.js";
import { AdminAuthenticate } from "../middlewares/adminAuth.js";

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => res.json({ message: "This is Home Route" }));

adminRouter.get("/admin/register", register);

adminRouter.post("/admin/login", login);

adminRouter.get("/admin/profile",AdminAuthenticate,adminProfile)

export default adminRouter
