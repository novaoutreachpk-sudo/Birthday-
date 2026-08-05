// ===============================
// Final Page (SPA)
// ===============================

let finalInitialized = false;

function initFinal() {

    if (finalInitialized) return;

    finalInitialized = true;

}

function openGift() {

    const gift = document.querySelector("#page-final .gift");
    const message = document.getElementById("message");
    const hearts = document.getElementById("floatingHearts");

    gift.innerHTML = "💖";
    gift.style.transform = "scale(1.2)";
    gift.onclick = null;

    hearts.style.display = "block";
    message.style.display = "block";

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    setTimeout(() => {

        confetti({
            particleCount: 180,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 180,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

    }, 500);

    setTimeout(() => {

        confetti({
            particleCount: 350,
            spread: 360
        });

    }, 1200);

}

function restartWebsite() {

    document.getElementById("password").value = "";

    const gift = document.querySelector("#page-final .gift");
    gift.innerHTML = "🎁";
    gift.style.transform = "scale(1)";
    gift.onclick = openGift;

    document.getElementById("message").style.display = "none";
    document.getElementById("floatingHearts").style.display = "none";

    // ===== Music Restart =====
    const bgMusic = document.getElementById("bgMusic");

    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;

        musicStarted = false;

        bgMusic.play().then(() => {
            musicStarted = true;
        }).catch(() => {});
    }

    showPage("page-index");

}