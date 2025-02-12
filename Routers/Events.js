import express from "express";
import { getAllEvents } from "../Controllers/Events.js";
const eventRoter = express.Router();

eventRoter.get("/", getAllEvents);
//  post ->events add 

export default eventRoter;
