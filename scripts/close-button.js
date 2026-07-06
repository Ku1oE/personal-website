const closeButton = document.getElementById("close-button");
const searchInput = document.getElementById("search-input");

closeButton.addEventListener("click", function () {
    searchInput.value = "";
    searchInput.focus();
});