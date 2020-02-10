require("dotenv").config();
require("./config/mongodb"); 
// require("./helpers/helpers-hbs"); 

// base dependencies
const express = require("express");
const hbs = require("hbs");
const server = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");


// initial config
server.set("view engine", "hbs");
server.set("views", __dirname + "/views");
server.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(cookieParser());


// SESSION SETUP
server.use(
    session({
      secret: process.env.SESSION_SECRET,
      cookie: { maxAge: 60000 }, // in millisec
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60 // 1 day
      }),
      saveUninitialized: true,
      resave: true
    })
  );
  
  server.locals.site_url = process.env.SITE_URL;

// CUSTOM MIDDLEWARE
// check if user is logged in... 
// usecases : conditional display in hbs templates
// WARNING: this function must be declared AFTER the session setup
// WARNING: this function must be declared BEFORE app.use(router(s))
function checkloginStatus(req, res, next) {
  res.locals.user = req.session.currentUser ? req.session.currentUser : null; 
  // access this value @ {{user}} or {{user.prop}} in .hbs
  res.locals.isLoggedIn = Boolean(req.session.currentUser);
  // access this value @ {{isLoggedIn}} in .hbs
  next(); // continue to the requested route
}

function eraseSessionMessage() {
  var count = 0; // initialize counter in parent scope and use it in inner function
  return function(req, res, next) {
    if (req.session.msg) { // only increment if session contains msg
      if (count) { // if count greater than 0
        count = 0; // reset counter
        req.session.msg = null; // reset message
      }
      ++count; // increment counter
    }
    next(); // continue to the requested route
  };
}

server.use(checkloginStatus);
server.use(eraseSessionMessage());

module.exports = server;