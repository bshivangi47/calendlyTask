const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const http = require("http");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("WELCOME");
});

const bookings = require("./routes/bookingRoutes");
const availabilities = require("./routes/availabilityRoutes");

app.use("/bookings", bookings);
app.use("/availabilities", availabilities);

server = http.createServer(app);

const PORT = process.env.PORT;
CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    server.listen(PORT, async () => {
      console.log(`DB connnected and Server running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("ConnectionError...", error);
  });

mongoose.set("useFindAndModify", false);
