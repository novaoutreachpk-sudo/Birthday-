// ===============================
// Letter Page (SPA)
// ===============================

let letterInitialized = false;

function initLetter() {

    if (letterInitialized) return;
    letterInitialized = true;

    const heart = document.getElementById("heart");

    if (!heart) return;

    heart.onclick = function () {

        heart.classList.add("open");

        setTimeout(function () {

            // Abhi temporary
            showPage("page-celebrate");

        }, 1400);

    };

}