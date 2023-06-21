const mongoose = require("mongoose");

const availabilitySchema = mongoose.Schema(
  {
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
  },
  { timestamps: true }
);
const Availability = mongoose.model("Availability", availabilitySchema);
module.exports = Availability;
