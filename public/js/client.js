const container = document.querySelector(".tips-nav-list");
const visitedButton = document.querySelector("#country-status-visited");
const wishlistButton = document.querySelector("#country-status-wishlist");
const searchBar = document.querySelector("#search-bar");
const searchResultsList = document.querySelector("#country-results");

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

function handleSearch(evt) {
    const input = evt.target.value
    // const regex = new RegExp(input, 'i');
    console.log("======>" + input)
    axios.get(`/country/search/${input}`).then(res => {
        //create a div
        showResultsList(res.data);
        // showResultsInMap(res);
        //display everycountry
        //class active for matching states
        console.log(res.data)
    })
}

function showResultsList(searchResults) {
    searchResultsList.innerHTML = "";
    searchResults.forEach(result => {
        // let resultItem = document.createElement("option")
        // resultItem.value = result.name;
        // searchResultsList.appendChild(resultItem);
        const markup = `<div id=sr_${result.codeName}><option value=${result.name}>${result.name}</option></div>`;
        const tpl = document.createElement("template");
        tpl.innerHTML = markup;
        const node = tpl.content.childNodes[0];
        node.onclick = () => addClickListener(result.codeName);
        searchResultsList.appendChild(node);

    })
}

function addClickListener(code) {
    console.log("CLICKED", code);
    let targetCountry = document.getElementById(`sr_${code}`)
    if (targetCountry) {
        console.log(targetCountry)
        targetCountry.onclick = () => {
            window.location = `/country/${code}`
        }

    }
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
if (searchBar)
    searchBar.oninput = (evt) => handleSearch(evt);


