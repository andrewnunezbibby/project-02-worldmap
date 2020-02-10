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
const flash = require("connect-flash"); 



// initial config
server.use(express.urlencoded({
  extended: true
}));
server.set("view engine", "hbs");
server.set("views", __dirname + "/views");
server.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");

server.use(express.json());
server.use(cookieParser());


// SESSION SETUP
server.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 60000
    }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    }),
    saveUninitialized: true,
    resave: true
  })
);

server.locals.site_url = process.env.SITE_URL;

/// CHECK LOGIN STATUS
function checkloginStatus(req, res, next) {
  res.locals.user = req.session.currentUser ? req.session.currentUser : null;
  // access this value @ {{user}} or {{user.prop}} in .hbs
  res.locals.isLoggedIn = Boolean(req.session.currentUser)
  // access this value @ {{isLoggedIn}} in .hbs
  next() // continue to the requested route
}

// FLASH MESSAGES
// enable "flash messaging" system
// it depends on the express-session mechanism
server.use(flash());

// CUSTOM MIDDLEWARES
// expose flash message to the hbs templates, if any flash-message is defined
server.use(require("./middlewares/exposeFlashMessage"));

// expose login status to the hbs templates
server.use(require("./middlewares/exposeLoginStatus"));



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

// ROUTES
const index = require("./routes/index");
server.use("/", index);

const auth = require("./routes/auth");
server.use("/auth", auth);

module.exports = server;