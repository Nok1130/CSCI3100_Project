import { createGroup, getGroup, addGroupAdmin, getAllGroupAdmin, getAllGroupOfUser } from "../controller/groupController.js";

import express from "express";

const groupRrouter = express.Router();

groupRrouter.post("/createGroup", createGroup);
groupRrouter.get("/getGroup", getGroup);
groupRrouter.post("/addGroupAdmin", addGroupAdmin);
groupRrouter.get("/getAllGroupAdmin", getAllGroupAdmin);
groupRrouter.get("/getAllGroupOfUser", getAllGroupOfUser);

export default groupRrouter;