
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const enterToProceed1 = document.querySelector(".enter1 p");
const enterToProceed2 = document.querySelector(".enter2 p");

localStorage.setItem("player1",input1.value)
localStorage.setItem("player2",input2.value)




enterToProceed1.style.display = "none";
enterToProceed2.style.display = "none";



input1.addEventListener("input", () => {
    if (input1.value.trim() !== "") {
        enterToProceed1.style.display = "block";
    } else {
        enterToProceed1.style.display = "none";
    }
});


input1.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        input2.focus();
        enterToProceed1.style.display = "none"; 
    }
});


input2.addEventListener("input", () => {
    if (input2.value.trim() !== "") {
        enterToProceed2.style.display = "block";
    } else {
        enterToProceed2.style.display = "none";
    }
});

input2.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        localStorage.setItem("player1",input1.value)
        localStorage.setItem("player2",input2.value)
        window.location.href = "../GamePage/PlayerVsPlayer/gamePLAYERvsPLAYER.html";
    }
});

const bgAudio = document.getElementById('bgAudio');

// Function to toggle audio play/pause
function toggleAudio() {
    if (bgAudio.paused) {
    bgAudio.play();
    } else {
        bgAudio.pause();
    }
}

// Function to change the volume
function changeVolume(volume) {
    bgAudio.volume = volume;
}


