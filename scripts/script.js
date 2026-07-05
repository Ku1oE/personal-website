// 1. Get the search input

const searchInput = document.getElementById("search-input");

// 2. Get all song items
const songItems = document.querySelectorAll(".song-item");

// 3. Listen for typing
searchInput.addEventListener("input", function () {

    // 4. Read what the user typed
    const searchTerm = searchInput.value.toLowerCase();

    // 5. Loop through every song
    songItems.forEach(function (songItem) {

        // 6. Get the song text
        const songTitle = songItem.getAttribute("data-title").toLowerCase();
        const songArtist = songItem.getAttribute("data-artist").toLowerCase();

        // 7. Compare
        if (songTitle.includes(searchTerm) || songArtist.includes(searchTerm)) {
            songItem.style.display = "";;
        } else {
            songItem.style.display = "none";
        }
    });
});