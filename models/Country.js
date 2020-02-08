const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: String,
    image: String, // SVG - clicked item
    flag: String,
    mainCity: String,
    languages: [String],
    codeName: String,
    currency: String,
    info: String // Bonus
});

const countryModel = mongoose.model("Country", countrySchema);

module.exports = countryModel;