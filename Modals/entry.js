import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
  Stratergy: {
    type: String,
    require: true,
  },
  Script: {
    type: String,
    require: true,
  },
  Qty: {
    type: String,
    require: true,
  },
  Side: {
    type: String,
    require: true,
  },
  EntryPrice: {
    type: String,
    require: true,
  },
  ExitPrice: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
  Pnl: {
    type: String,
  },
  Package:{
    type:String,
  },
  Status:{
    type:String,
    require:true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Entry = mongoose.model("Entry", entrySchema);
