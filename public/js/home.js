import SearchWidget from './searchWidget.js';

const searchWidget = new SearchWidget('/country/search', goToCountry);
const searchBar = document.querySelector(".search-bar");

// dynamically add classes to visted and wishlist countries


searchBar.oninput = (evt) => searchWidget.handleSearch(evt);

function goToCountry(country) {
    let code = country.codeName;
    console.log("CLICKED", code);
    let targetCountry = document.getElementById(`sr_${code}`)
    if (targetCountry) {
        console.log(targetCountry)
        targetCountry.onclick = () => {
            window.location = `/country/${code}`
        }

    }
}

