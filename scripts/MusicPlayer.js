let isPlaying = false;
let audio;

function toggleAudio() {
    if (!audio) {
        const songs = [
            "Songs/sippin.wav",
            "Songs/takemeout.wav",
            "Songs/duality.wav",
            "Songs/church.wav",
            "Songs/videoclub.wav",
            "Songs/Wreckonizer.wav",
        ];
        const randomIndex = Math.floor(Math.random() * songs.length);
        audio = new Audio(songs[randomIndex]);
    }

    if (isPlaying) {
        audio.pause();
        document.getElementById("toggle-icon").src = "/images/play.png";
    } else {
        audio.play();
        document.getElementById("toggle-icon").src = "/images/pause.png";
    }

    isPlaying = !isPlaying;
}

document.getElementById("music-button").addEventListener("click", toggleAudio);
