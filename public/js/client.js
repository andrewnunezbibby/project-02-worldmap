const container = document.querySelector(".tips-nav-list");
const visitedButton = document.querySelector("#country-status-visited");
const wishlistButton = document.querySelector("#country-status-wishlist");
const searchBar = document.querySelector("#search-bar");
const searchResultsList = document.querySelector("#country-results");
const tipsList = document.querySelector('.tips-list');
const countryId = window.location.href.slice(-2)
let userVisitedCountries = []
let userWishlistCountries = []

function getUserCountries() {
    userVisitedCountries = []
    userWishlistCountries = []
    axios.get(`/user-countries`)
        .then(user => {
            userVisitedCountries.push(...user.data.visited.map(country => country.codeName))
            userWishlistCountries.push(...user.data.wishlist.map(country => country.codeName))
        })
}

getUserCountries()
window.onload = function () {
    toggleVisitedButton()
    toggleWishlistButton()
}

// Filter on tips 
const btnAddTips = document.querySelector(".tips-nav-add button")
// function display


if (btnAddTips) {
    btnAddTips.onclick = function (e) {
        const form = document.querySelector(".form.tip-form")
        form.classList.toggle("hidden")
    }
}

function toggleVisitedButton() {
    const countryId = window.location.href.slice(-2)
    console.log(countryId)

    if (userVisitedCountries.indexOf(countryId) > -1) {
        visitedButton.classList.add("item-visited")
    }
}

function handleVisited(evt) {
    const countryId = evt.target.getAttribute('data-visited-id')

    if (userVisitedCountries.indexOf(countryId) === -1) {
        console.log("here adding")
        axios.patch(`/country/${countryId}/visited`).then(
            response => {
                visitedButton.classList.toggle("item-visited")
                getUserCountries()
            }
        ).catch(err => console.log(err))
        console.log(userVisitedCountries);
    }
    if (userVisitedCountries.indexOf(countryId) > -1) {
        console.log("here removing")
        axios.patch(`/country/${countryId}/visited-remove`).then(
            response => {
                visitedButton.classList.toggle("item-visited")
                getUserCountries()
            }
        ).catch(err => console.log(err))
        console.log(userVisitedCountries);
    }
}

function toggleWishlistButton() {
    const countryId = window.location.href.slice(-2)
    console.log(userWishlistCountries)

    if (userWishlistCountries.indexOf(countryId) > -1) {
        console.log("country is here")
        wishlistButton.classList.add("item-wishlist")
    }
}


function handleWished(evt) {
    if (userWishlistCountries.indexOf(countryId) === -1) {
        console.log("here adding")
        axios.patch(`/country/${countryId}/wishlist`).then(
            response => {
                wishlistButton.classList.toggle("item-wishlist")
                getUserCountries()
            }
        ).catch(err => console.log(err))
        console.log(userWishlistCountries);
    }
    if (userWishlistCountries.indexOf(countryId) > -1) {
        console.log("here removing")
        axios.patch(`/country/${countryId}/wishlist-remove`).then(
            response => {
                wishlistButton.classList.toggle("item-wishlist")
                getUserCountries()
            }
        ).catch(err => console.log(err))
        console.log(userWishlistCountries);
    }
}

function appendTips(tips) {
    tipsList.innerHTML = '';
    tips.forEach((tip) => {
        const markup = `<hr>
        <article class="tip-container flex">
            <div class="tip-head">
                <h3>${tip.name}</h3> <p>(${tip.category})</p>
            </div>
            <p class="tip-location">${tip.city}, ${tip.country.name}</p>
            <p class="tip-body">"${tip.body}"</p>
            <p class="tip-address">${tip.address}</p>
            <p class="tip-user">Added by : ${tip.user.username}</p>  
        </article>`
        tipsList.innerHTML += markup;
    })

}


function setDeleteListeners() {
    const deleteBtn = document.querySelectorAll(".btn-delete-tip");
    deleteBtn.forEach(button => {
        button.onclick = handleDeleteTips;
    })
}


setDeleteListeners();
function handleDeleteTips(evt) {

    const tipId = evt.target.getAttribute('data-tip-id')
    axios.delete(`/user/${tipId}/remove-tip`, { withCredentials: true }).then(apiRes => {
        document.getElementById(tipId).remove();
    }).catch(err => {
        console.log(err)
    })
}

function handleFilteredTips(evt) {

    evt.target.classList.toggle("is-active");
    const clickedCatTip = container.querySelectorAll("button.is-active");
    const countryId = document.querySelector('.tips-nav-list').id;
    var query = "?country=" + countryId + '&';

    clickedCatTip.forEach((btn, i) => {
        query += "filter=" + btn.value + (i < clickedCatTip.length - 1 ? "&" : "")
    })

    // query = query.replace('false', '')
    axios.get("/filter" + query)
        .then(apiRes => {
            const newTips = apiRes.data
            appendTips(newTips);
        })
        .catch(apiErr => console.error(apiErr))
}

// handleDeleteTips.onclick(evt)

if (container)
    container.onclick = handleFilteredTips
if (visitedButton)
    visitedButton.onclick = (evt) => handleVisited(evt);
if (wishlistButton)
    wishlistButton.onclick = (evt) => handleWished(evt);
