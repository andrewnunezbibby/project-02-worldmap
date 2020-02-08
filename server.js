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



module.exports = server;