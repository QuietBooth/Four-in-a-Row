let selectedOption = null;

function highlightOption(option) {
    if (selectedOption) {
        selectedOption.classList.remove("highlighted");
    }

    option.classList.add("highlighted");
    selectedOption = option;
}

function redirectPage() {
    if (selectedOption) {
        const optionText = selectedOption.textContent;
        switch (optionText) {
            case "1. IronMan vs Thanos":
                window.location.href ="../Name_Input_Page/name.html"
                break;
            case "2. IronMan vs Computer":
                window.location.href = "../GamePage/playerVScomputer/gamePLAYERvsComputer.html";
                break;
        }
    }
}

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

// Function to change the volume
const audioButton = document.getElementById('audioButton');
const volumeSlider = document.getElementById('volumeSlider');
const volumeRange = document.getElementById('volumeRange');
const audio = document.getElementById('audio');

// Adjust the volume when the slider is changed
volumeRange.addEventListener('input', () => {
    audio.volume = volumeRange.value;
});

// Hide the volume slider when the mouse leaves the button
audioButton.addEventListener('mouseleave', () => {
    volumeSlider.style.display = 'none';
});

// Ensure the volume slider is hidden initially
volumeSlider.style.display = 'none';