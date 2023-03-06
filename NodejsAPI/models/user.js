const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    age: {
        type: Number,
        default: 18,
    },
});

module.exports = mongoose.model("user", UserSchema);
