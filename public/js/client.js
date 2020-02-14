const container = document.querySelector(".tips-nav-list");
const visitedButton = document.querySelector("#country-status-visited");
const wishlistButton = document.querySelector("#country-status-wishlist");
const searchBar = document.querySelector("#search-bar");
const searchResultsList = document.querySelector("#country-results");
const tipsList = document.querySelector('.tips-list');

// Filter on tips 

const btnAddTips = document.querySelector(".tips-nav-add button")
// function display


if (btnAddTips) {
    btnAddTips.onclick = function (e) {
        const form = document.querySelector(".form.tip-form")
        form.classList.toggle("hidden")
    }
}

function handleVisited(evt) {
    const countryId = evt.target.getAttribute('data-country-id')
    axios.patch(`/country/${countryId}/visited`).then()
}


function handleWished(evt) {
    const countryId = evt.target.getAttribute('data-country-id')
    axios.patch(`/country/${countryId}/wishlist`).then()
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
    axios.delete(`/user/${tipId}/remove-tip`, { withCredentials: true }).then(apiRes => { // withCredentials means that we manage the cookie Parser
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
    wishlistButton.onclick = (evt) => handleVisited(evt);
