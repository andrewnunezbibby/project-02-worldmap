const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wishlist: [{
        type: Schema.Types.ObjectId,
        ref: "Country"
    }],
    visited: [
        {
            type: Schema.Types.ObjectId,
            ref: "Country"
        }
    ]
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;