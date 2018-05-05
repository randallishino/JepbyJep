const mongoose = require ('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcrypt-nodejs');

const User = new Schema({
    username: {
        type: string,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = User;