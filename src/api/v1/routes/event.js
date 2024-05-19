const express = require("express");
const {
  getAllEvents,
  createEvent,
  getEventById,
} = require("../controllers/eventController");
const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.post("/", createEvent);

module.exports = router;
