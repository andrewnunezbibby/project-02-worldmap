const container = document.querySelector(".tips-box");
const visitedButton = document.querySelector("#country-status-visited");
const wishlistButton = document.querySelector("#country-status-wishlist");
const searchBar = document.querySelector("#search-bar");

// Filter on tips 

function handleVisited(evt) {
    const countryId = evt.target.getAttribute('data-country-id')
    axios.patch(`/country/${countryId}/visited`).then()
    console.log("======>" + countryId)
}

function handleSearch(evt) {
    const input = evt.target.value
    const regex = new Regexp(/${input}/, 'i');
    // axios.get(`/country/${countryId}/visited`).then()
    console.log("======>" + regex)
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


container.onclick = handleClickedTips
visitedButton.onclick = (evt) => handleVisited(evt);
wishlistButton.onclick = (evt) => handleVisited(evt);
searchBar.oninput = (evt) => handleSearch(evt);


