const express = require("express");
const moodsController = require("../controllers/moods");
const { authenticate } = require("../middleware");
const router = express.Router();


router.get("/", authenticate, moodsController.getAllMoods);

router.get("/:id", authenticate, moodsController.getMoodById);

router.get("/username/:username", authenticate, moodsController.getAllMoodsByUsername);

router.get("/date/:date", authenticate, moodsController.getAllMoodsByDate);

router.post("/create", authenticate, moodsController.createMood);

router.put("/update", authenticate, moodsController.updateMoodByDateAndUsernameAndTime);
// router.put("/user", authenticate, usersController.updateMoodByUser);

router.delete(
   "/delete", authenticate, moodsController.deleteMoodByDateAndUsernameAndTime
 );

module.exports = router;
