const express = require("express");
const router = express.Router();
const userModel = require("../models/User")
const countryModel = require("../models/Country")
const tipModel = require("../models/Tip")


router.get(["/", "/home"], (req, res) => {
    res.render("home");
});

router.get("/guide", (req, res) => {
    res.render("guide");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/user", (req, res) => {
    userModel.findById(req.params.id)
    .then(user => res.render("user", {user}))
    .catch(dbError => {res.send(dbError)})
});

router.get("/country/:id", (req, res) => {
    res.render("country")
    // countryModel
    // .findById(req.params.id)
    // .then(country => res.render("country", {country}))
    // .catch(dbError => {res.send(dbError)})
});


module.exports = router;



