import SearchWidget from './searchWidget.js';

const visSearchWidget = new SearchWidget('/country/search', updateVisited);
const visSearchBar = document.querySelectorAll(".search-bar")[0];

const wishSearchWidget = new SearchWidget('/country/search', updateWishlist);
const wishSearchBar = document.querySelectorAll(".search-bar")[1];

visSearchBar.classList.add("visited-search");
wishSearchBar.classList.add("wishlist-search");


wishSearchBar.oninput = (evt) => wishSearchWidget.handleSearch(evt);
visSearchBar.oninput = (evt) => visSearchWidget.handleSearch(evt);

function updateWishlist(country) {
    let code = country.codeName;
    console.log("CLICKED", code);
    let targetCountry = document.getElementById(`sr_${code}`)
    if (targetCountry) {
        console.log(targetCountry)
        targetCountry.onclick = () => {
            axios.patch(`/country/${code}/wishlist`).then(user => {
                showUpdatedWishList(user.data.visited)
            })
        }

    }
}

function showUpdatedWishList(searchResults) {
    const VisitedList = document.querySelector("#user-visited-list");
    VisitedList.innerHTML = "";
    searchResults.forEach(result => {
        const html = `<li class="wishlist-item" id="user-list-wishlist"><a href="/country/${result.codeName}">${result.name}</a></li>`
        const tpl = document.createElement("template");
        tpl.innerHTML = html;
        const node = tpl.content.childNodes[0];
        VisitedList.appendChild(node);
    })
}

function updateVisited(country) {
    let code = country.codeName;
    console.log("CLICKED", code);
    let targetCountry = document.getElementById(`sr_${code}`)
    if (targetCountry) {
        console.log(targetCountry)
        targetCountry.onclick = () => {
            console.log("Editing User" + code)
            axios.patch(`/country/${code}/visited`).then(user => {
                showUpdatedVisitedList(user.data.visited)
            })
        }

    }
}

function showUpdatedVisitedList(searchResults) {
    const VisitedList = document.querySelector("#user-visited-list");
    VisitedList.innerHTML = "";
    searchResults.forEach(result => {
        const html = `<li class="wishlist-item" id="user-list-wishlist"><a href="/country/${result.codeName}">${result.name}</a></li>`
        const tpl = document.createElement("template");
        tpl.innerHTML = html;
        const node = tpl.content.childNodes[0];
        VisitedList.appendChild(node);
    })
}

