/// HOME POPUP 
const closeBtn = document.getElementById("closeBtn");
const popupDiv = document.getElementById("popupDiv");

function closePopup(){
    popupDiv.classList.add("hidden");
};

closeBtn.onclick = closePopup;