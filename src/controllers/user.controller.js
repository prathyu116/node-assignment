

const User = require("../models/user.model");


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
        const users = await User.find().select('-password');
        if (!users) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send(users);
    } catch (error) {
        res.status(400).send(error);
    }
};

