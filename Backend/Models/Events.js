import mongoose from "mongoose";

// User Schema
const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },

    //    team type
    // images -> strings
    // uniqueId :
    //  category :
    // noOFRounds:
    // EventType : ONline/Offline
    // price:
    // ParticipationFee

    rules: {
      required: true,
    }, // description -> array of strings -> point wise rules
  },
  { timestamps: true }
);

const Events = mongoose.model("Events", eventSchema);

export default Events;
