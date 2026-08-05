// ===============================
// Cake Page (SPA)
// ===============================

let cakeInitialized = false;
let cakeEffectsInterval = null;

function initCake() {

    if (cakeInitialized) return;
    cakeInitialized = true;

    const cutBtn = document.getElementById("cutBtn");
    const finalMessage = document.getElementById("finalMessage");
    const cake = document.querySelector(".cake");
    const effects = document.getElementById("effects");

    function createHeart(){

        const heart = document.createElement("div");
        heart.classList.add("effect");

        const emojis = ["❤️","💖","💕","✨","🎉","🎂"];
        heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        heart.style.left = Math.random()*100 + "%";
        heart.style.fontSize = (18 + Math.random()*22) + "px";
        heart.style.animationDuration = (4 + Math.random()*4) + "s";

        effects.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },8000);

    }

    cakeEffectsInterval = setInterval(createHeart,300);

    cutBtn.addEventListener("click",()=>{

        cake.style.transition="1s";
        cake.style.transform="scale(1.08) rotate(-2deg)";

        confetti({
            particleCount:250,
            spread:180,
            origin:{y:0.6}
        });

        setTimeout(()=>{

            confetti({
                particleCount:200,
                spread:120,
                origin:{x:0.2,y:0.5}
            });

            confetti({
                particleCount:200,
                spread:120,
                origin:{x:0.8,y:0.5}
            });

        },700);

        setTimeout(()=>{

            finalMessage.style.display="block";

            finalMessage.scrollIntoView({
                behavior:"smooth"
            });

        },1200);

        setTimeout(()=>{

            // Abhi temporary
            showPage("page-surprise");

        },4000);

        cutBtn.disabled = true;
        cutBtn.innerHTML = "🎉 Cake Cut Successfully 🎉";

    });

}