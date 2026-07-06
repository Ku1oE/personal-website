const searchInput = document.getElementById("search-input");
const songItems = document.querySelectorAll(".song-item");
const closeButton = document.getElementById("close-button");

function toggleDropdown() {
    document.getElementById("options").classList.toggle("show");
}

// 3. Listen for typing
searchInput.addEventListener("input", function () {

    // 4. Read what the user typed
    const searchTerm = searchInput.value.toLowerCase();

    // 5. Loop through every song
    songItems.forEach(function (songItem) {

        // 6. Get the song text
        const songTitle = songItem.dataset.title;
        const songArtist = songItem.dataset.artist;

        // 7. Compare
        if (songTitle.includes(searchTerm) || songArtist.includes(searchTerm)) {
            songItem.style.display = "";
        } else {
            songItem.style.display = "none";
        }
    });
});


closeButton.addEventListener("click", function () {
    searchInput.value = "";
    searchInput.focus();
    songItems.forEach(function (songItem) {
        songItem.style.display = "";
    });
});


//Following code for dropdown function.
window.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".dropdown");

    if (!dropdown.contains(event.target)) {
        document.getElementById("options").classList.remove("show");
    }
});


document.querySelectorAll('.dropdown-content input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const text = this.value;
        const selectedItems = document.querySelector('.selected-items');
        const existingItem = selectedItems.querySelector(`[data-value="${text}"]`);

        if (this.checked) {
            if (!existingItem) {
                const selectedItem = document.createElement('div');
                selectedItem.setAttribute('data-value', text);
                selectedItem.innerText = text;
                selectedItems.appendChild(selectedItem);
            }
        } else {
            if (existingItem) {
                existingItem.remove();
            }
        }
    });
});