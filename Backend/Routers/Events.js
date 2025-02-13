const express = require("express");
const { getAllEvents } = require("../Controllers/Events");
const eventRoter = express.Router();

eventRoter.get("/", getAllEvents);
//  post ->events add

module.exports = eventRoter;
