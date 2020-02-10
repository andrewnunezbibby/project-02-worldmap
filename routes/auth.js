const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcrypt = require("bcrypt"); 
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);


// form views

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/signin", (req, res) => {
  res.render("auth/signin");
});

// action::Registering

router.post("/signup", (req, res, next) => {
  const user = req.body; // req.body contains the submited informations
  if (!user.email || !user.password) {
    return res.redirect("/signup");
  } else {
    userModel
      .findOne({ email: user.email })
      .then(dbRes => {
        if (dbRes) {
          return res.redirect("/signup"); //
        }
        const salt = bcrypt.genSaltSync(10);
        const hashed = bcrypt.hashSync(user.password, salt);
        // generates a unique random hashed password
        user.password = hashed; // new user is ready for db
    
        userModel.create(user).then(() => res.redirect("/signin"));
      })
      .catch(next);
  }
});

// action::Login

router.post("/signin", (req, res, next) => {
  const theUsername = req.body.email;
  const thePassword = req.body.password;
  
  if (theUsername === "" || thePassword === "") {
    res.render("auth/signin", {
      errorMessage: "Please enter both, email and password to sign up."
    });
    return;
  }

  userModel.findOne({ "email": theUsername })
  .then(user => {
      if (!user) {
        res.render("auth/signin", {
          errorMessage: "The username doesn't exist."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/user");
      } else {
        res.render("auth/signin", {
          errorMessage: "Incorrect password"
        });
      }
  })
  .catch(error => {
    next(error);
  })
});

// action::Logout

router.get("/logout", (req, res) => {
  console.log("auth/signout")
  req.session.destroy(() => {
    res.redirect("/signin");
  });
});

module.exports = router;
