const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all workouts routes

router.use(requireAuth);

// get all workouts
router.get("/", getWorkouts);

// get single workout
router.get("/:id", getWorkout);

//post workout
router.post("/", createWorkout);

//delete workout
router.delete("/:id", deleteWorkout);

//update workout
router.patch("/:id", updateWorkout);

module.exports = router;
