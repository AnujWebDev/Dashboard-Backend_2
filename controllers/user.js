import { User } from "../Modals/user.js";
import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password, phone } = req.body;
  
  console.log('Request Body:', req.body);

  let user = await User.findOne({ email });
  let userPhone = await User.findOne({ phone });

  if (user || userPhone) {
    return res.status(404).json({ message: "User already exists!" });
  }

  try {
    console.log('Password before hashing:', password);

    const hashPassword = await bcrypt.hash(password, 10);

    console.log('Password after hashing:', hashPassword);

    user = await User.create({ name, email, password: hashPassword, phone });

    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: "Internal server error during registration." });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not exist..!" });

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) return res.json({ message: "Invalid Credential.." });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_KEY, {
    expiresIn: "1d",
  });

  res.status(200).json({ message: `Welcome ${user.name}`, token });
};

export const getAllUsers = async (req, res) => {
  const user = await User.find();
  if (!user) return res.json({ message: "No User Find..!" });

  res.json({ user });
};


export const getUserById = async (req,res) =>{
  const id = req.params.id
  
  let user = await User.findById(id)

  if(!user) return res.json({message:'User not exist'})

  res.json({user});


}

export const myProfile = async (req,res) =>{
  res.json({user:req.user})
}