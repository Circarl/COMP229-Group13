const express = require("express");
const { signUp } = require("../middleware/userControler"); // Updated import
const router = express.Router();

// Admin || User
router.route("/create").post(signUp);

// Admin
module.exports = router;
