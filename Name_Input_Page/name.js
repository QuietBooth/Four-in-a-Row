
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const enterToProceed1 = document.querySelector(".enter1 p");
const enterToProceed2 = document.querySelector(".enter2 p");

localStorage.setItem("player1",input1.value)
localStorage.setItem("player2",input2.value)




enterToProceed1.style.display = "none";
enterToProceed2.style.display = "none";


// Function to validate and display 'EnterToProceed' button
input1.addEventListener("input", () => {
    if (input1.value.trim() !== "") {
        enterToProceed1.style.display = "block";
    } else {
        enterToProceed1.style.display = "none";
    }
});

// if only player enters the name we can proceed further

input1.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        input2.focus();
        enterToProceed1.style.display = "none"; 
    }
});



// if only player enters the name we can proceed further
input2.addEventListener("input", () => {
    if (input2.value.trim() !== "") {
        enterToProceed2.style.display = "block";
    } else {
        enterToProceed2.style.display = "none";
    }
});

//Enter key to move to game page

input2.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        localStorage.setItem("player1",input1.value)
        localStorage.setItem("player2",input2.value)
        window.location.href = "../GamePage/PlayerVsPlayer/gamePLAYERvsPLAYER.html";
    }
});

