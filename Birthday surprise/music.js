const bgMusic = document.getElementById("bgMusic");

let musicStarted = false;

function startMusic() {

    if (!bgMusic || musicStarted) return;

    musicStarted = true;

    bgMusic.volume = 0.5; // Volume (0.0 - 1.0)

    bgMusic.play().catch(() => {
        musicStarted = false;
    });

    // Sirf pehli click ke baad listeners hata do
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);

}

// User ki pehli click ya touch par music start hoga
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

// Website band ya refresh hone par music stop ho jaye
window.addEventListener("beforeunload", () => {
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
});

window.addEventListener("pagehide", () => {
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
});