// ===============================
// Special Page (SPA)
// ===============================

let specialStarted = false;

function initSpecial() {

    // Har baar page khulne par confetti dobara na chale
    if (specialStarted) return;

    specialStarted = true;

    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });

}

// START Button
function start() {

    // Abhi temporary yehi rehne do
    showPage("page-memories");

}