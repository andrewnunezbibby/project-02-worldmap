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

function appendTips(tips) {
    tipsList.innerHTML = '';
    tips.forEach((tip) => {
        const markup = `<hr>
        <article class="tip-container flex">
            <div class="tip-head">
                <h3>${tip.name}</h3> <p>(${tip.category})</p>
            </div>
            <p class="tip-location">${tip.city}, ${tip.country}</p>
            <p class="tip-body">"${tip.body}"</p>
            <p class="tip-address">${tip.address}</p>
            <p class="tip-user">Added by : ${tip.user}</p>  
        </article>`
        tipsList.innerHTML += markup;
    })

}

function handleClickedTips(evt) {

    evt.target.classList.toggle("is-active");
    const clickedCatTip = container.querySelectorAll("button.is-active");
    const countryId = document.querySelector('.tips-nav-list').id;
    var query = "?country=" + countryId + '&';
    // console.log('1', clickedCatTip)

    clickedCatTip.forEach((btn, i) => {
        console.log(btn.value)
        query += "filter=" + btn.value + (i < clickedCatTip.length - 1 ? "&" : "")
    })
    
    // query = query.replace('false', '')
    console.log('query', query)
    axios.get("/filter" + query)
        .then(apiRes =>  {
            const newTips = apiRes.data
            appendTips(newTips);
        })
        .catch(apiErr => console.error(apiErr))
}


// if (container)
    container.onclick = handleClickedTips
if (visitedButton)
    visitedButton.onclick = (evt) => handleVisited(evt);
if (wishlistButton)
    wishlistButton.onclick = (evt) => handleVisited(evt);
if (searchBar)
    searchBar.oninput = (evt) => handleSearch(evt);


