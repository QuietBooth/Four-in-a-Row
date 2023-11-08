let play_button = document.getElementById('Instruction-start');

// open game mode page
play_button.addEventListener("click",() =>{
    window.open("../GameModePage/gamemode.html","_self")
})

// redirect to home

HomeButton = document.getElementById("home-button")

HomeButton.onclick = () =>{
    location.href = "../index.html"
}



// Creating a volume slider to adjust volume


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