import express from "express";
import { addEntry, deleteById, getEntry, getEntryById, updateEntry } from "../controllers/entry.js";
import { AdminAuthenticate } from "../middlewares/adminAuth.js";

export const entryRouter = express.Router();

entryRouter.post('/addentry',AdminAuthenticate ,addEntry)

entryRouter.get('/getentries',getEntry)

entryRouter.put('/entry/:id',AdminAuthenticate,updateEntry)

entryRouter.get("/entry/:id",AdminAuthenticate, getEntryById);

entryRouter.delete("/entry/:id",AdminAuthenticate,deleteById)


export default entryRouter

