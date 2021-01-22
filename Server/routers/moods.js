const express = require("express");
const moodsController = require("../controllers/moods");
const { authenticate } = require("../middleware");
const router = express.Router();


router.get("/", authenticate, usersController.getAllMoods);

router.get("/:id", authenticate, usersController.getMoodById);

router.get("/username", authenticate, usersController.getAllMoodsByUsername);

// router.get("/date", authenticate, usersController.getAllMoodsByDate);

router.post("/create", authenticate, usersController.createMood);

// router.put("/date", authenticate, usersController.updateMoodByDate);
// router.put("/user", authenticate, usersController.updateMoodByUser);

// router.delete(
//   "/:date", authenticate, usersController.deleteMoodByDate
// );

module.exports = router;
