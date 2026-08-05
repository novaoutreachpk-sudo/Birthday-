// ===============================
// Celebrate Page (SPA)
// ===============================

let celebrateInitialized = false;

function initCelebrate() {

    if (celebrateInitialized) return;
    celebrateInitialized = true;

}

function celebrate() {

    const card = document.getElementById("card");

    card.style.transform = "scale(1.03)";

    setTimeout(() => {
        card.style.transform = "scale(1)";
    }, 300);

    confetti({
        particleCount: 120,
        spread: 180,
        origin: { y: 0.6 },
        colors:["#ff0000","#dc143c","#b22222","#8b0000"]
    });

    confetti({
        particleCount:120,
        angle:60,
        spread:80,
        origin:{x:0},
        colors:["#ff0000","#dc143c","#b22222","#8b0000"]
    });

    confetti({
        particleCount:120,
        angle:120,
        spread:80,
        origin:{x:1},
        colors:["#ff0000","#dc143c","#b22222","#8b0000"]
    });

    let duration = 5000;
    let end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:8,
            angle:60,
            spread:60,
            origin:{x:0},
            colors:["#ff0000","#dc143c","#b22222","#8b0000"]
        });

        confetti({
            particleCount:8,
            angle:120,
            spread:60,
            origin:{x:1},
            colors:["#ff0000","#dc143c","#b22222","#8b0000"]
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }

    })();

    setTimeout(() => {

        // Abhi temporary
        showPage("page-cake");

    },5000);

}

function closeCard(){

    const card = document.getElementById("card");

    card.style.opacity = "0";
    card.style.transform = "scale(0.8)";

    setTimeout(()=>{
        card.style.display = "none";
    },500);

}