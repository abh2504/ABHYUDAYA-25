import express from "express";
import mongoose from "mongoose";
import eventRoter from "./Routers/Events.js";

// ..................................................................
// Connect()
mongoose
  .connect("mongodb://127.0.0.1:27017/abhyudaya25")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((e) => console.log(e));


const app = express();

//  1st route

app.get("/", (req, res) => {
  res.send("Ping from the server !");
});

app.use('/events', eventRoter); // Aditi
// Vinayak -> USers `

// app.use('/email', ) -> Chandan



//....................................................................
app.listen(8000, () => {
  console.log("Server Running at Port " + 8000);
});
