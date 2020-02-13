const container = document.querySelector(".tips-nav-list");
const visitedButton = document.querySelector("#country-status-visited");
const wishlistButton = document.querySelector("#country-status-wishlist");

// Filter on tips 

const btnAddTips = document.querySelector(".tips-nav-add button")
// function display


if (btnAddTips) {
    btnAddTips.onclick = function (e) {
        const form = document.querySelector(".form.tip-form")
        form.classList.toggle("hidden")
    }
}
// Filter on tips 

function handleVisited(evt) {
    const countryId = evt.target.getAttribute('data-country-id')
    axios.patch(`/country/${countryId}/visited`).then()
    console.log("======>" + countryId)
}


function handleWished(evt) {
    const countryId = evt.target.getAttribute('data-country-id')
    axios.patch(`/country/${countryId}/wishlist`).then()
    console.log("======>" + countryId)
}

function handleClickedTips(evt) {

    evt.target.classList.toggle("is-active");
    const clickedCatTip = container.querySelectorAll("button.is-active");
    var query = "?";
    console.log(clickedCatTip)

    clickedCatTip.forEach((btn, i) => {
        query += "filter=" + btn.value + (i < clickedCatTip.length - 1 && "&")
    })

    console.log(query)
    axios.get("/filter" + query)
        .then(apiRes => console.log(apiRes))
        .catch(apiErr => console.error(apiErr))
}


if (container)
    container.onclick = handleClickedTips
if (visitedButton)
    visitedButton.onclick = (evt) => handleVisited(evt);
if (wishlistButton)
    wishlistButton.onclick = (evt) => handleVisited(evt);


