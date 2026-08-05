const cssMap = {
    "page-index": "style.css",
    "page-photo": "photo.css",
    "page-loading": "loading.css",
    "page-special": "special.css",
    "page-memories": "memories.css",
    "page-letter": "letter.css",
    "page-celebrate": "celebrate.css",
    "page-cake": "cake.css",
    "page-surprise": "surprise.css",
    "page-final": "final.css"
};

function showPage(pageId) {

    // Hide all pages
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    const page = document.getElementById(pageId);
    const pageStyle = document.getElementById("pageStyle");

    if (!page) return;

    function initPage() {

        page.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        switch (pageId) {

            case "page-photo":
                if (typeof initPhoto === "function") initPhoto();
                break;

            case "page-loading":
                if (typeof initLoading === "function") initLoading();
                break;

            case "page-special":
                if (typeof initSpecial === "function") initSpecial();
                break;

            case "page-memories":
                if (typeof initMemories === "function") initMemories();
                break;

            case "page-letter":
                if (typeof initLetter === "function") initLetter();
                break;

            case "page-celebrate":
                if (typeof initCelebrate === "function") initCelebrate();
                break;

            case "page-cake":
                if (typeof initCake === "function") initCake();
                break;

            case "page-surprise":
                if (typeof initSurprise === "function") initSurprise();
                break;

            case "page-final":
                if (typeof initFinal === "function") initFinal();
                break;
        }
    }

    if (pageStyle && cssMap[pageId]) {

        pageStyle.href = cssMap[pageId];

        setTimeout(initPage, 30);

    } else {

        initPage();

    }

}

// First Page
showPage("page-index");