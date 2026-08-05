const passInput = document.getElementById("password");
const popup = document.getElementById("popup");
const profilePic = document.getElementById("profilePic");

// Open Popup
profilePic.onclick = function () {
    popup.classList.add("show");
}

// Close Popup
function closePopup() {
    popup.classList.remove("show");
}

// Add Number
function addNumber(num) {
    if (passInput.value.length < 4) {
        passInput.value += num;
    }
}

// Delete Number
function clearPass() {
    passInput.value = passInput.value.slice(0, -1);
}

// Check Password
function checkPass() {

    if (passInput.value === "4393") {

        popup.classList.remove("show");

        setTimeout(function () {
            startMusic();
            showPage("page-photo");
        }, 300);

    } else {

        alert("❌ Wrong Passkey");
        passInput.value = "";
    }
}

// Keyboard Support
document.addEventListener("keydown", function(e){

    if(e.key >= "0" && e.key <= "9"){
        addNumber(e.key);
    }

    if(e.key === "Backspace"){
        clearPass();
    }

    if(e.key === "Enter"){
        checkPass();
    }

});

// Close Popup if user clicks outside
popup.addEventListener("click", function(e){

    if(e.target === popup){
        closePopup();
    }

});