console.log("hello")
const container = document.querySelector(".tips-box");
// Filter on tips 

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


