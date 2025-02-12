import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    // email, phone, school/clg, stream, referallID, isAdmin, isCampusAmbassador
    // eventsParticipated : array of events -> type -> objects
  
  },
  { timestamps: true }
);

const Users = mongoose.model("users", userSchema);
export default Users;
