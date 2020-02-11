const container = document.querySelector(".tips-nav-list");
// Filter on tips 

const btnAddTips = document.querySelector(".tips-nav-add button")
// function display

btnAddTips.onclick = function (e) {
  const form =  document.querySelector(".form.tip-form")
  form.classList.toggle("hidden")
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


