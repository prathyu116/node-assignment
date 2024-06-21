

const express = require("express");
const User = require("../models/user.model");
const authenticate = require("../middleware/authenticate")

// const router = express.Router();


// router.get("/all-users", authenticate,async (req, res) => {
//     try {
//         const users = await User.find().select('-password');
//         res.send(users);
//     } catch (error) {
//         res.status(400).send(error);
//     }

// })
// router.get("/single-user/:id", authenticate,async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id).select('-password');
//         if (!user) {
//             return res.status(404).send({ message: 'User not found' });
//         }
//         res.send(user);
//     } catch (error) {
//         res.status(400).send(error);
//     }

// })
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.listUsers = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

