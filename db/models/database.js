const mongoose = require ('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
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