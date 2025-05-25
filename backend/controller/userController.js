const User = require("../models/user");
const {default: mongoose} = require('mongoose')

exports.getUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        
        const user = await User.findById(userId);
        console.log(user)
        
        res.status(200).json({ user });
        
    } catch (err) {
        if (!err.statusCode) {
            console.error(err);
            err.statusCode = 500;
        }
        next(err);
    }
};
