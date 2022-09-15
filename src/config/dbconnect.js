const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://biblioteca:123@cluster0.keoax.mongodb.net/biblioteca");


let db = mongoose.connection;

module.exports = db;