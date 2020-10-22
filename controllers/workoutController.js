const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workout", (req, res) => {
  db.Workout.find({})
    .then((foundWorkout) => {
      res.json(foundWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve workout.",
      });
    });
});
router.get("/api/workout/:id", (req, res) => {
  db.Workout.findById(req.params.id)
    .then((foundWorkout) => {
      res.json(foundWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve workout.",
      });
    });
});

router.post("/api/workout", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to create new workout.",
      });
    });
});

//make post and delete for workouts

router.put("/api/workout/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedWorkout) => {
      res.json(updatedWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to update workout info.",
      });
    });
});

router.delete("/api/workout/:id", (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id)
    .then((deletedItem) => {
      res.json(deletedItem);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to delete workout.",
      });
    });
});

module.exports = router;