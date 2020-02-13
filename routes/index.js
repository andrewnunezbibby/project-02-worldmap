const express = require("express");
const router = express.Router();
const userModel = require("../models/User")
const countryModel = require("../models/Country")
const protectRoute = require("../middlewares/protectRoute")
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

router.get("/country/search/:countryname", (req, res) => {
    const regex = new RegExp(req.params.countryname, "i")
    countryModel
        .find({ name: { $regex: regex } })
        .then(countryMatches => {
            console.log("SEARCH" + countryMatches)
            res.send(countryMatches)
        }).catch(dbError => { res.send(dbError) })

})

router.get("/country/:codename", (req, res) => {
    const category = req.query.category
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

router.get('/filter', protectRoute, (req, res, next) => {
    const categoryArray = Array.isArray(req.query.filter) ? req.query.filter : [req.query.filter];
    const country = req.query.country;
    
    tipModel
        .find({ $and: [{ country }, { category: { $in: categoryArray } }] })
        .then(tips => {
            res.send(tips)
        })
})

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

router.patch("/country/:codename/visited", (req, res, next) => {
    const user = req.session.currentUser
    console.log('the useeeer', user);
    const fakeUserId = "5e42b35e5429710afdceba3a"
    countryModel
        .findOne({ codeName: req.params.codename })
        .then(country => {
            userModel.findByIdAndUpdate(fakeUserId, { $push: { visited: country._id } }, { new: true })
                .then(updatedUser => {
                    console.log(updatedUser)
                })
                .catch(next)
        })
        .catch()

})

router.patch("/country/:codename/wishlist", (req, res, next) => {
    const user = req.session.currentUser
    console.log('the useeeer', user);
    const fakeUserId = "5e42b35e5429710afdceba3a"
    countryModel
        .findOne({ codeName: req.params.codename })
        .then(country => {
            userModel.findByIdAndUpdate(fakeUserId, { $push: { wishlist: country._id } }, { new: true })
                .then(updatedUser => {
                    console.log(updatedUser)
                })
                .catch(next)
        })
        .catch()
})


module.exports = router;



