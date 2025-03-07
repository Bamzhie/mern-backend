const express = require("express");
// controler functions
const { loginUser, signUpUser } = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signUpUser);

module.exports = router;
