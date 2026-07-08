const searchInput = document.getElementById("search-input");
const songItems = document.querySelectorAll(".song-item");
const closeButton = document.getElementById("close-button");
const dropdownButton = document.getElementById("dropdown-button");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const searchForm = document.getElementById("search-form");

function toggleDropdown() {
    document.getElementById("options").classList.toggle("show");
}
console.log(searchForm);
searchForm.addEventListener("submit", preventFormSubmit);

function preventFormSubmit(event) {
    console.log(event);
    event.preventDefault();
}


function filterSongs(){
    const searchTerm = searchInput.value.toLowerCase();
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedValues = Array.from(checkedBoxes).map(checkbox => checkbox.value);
    let visibleSongs = 0;

    songItems.forEach(function (songItem) {

        // Get song title and artist
        const songTitle = songItem.dataset.title.toLowerCase();
        const songArtist = songItem.dataset.artist.toLowerCase();
        const songTags = songItem.dataset.tags.split(",");

        const matchesSearch = songTitle.includes(searchTerm) || songArtist.includes(searchTerm);
        const matchesTags = songTags.some(item => checkedValues.includes(item)) || checkedValues.length == 0;

        // Compare
        if (matchesSearch && matchesTags) {
            songItem.style.display = "";
            visibleSongs++;
        } else {
            songItem.style.display = "none";
        }
    });

    // Shows Count of # of songs
    if (visibleSongs == 1){
        document.getElementById("song-count").textContent =
        `${visibleSongs} Song found`;
    } else if (visibleSongs == 0){
        document.getElementById("song-count").textContent =
        `No songs found`;
    } else {
        document.getElementById("song-count").textContent =
        `${visibleSongs} Songs found`;
    }
}

dropdownButton.addEventListener("click", toggleDropdown);

// Listen Search input
searchInput.addEventListener("input", function () {
    filterSongs();
});

// Listen Checkbox input
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        filterSongs();
    });
});

//Listen Clear Button
closeButton.addEventListener("click", function () {
    searchInput.value = "";
    searchInput.focus();
    songItems.forEach(function (songItem) {
        songItem.style.display = "";
    });
});




//Listen for any click
window.addEventListener("click", function(event) { 
    //creates event for a click
    const dropdown = document.querySelector(".dropdown");

    //If the click was outside the dropdown, dropdown menu disappears
    if (!dropdown.contains(event.target)) { 
        document.getElementById("options").classList.remove("show");
    }
});

