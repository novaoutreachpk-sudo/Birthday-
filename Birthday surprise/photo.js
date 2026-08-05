// ===============================
// Photo Page (SPA)
// ===============================

let photoInitialized = false;

function initPhoto() {

    if (photoInitialized) return;
    photoInitialized = true;

    // Gift Animation
    const gift = document.querySelector(".gift");

    if (gift) {

        gift.addEventListener("click", function () {

            gift.innerHTML = "💖";
            gift.style.transform = "scale(1.2)";

            setTimeout(() => {
                gift.style.transform = "scale(1)";
            }, 300);

        });

    }

    // Continue Button
    const continueBtn = document.querySelector(".continue-btn");

    if (continueBtn) {

        continueBtn.addEventListener("click", function () {

    continueBtn.innerHTML = "Loading... ⏳";
    continueBtn.disabled = true;

    setTimeout(() => {

        continueBtn.innerHTML = "Continue ➜";
        continueBtn.disabled = false;

        showPage("page-loading");

    }, 1000);

});

    }

    // Close Button
    const closeBtn = document.querySelector(".close-btn");
    const popup = document.querySelector(".popup-content");

    if (closeBtn && popup) {

        closeBtn.addEventListener("click", function () {

            popup.style.display = "none";

        });

    }

}