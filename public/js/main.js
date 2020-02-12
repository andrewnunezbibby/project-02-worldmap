/// HOME POPUP DISPLAY
const closeBtn = document.getElementById("closeBtn");
const popupDiv = document.getElementById("popupDiv");

function closePopup() {
    popupDiv.classList.add("hidden");
};

if (closeBtn) {
    closeBtn.onclick = closePopup;
}


/// HOME SIMPLEMAPS HIDE
const logoMoche = document.querySelector("text");