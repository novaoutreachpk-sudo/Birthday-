// ===============================
// Loading Page (SPA)
// ===============================

let loadingInterval = null;

function initLoading() {

    // Agar pehle se chal raha ho to band karo
    if (loadingInterval) {
        clearInterval(loadingInterval);
    }

    // Progress reset
    let width = 0;

    const progressBar = document.getElementById("progressBar");

    if (!progressBar) return;

    progressBar.style.width = "0%";

    loadingInterval = setInterval(() => {

        width++;

        progressBar.style.width = width + "%";

        if (width >= 100) {

            clearInterval(loadingInterval);

            // Abhi temporary yehi rehne do
            showPage("page-special");

        }

    }, 40);

}