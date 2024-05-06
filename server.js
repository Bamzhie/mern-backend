require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

const app = express();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connected to db && listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
