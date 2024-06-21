const express = require('express');


const userController = require("../controllers/user.controller")
const authController = require("../controllers/auth.controller")

const authanticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/users', authanticate, userController.listUsers);
router.get('/user/:id', authanticate, userController.getUser);

module.exports = router;
