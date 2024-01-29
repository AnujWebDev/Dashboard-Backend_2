import express from "express"
import { login,register } from "../controllers/admin.js";

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => res.json({ message: "This is Home Route" }));

adminRouter.get("/admin/register", register);

adminRouter.post("/admin/login", login);


export default adminRouter
