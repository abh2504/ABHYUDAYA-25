const express = require("express");
const mongoose = require("mongoose");
const eventRouter = require("./Routers/Events"); 

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

app.use("/events", eventRouter); // Aditi
// Vinayak -> Users

// app.use('/email', ) -> Chandan

// ....................................................................
app.listen(8000, () => {
  console.log("Server Running at Port " + 8000);
});
