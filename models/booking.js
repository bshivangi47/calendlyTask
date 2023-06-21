const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    bookingName: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
  },
  { timestamps: true }
);
const Bookings = mongoose.model("bookings", bookingSchema);
module.exports = Bookings;
