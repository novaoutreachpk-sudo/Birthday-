// ===============================
// Surprise Page (SPA)
// ===============================

let surpriseInitialized = false;

function initSurprise() {

    if (surpriseInitialized) return;
    surpriseInitialized = true;

    const cards = document.querySelectorAll("#page-surprise .card");

    let openedCards = 0;

    cards.forEach((card) => {

        card.addEventListener("click", function () {

            if (this.classList.contains("active")) return;

            this.classList.add("active");

            openedCards++;

            confetti({
                particleCount:70,
                spread:70,
                origin:{ y:0.6 }
            });

            if(openedCards === cards.length){

                setTimeout(()=>{

                    confetti({
                        particleCount:300,
                        spread:180,
                        startVelocity:40,
                        origin:{ y:0.6 }
                    });

                    confetti({
                        particleCount:200,
                        angle:60,
                        spread:100,
                        origin:{ x:0 }
                    });

                    confetti({
                        particleCount:200,
                        angle:120,
                        spread:100,
                        origin:{ x:1 }
                    });

                    alert("❤️ You revealed all my special feelings for you ❤️");

                },500);

            }

        });

    });

}

function nextPage(){

    // Temporary
    showPage("page-final");

}