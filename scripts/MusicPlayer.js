let isPlaying = false;
let audio;

function toggleAudio() {
    if (!audio) {
        const storedState = localStorage.getItem("audioState");
        const songs = [
            "Songs/sippin.wav",
            "Songs/church.wav",
            "Songs/Wreckonizer.wav",
            "Songs/jungle.wav",
        ];
        
        if (storedState) {
            const { song, currentTime } = JSON.parse(storedState);
            audio = new Audio(song);
            audio.currentTime = currentTime; // Resume at the saved time
        } else {
            const randomIndex = Math.floor(Math.random() * songs.length);
            audio = new Audio(songs[randomIndex]);
        }

        audio.preload = "auto";
    }

    if (isPlaying) {
        audio.pause();
        document.getElementById("toggle-icon").src = "images/play.png";
    } else {
        audio.play().catch((error) => {
            console.error("Playback failed:", error);
        });
        document.getElementById("toggle-icon").src = "images/pause.png";
    }

    isPlaying = !isPlaying;
}

// Save state before leaving the page
window.addEventListener("beforeunload", () => {
    if (audio) {
        localStorage.setItem("audioState", JSON.stringify({
            song: audio.src,
            currentTime: audio.currentTime,
        }));
    }
});

document.getElementById("music-button").addEventListener("click", () => {
    toggleAudio();
});

document.addEventListener("DOMContentLoaded", () => {
    const enableAutoplay = () => {
        if (!isPlaying) {
            toggleAudio();
        }
        document.removeEventListener("click", enableAutoplay);
    };
    document.addEventListener("click", enableAutoplay);
});
