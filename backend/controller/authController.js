const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const User = require('../models/user');

const saltRounds = 12;

exports.signup = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error('Validation failed.');
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const hashedPw = await bcrypt.hash(password, saltRounds)
        const user = new User({
            name: name,
            email: email,
            password: hashedPw,
        });

        const alreadyUser = await User.findOne({ email: email })
        if (alreadyUser) {
            return res.status(401).json({
                success: false,
                message: "Email Already Exists! Please Login",
            });
        }

        const result = await user.save();
        console.log("USER CREATED")
        res.status(201).json({
            message: 'User created!',
            response: true
        });
    }
    catch (err) {
        if (!err.statusCode) {
            console.log(err)
            err.statusCode = 500;
        }
        next(err);
    };
};

exports.postLogin = async (req, res, next) => {
    try {
        const success = false;
        const email = req.body.email;
        const password = req.body.password;
        let loadedUser;

        const userFound = await User.findOne({ email: email })
        if (!userFound) {
            return res.status(401).json({
                success: false,
                message: "User Doesn't Exist! Please Sign up!",
            });
        }
        // user exists at this point;
        loadedUser = userFound;
        const doesMatch = await bcrypt.compare(password, loadedUser.password)
        if (!doesMatch) {
            return res.status(401).json({
                success: false,
                message: "Wrong Password. Please try again",
            });
            // const error = new Error("Wrong Password. Please try again")
            // error.statusCode = 401;
            // throw error;
        }
        const token = jwt.sign({
            email: loadedUser.email,
            userId: loadedUser._id.toString()
        }, 'somesupersupersecret', { expiresIn: '1h' })
        return res.status(200).json({
            success: true,
            message: 'Successfully Signed In!',
            token: token,
            userId: loadedUser._id.toString()
        })
    }
    catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next()
    };
}