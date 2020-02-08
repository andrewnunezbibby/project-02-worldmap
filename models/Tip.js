const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tipSchema = new Schema({
    body: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: "Country",
        required: true
    },
    city: String,
    category: {
        type: String,
        enum: ["Restaurant", "Bar", "Museum", "Shopping", "Garden"],
    }
});

const tipModel = mongoose.model("Tip", tipSchema);

module.exports = tipModel;