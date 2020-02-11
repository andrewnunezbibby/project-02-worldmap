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
        .then(user => res.render("user", { user }))
        .catch(dbError => { res.send(dbError) })
});

router.get("/user/:id/:tips", (req, res) => {
    tipModel
        .find({ name: req.query.name })
        .then(tips => {
            console.log(tips)
            res.render("user", { tips })
        })
        .catch(dbError => { res.send(dbError) })
});

router.get("/country/:codename", (req, res) => {
    countryModel
        .findOne({ codeName: req.params.codename })
        .then(country => {
            console.log(country)
            res.render("country", { country })
        })
        .catch(dbError => { res.send(dbError) })
    console.log(req.params.codename);
});

router.get("/country/:id/:tips", (req, res) => {
    tipModel
        .find({ name: req.query.name })
        .then(tips => {
            console.log(tips)
            res.render("country", { tips })
        })
        .catch(dbError => { res.send(dbError) })
});


module.exports = router;



