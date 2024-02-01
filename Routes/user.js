import express from "express"
import { PackageUsers, getAllUsers, getUserById, login, myProfile, register, updateUsers } from "../controllers/user.js";
import { Authenticate } from "../middlewares/auth.js";
import { AdminAuthenticate } from "../middlewares/adminAuth.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ message: "This is Home Route" }));

router.post("/register", register);

router.post("/login", login);

router.get("/users",getAllUsers);

router.get("/user/:id",AdminAuthenticate, getUserById);

router.get("/profile",Authenticate,myProfile)

router.put("/user/:id",updateUsers);

router.put("/package/:id",PackageUsers);

export default router
