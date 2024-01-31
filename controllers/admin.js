import { Admin } from "../Modals/admin.js";
import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";

export const register = async (req, res) => {
  const { Adminname, Adminemail, Adminpassword ,Adminphone} = req.body;
  // console.log(req.body);
  let admin = await Admin.findOne({ Adminemail });
  let adminPhone = await Admin.findOne({ Adminphone });

  if (admin || adminPhone) return res.status(404).json({ message: "Admin already exist..!" });

  const hashPassword = await bcrypt.hash(Adminpassword, 10);

  admin = await Admin.create({ Adminname, Adminemail, Adminpassword: hashPassword,Adminphone});

  res.status(201).json({ message: "admin Register Successfully!", admin });
};

export const login = async (req, res) => {
  const { Adminemail, Adminpassword } = req.body;

  let admin = await Admin.findOne({ Adminemail });

  if (!admin) return res.status(404).json({ message: "Admin not exist..!" });

  const validPassword = await bcrypt.compare(Adminpassword, admin.Adminpassword);

  if (!validPassword) return res.json({ message: "Invalid Credential.." });

  const token = jwt.sign({ adminId: admin.id }, process.env.JWT_ACCESS_KEY, {
    expiresIn: "1d",
  });

  res.status(200).json({ message: `Welcome ${admin.Adminname}`, token });
};


export const adminProfile = async (req,res) =>{
  res.json({admin:req.admin})
}