// ===============================
// Memories Page (SPA)
// ===============================

let memoriesStarted = false;
let effectsInterval = null;

function initMemories() {

    if (memoriesStarted) return;
    memoriesStarted = true;

    // Counter
    let year = 0;
    let month = 0;
    let day = 0;

    const yearEl = document.querySelectorAll(".box h2")[0];
    const monthEl = document.querySelectorAll(".box h2")[1];
    const dayEl = document.querySelectorAll(".box h2")[2];

    const counter = setInterval(() => {

        if (year < 22) {
            year++;
            yearEl.innerHTML = year;
        }

        if (month < 0) {
            month++;
            monthEl.innerHTML = month;
        }

        if (day < 0) {
            day++;
            dayEl.innerHTML = day;
        }

        if (year === 22 && month === 0 && day === 0) {
            clearInterval(counter);
        }

    }, 80);

    // Floating Effects
    const effects = document.querySelector(".effects");

    const items = ["✨","✨","❤️","💖","💕","⭐"];

    function createEffect(){

        const effect = document.createElement("span");

        effect.classList.add("effect");

        effect.innerHTML = items[Math.floor(Math.random()*items.length)];

        effect.style.left = Math.random()*100 + "vw";
        effect.style.animationDuration = (Math.random()*4+5)+"s";
        effect.style.fontSize = (Math.random()*15+15)+"px";

        effects.appendChild(effect);

        setTimeout(()=>{
            effect.remove();
        },9000);

    }

    effectsInterval = setInterval(createEffect,350);

}

// NEXT Button
document.querySelector(".btn").addEventListener("click", function () {

    // Abhi temporary
    showPage("page-letter");

});