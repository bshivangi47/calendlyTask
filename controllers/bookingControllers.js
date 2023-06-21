const mongoose = require("mongoose");
const Bookings = require("../models/booking");
const Availability = require("../models/availability");

const book = async (req, res) => {
  try {
    const { bookingName, startTime, endTime } = req.body;

    const availability = Availability.findOne({ startTime, endTime });
    const booking = Bookings.findOne({ startTime, endTime });
    if (availability != null) {
      const newBooking = new Bookings({
        bookingName,
        startTime,
        endTime,
      });
      await newBooking.save();

      await Availability.deleteOne({ startTime, endTime });

      res
        .status(200)
        .json({ message: "Your time has been booked", success: false });
    } else {
      res
        .status(400)
        .json({ message: "Availability does not exist", success: false });
    }
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};

module.exports = {
  book,
};
