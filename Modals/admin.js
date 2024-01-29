import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  Adminname: {
    required: true,
    type: String,
  },

  Adminemail: {
    type: String,
    required: true,
    unique: true,
  },

  Adminpassword: {
    type: String,
    required: true,
  },
  Adminphone:{
    type:String,
    require:true,
    unique:true
  },
  Adminrole: {
    type: String,
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  
});

export const Admin = mongoose.model("Admin", AdminSchema);
