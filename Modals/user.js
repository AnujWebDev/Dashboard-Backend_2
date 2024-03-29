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
    type:Number,
    require:true,
    unique:true
  },
  role: {
    type: String,
    default: "user",
  },
  packages:{
    type:String,
    default:"No Package"
  },
  time:{
    type:String,
    default:"No time"
  },
  device:{
    type:String,
    default:"No Device"
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  
});

export const User = mongoose.model("User", userSchema);

