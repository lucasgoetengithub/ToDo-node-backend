const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/todo';

mongoose.connect(url, { useNewUrlParser:trye });

module.exports = mongoose;