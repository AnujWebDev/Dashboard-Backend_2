import express from "express"
import { getAllUsers, getUserById, login, register } from "../controllers/user.js";
import { Authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ message: "This is Home Route" }));
router.get("/register", register);

router.post("/login", login);

router.get("/users",getAllUsers);

router.get("/user/:id",Authenticate, getUserById);

export default router
