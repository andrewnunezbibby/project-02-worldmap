require("dotenv").config();
require("./config/mongodb"); 
require("./helpers/helpers-hbs"); 

// base dependencies
const express = require("express");
const hbs = require("hbs");
const server = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");


// initial config
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());


// SESSION SETUP




module.exports = server;