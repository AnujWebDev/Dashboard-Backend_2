import { Admin } from "../Modals/admin.js";
import jwt from "jsonwebtoken";

export const AdminAuthenticate = async (req, res, next) => {
  const token = req.header("Auth");
  try {
    if (!token) return res.json({ message: "Login First..!" });

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_KEY);
    const id = decoded.adminId;
    // console.log(decoded.adminId);
    let admin = await Admin.findById(id);
    if (!admin) return res.json({ message: "Admin Not exist" });
    req.admin = admin;

    next();
  } catch (err) {
    if (err.name == "TokenExpiredError")
      return res.json({ message: "Token Expired please login" });

    res.json({ message: "Internal Server Error.." });
  }
};
