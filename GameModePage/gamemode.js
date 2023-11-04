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
                window.location.href = "../GamePage/PlayerVsPlayer/gamePLAYERvsPLAYER.html";
                break;
            case "2. IronMan vs Computer":
                window.location.href = "../GamePage/playerVScomputer/gamePLAYERvsComputer.html";
                break;
        }
    }
}