const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tipSchema = new Schema({
    category: {
        type: String,
        enum: ["Restaurant", "Bar", "Museum", "Shopping", "Garden", "Info"],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: "Country",
        required: true
    },
    city: {
        type: String,
        required: true
    },
    body: String,
    address: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});

const tipModel = mongoose.model("Tip", tipSchema);

module.exports = tipModel;