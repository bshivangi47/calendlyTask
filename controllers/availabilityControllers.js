const mongoose = require("mongoose");
const Availability = require("../models/availability");

const setAvailability = async (req, res) => {
  try {
    const { availability } = req.body;

    availability.map(async (a) => {
      const newAvailability = new Availability({
        startTime: a.startTime,
        endTime: a.endTime,
      });
      await newAvailability.save();
    });

    res.status(200).json({ message: "Availabilities are set", success: false });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};

const getAvailability = async (req, res) => {
  try {
    Availability.find()
      .then((availabilities) => {
        res.status(200).json({ message: availabilities, success: true });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message, success: false });
      });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

module.exports = {
  setAvailability,
  getAvailability,
};
