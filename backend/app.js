const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const MONGODB_URI = "mongodb+srv://prathammodi001:pratham@cluster0.ytjesul.mongodb.net/RescueRealities";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes')

app.use(authRoutes);
app.use('/user', userRoutes);


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const data = error.data;
    const message = error.message;
    res.status(status).json({
        message: message,
        data: data
    });
});

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(PORT, () => {
            console.log(`Using Port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });
