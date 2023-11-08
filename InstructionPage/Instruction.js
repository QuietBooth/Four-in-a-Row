let play_button = document.getElementById('Instruction-start');

// open game mode page2
play_button.addEventListener("click",() =>{
    window.open("../GameModePage/gamemode.html","_self")
})

HomeButton = document.getElementById("home-button")

HomeButton.onclick = () =>{
    location.href = "../index.html"
}


const bgAudio = document.getElementById('bgAudio');

  // Function to toggle audio play/pause
function toggleAudio() {
    if (bgAudio.paused) {
        bgAudio.play();
    } else {
        bgAudio.pause();
    }
}

var muteB = document.getElementById("soundButton").addEventListener("click",()=>{
    bgAudio.toggleAudio();
})


const volumeSlider = document.getElementById('volumeSlider');
const volumeRange = document.getElementById('volumeRange');
const soundButton = document.getElementById("soundButton")

let isPlaying = false;

// Show the volume slider when hovering over the sound button
soundButton.addEventListener('mouseenter', () => {
    volumeSlider.style.display = 'block';
});

// Hide the volume slider when leaving the sound button
soundButton.addEventListener('mouseleave', () => {
    volumeSlider.style.display = 'none';
});

// Adjust the volume when the slider is changed
volumeRange.addEventListener('input', () => {
    gainNode.gain.value = volumeRange.value;
});

// Ensure the volume slider is hidden initially
volumeSlider.style.display = 'none';