const express = require("express");
const router = express.Router();

// Controllers
const { login, signup } = require("../controllers/authCtrl");

router.route("/signup").post(signup);

router.route("/login").post(login);

module.exports = router;
