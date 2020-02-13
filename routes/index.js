const express = require("express");
const router = express.Router();
const userModel = require("../models/User")
const countryModel = require("../models/Country")
const protectRoute = require("../middlewares/protectRoute")
const tipModel = require("../models/Tip")


router.get(["/", "/home"], (req, res) => {
    res.render("home", { js: ["home"] });
});

router.get("/guide", (req, res) => {
    res.render("guide");
});

router.get("/about", (req, res) => {
    res.render("about");
});


// USER PAGE
router.get("/user", (req, res) => {
    userModel.findById(req.session.currentUser)
        .populate("visited").populate("wishlist")
        .then(user => {
            tipModel.find({user: user._id}).populate("user").
            populate("country").then(tips => {
                res.render("user", { user, tips, js: ["user"] })
            })
            .catch(dbError => { console.log(dbError) })
        })
        .catch(dbError => { console.log(dbError) })
});


// USERS' TIPS
router.get("/user/:id/:tips",protectRoute, (req, res, next) => {

    tipModel
        .find({ name: req.query.name })
        .then(tips => {
            console.log(tips)
            res.render("user", { tips })
        })
        .catch(next)
        .catch(dbError => { res.send(dbError) })
});


// SEARCHBAR FOR COUNTRIES
router.get("/country/search/:countryname", (req, res) => {
    const regex = new RegExp(req.params.countryname, "i")
    countryModel
        .find({ name: { $regex: regex } })
        .then(countryMatches => {
            res.send(countryMatches)
        }).catch(dbError => { res.send(dbError) })

})

// COUNTRY PAGE
router.get("/country/:codename", (req, res) => {
    const category = req.query.category
    console.log("ici", req.params)
    const regex = new RegExp(req.params.codename, "i")
    countryModel
        .findOne({ codeName: { $regex: regex } })
        .then(country => {
            tipModel.find({ country: country._id }).populate("user").populate("country").then(tips => {
                res.render("country", { country, tips })
            }).catch(dbError => { res.send(dbError) })

        })
        .catch(dbError => { res.send(dbError) })
    console.log(req.params.codename);
});

// ALL THE TIPS
router.get("/country/:id/:tips",protectRoute, (req, res) => {
    tipModel
        .find({ name: req.query.name })
        .then(tips => {
            console.log(tips)
            res.render("country", { tips })
        })
        .catch(next)
        .catch(dbError => { res.send(dbError) })
});

// FILTER TIPS BY CATEGORIES
router.get('/filter', protectRoute, (req, res, next) => {
    const categoryArray = Array.isArray(req.query.filter) ? req.query.filter : [req.query.filter];
    const country = req.query.country;

    tipModel
        .find({ $and: [{ country }, { category: { $in: categoryArray } }] })
        .populate("country")
        .populate("user")
        .then(tips => {
            console.log(tips)
            res.send(tips)
        })
        .catch(next)
        .catch(dbError => { res.send(dbError) })
})

// ADD NEW TIP
router.post("/tips/add/:countryId/:codename",protectRoute, (req, res, next) => {
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
    })
    .catch(next)
    .catch(err => {
        console.log(err)
    })
})


// REMOVE A TIP ADDED ON USER PAGE
router.patch("/user/:id/:tips-remove",protectRoute, (req, res, next) => {

    userModel
        .findById(req.session.currentUser)
        .then(tips => {
            userModel.findByIdAndUpdate(user._id, { $pull: tips._id }, { new: true })
                .then(updatedUser => {
                    console.log(updatedUser)
                })
                .catch(next)
        })
        .catch()

})

// UPDATE VISITED COUNTRY LIST
router.patch("/country/:codename/visited",protectRoute, (req, res, next) => {
    const user = req.session.currentUser
    console.log('the useeeer', user);
    countryModel
        .findOne({ codeName: req.params.codename })
        .then(country => {
            userModel.findByIdAndUpdate(user._id, { $push: { visited: country._id } }, { new: true })
                .then(updatedUser => {
                    console.log(updatedUser)
                })
                .catch(next)
        })
        .catch()

})

// REMOVE A COUNTRY FROM VISITED LIST
router.patch("/country/:codename/visited-remove",protectRoute, (req, res, next) => {
    const user = req.session.currentUser
    console.log('the useeeer', user);
    countryModel
        .findOne({ codeName: req.params.codename })
        .then(country => {
            userModel.findByIdAndUpdate(user._id, { $pull: { visited: country._id } }, { new: true })
                .then(updatedUser => {
                    console.log(updatedUser)
                })
                .catch(next)
        })
        .catch()

})


// UPDATE WISHED COUNTRY LIST
router.patch("/country/:codename/wishlist",protectRoute, (req, res, next) => {
    const user = req.session.currentUser
    console.log('the useeeer', user);
    countryModel
        .findOne({ codeName: req.params.codename })
        .then(country => {
            userModel.findByIdAndUpdate(user._id, { $push: { wishlist: country._id } }, { new: true })
                .then(updatedUser => {
                    console.log(updatedUser)
                })
                .catch(next)
        })
        .catch()
})

// REMOVE A COUNTRY FROM WISHED LIST
router.patch("/country/:codename/wishlist-remove",protectRoute, (req, res, next) => {
    const user = req.session.currentUser
    console.log('the useeeer', user);
    countryModel
        .findOne({ codeName: req.params.codename })
        .then(country => {
            userModel.findByIdAndUpdate(user._id, { $pull: { wishlist: country._id } }, { new: true })
                .then(updatedUser => {
                    console.log(updatedUser)
                })
                .catch(next)
        })
        .catch()
})


module.exports = router;



