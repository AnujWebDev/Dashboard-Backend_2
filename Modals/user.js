import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  phone:{
    type:String,
    require:true,
    unique:true
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  
});

export const User = mongoose.model("User", userSchema);

