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
    let targetCountry = document.getElementById(`sr_${code}`)
    if (targetCountry) {
        targetCountry.onclick = () => {
            axios.patch(`/country/${code}/wishlist`).then(user => {
                showUpdatedWishList(user.data.wishlist)
            })
        }

    }
}

function showUpdatedWishList(searchResults) {
    const userWishlist = document.querySelector("#user-wishlist");
    userWishlist.innerHTML = "";
    searchResults.forEach(result => {
        const html = `<li class="wishlist-item" id="user-list-wishlist"><a href="/country/${result.codeName}">${result.name}</a></li>`
        const tpl = document.createElement("template");
        tpl.innerHTML = html;
        const node = tpl.content.childNodes[0];
        userWishlist.appendChild(node);
    })
}

function updateVisited(country) {
    let code = country.codeName;
    let targetCountry = document.getElementById(`sr_${code}`)
    if (targetCountry) {
        targetCountry.onclick = () => {
            console.log("Editing User" + code)
            axios.patch(`/country/${code}/visited`).then(user => {
                showUpdatedVisitedList(user.data.visited)
            })
        }

    }
}

function showUpdatedVisitedList(searchResults) {
    const userVisitedList = document.querySelector("#user-visited-list");
    userVisitedList.innerHTML = "";
    searchResults.forEach(result => {
        const html = `<li class="visited-item" id="user-list-visited"><a href="/country/${result.codeName}">${result.name}</a></li>`
        const tpl = document.createElement("template");
        tpl.innerHTML = html;
        const node = tpl.content.childNodes[0];
        userVisitedList.appendChild(node);
    })
}

