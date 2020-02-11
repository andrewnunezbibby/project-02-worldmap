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
    console.log("ici", req.params)
    const regex = new RegExp(req.params.codename, "i")
    countryModel
        .findOne({ codeName: { $regex: regex } })
        .then(country => {
            tipModel.find({ country: country._id }).populate("user").populate("country").then(tips => {
                console.log("this is country", country)
                res.render("country", { country, tips })
            }).catch(dbError => { res.send(dbError) })

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

router.post("/tips/add/:countryId/:codename", (req, res) => {
    console.log(req.body)
    tipModel.create({
        name: req.body.name,
        city: req.body.city,
        body: req.body.body,
        address: req.body.address,
        user: req.session.currentUser._id,
        category: req.body.category,
        country: req.params.countryId
    }).then(tip => {
        res.redirect("/country/" + req.params.codename)
    }).catch(err => {
        console.log(err)
    })
})


module.exports = router;



