import SearchWidget from './searchWidget.js';

const wishSearchWidget = new SearchWidget('/country/search', updateWishlist);
const wishSearchBar = document.querySelectorAll(".search-bar")[0];

const visSearchWidget = new SearchWidget('/country/search', updateVisited);
const visSearchBar = document.querySelectorAll(".search-bar")[1];


wishSearchBar.oninput = (evt) => wishSearchWidget.handleSearch(evt);
visSearchBar.oninput = (evt) => visSearchWidget.handleSearch(evt);

function updateWishlist(country) {
    let code = country.codeName;
    console.log("CLICKED", code);
    let targetCountry = document.getElementById(`sr_${code}`)
    if (targetCountry) {
        console.log(targetCountry)
        targetCountry.onclick = () => {
            console.log("Editing User" + code)
            axios.patch(`/country/${code}/wishlist`).then()
        }

    }
}

function updateVisited(country) {
    let code = country.codeName;
    console.log("CLICKED", code);
    let targetCountry = document.getElementById(`sr_${code}`)
    if (targetCountry) {
        console.log(targetCountry)
        targetCountry.onclick = () => {
            console.log("Editing User" + code)
            axios.patch(`/country/${code}/visited`).then()
        }

    }
}

