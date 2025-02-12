import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import registerRoute from "./Router/Login.js";
import eventRoute from "./Router/Events.js";
import loginRoute from "./Router/Register.js";

// import CheckForAuthenticationCookie from './MiddleWare/Auth.js';
import cookieParser from "cookie-parser";

// ..................................................................
// Connect()
dotenv.config({ path: ".env" });
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((e) => console.log(e));

//..................................................................

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true,
};

app.use(cors(corsOptions));

//...................................................................

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/events", eventRoute);

//....................................................................
app.listen(process.env.PORT, () => {
  console.log("Server Running at Port " + process.env.PORT);
});
