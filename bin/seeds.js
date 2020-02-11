require("dotenv").config();
require("../config/mongodb");
const userModel = require("../models/User");
const tipModel = require("../models/Tip");
const countryModel = require("../models/Country")
const mongoose = require('mongoose');
db = process.env.MONGO_URI
const axios = require("axios");

let dbCountries = [];

function getCountries() {
    axios.get("https://restcountries.eu/rest/v2/all")
        .then(serverResponse => createDbCountries(serverResponse.data))
        .catch(err => console.log(err))
}

function createDbCountries(countries) {
    countries.forEach(country => {
        let dbCountry = {};
        dbCountry.name = country.name;
        dbCountry.image = country.flag;
        dbCountry.flag = country.flag;
        dbCountry.mainCity = country.capital;
        dbCountry.languages = country.languages.map(language => language.name);
        dbCountry.codeName = country.alpha2Code;
        dbCountry.currency = country.currencies[0] && country.currencies[0].name || "";
        dbCountry.info = country.regionalBlocs[0] && country.regionalBlocs[0].name || "";
        dbCountries.push(dbCountry);
    })
    seedDb();
}

function seedDb() {
    countryModel.insertMany(dbCountries)
        .then(dbCountries => {
            editUsers(dbCountries);
            userModel.insertMany(users)
                .then(users => {
                    tipModel.insertMany(editTips(users[2]._id, dbCountries))
                        .then(tips => console.log(tips))
                        .catch(err => console.log(err))
                }).catch(err => console.log(err))
        }).catch(err => console.log(err))
}

function editUsers(countriesArray) {
    users.forEach(user => {
        user.wishlist.push(countriesArray[0]._id)
        user.visited.push(countriesArray[1]._id)
    });
    return users;
}

function editTips(userObject, dbCountries) {
    let newTips = [];
    for (let i = 0; i < tips.length; i++) {
        tips[i].user = userObject;
        tips[i].country = dbCountries[i]._id;
        tips[i].city = dbCountries[i].mainCity || "N/A";
        newTips.push(tips[i]);
    }
    console.log(
        '=====', newTips);

    return newTips;
}

let users = [
    {
        username: "drewbydoo",
        email: "dbd@conmail.com",
        password: "1212",
        wishlist: [],
        visited: [],
        avatar: ""
    },
    {
        username: "ninapoo",
        email: "nina@conmail.com",
        password: "1111",
        wishlist: [],
        visited: [],
        avatar: ""
    },
    {
        username: "wendyloo",
        email: "wendy@conmail.com",
        password: "1313",
        wishlist: [],
        visited: [],
        avatar: ""
    }
]

// TIPS
let tips = [
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Museum",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Shopping",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Bar",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Restaurant",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Garden",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Info",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Museum",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Bar",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Restaurant",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Shopping",
    },
    {
        body: "This place is great you should check it out",
        name: "Cave Cafe",
        address: "123 Arlington St",
        category: "Museum",
    }
]

getCountries();