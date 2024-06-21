

const express = require("express");
const User = require("../models/user.model");
const authenticate = require("../middleware/authenticate")

const router = express.Router();


router.get("/all-users", authenticate,async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(400).send(error);
    }

})

module.exports = router;