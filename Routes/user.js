import express from "express"
import { getAllUsers, getUserById, login, myProfile, register, updateUsers } from "../controllers/user.js";
import { Authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ message: "This is Home Route" }));

router.post("/register", register);

router.post("/login", login);

router.get("/users",getAllUsers);

router.get("/user/:id",Authenticate, getUserById);

router.get("/profile",Authenticate,myProfile)

router.put("/user/:id",Authenticate,updateUsers);

export default router
