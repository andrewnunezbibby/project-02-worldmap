
export default class SearchWidget {
    constructor(callUrl, cb) {
        this.callUrl = callUrl;
        this.cb = cb;
    }

    handleSearch(evt) {
        const input = evt.target.value
        console.log(evt);
        this.codeName = input
        // const regex = new RegExp(input, 'i');
        console.log("======>" + input)
        axios.get(`/country/search/${input}`).then(res => {
            //create a div
            this.showResultsList(res.data);
            // return res.data;
            // showResultsInMap(res);
            //display everycountry
            //class active for matching states
        })
    }

    showResultsList(searchResults) {
        const searchResultsList = document.querySelector(".country-results");
        searchResultsList.innerHTML = "";
        searchResults.forEach(result => {
            // let resultItem = document.createElement("option")
            // resultItem.value = result.name;
            // searchResultsList.appendChild(resultItem);
            const markup = `<div id=sr_${result.codeName}><option value=${result.name}>${result.name}</option></div>`;
            const tpl = document.createElement("template");
            tpl.innerHTML = markup;
            const node = tpl.content.childNodes[0];
            node.onclick = () => this.cb(result)
            searchResultsList.appendChild(node);

        })
    }
}