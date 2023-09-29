const express = require("express");
const authController = require("../conrtollers/auth-controller");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
