let selectedOption = null;

// Highlighting the selected option

function highlightOption(option) {
    if (selectedOption) {
        selectedOption.classList.remove("highlighted");
    }
    option.classList.add("highlighted");
    selectedOption = option;
}

workInProgress = document.getElementById("plvspc")

function redirectPage() {
    // check if the option is selected
    if (selectedOption) {
        // get selected option
        const optionText = selectedOption.textContent;

        // switch statement to handle both the choices
        switch (optionText) {
            case "1. IronMan vs Thanos":
                // Redirect to name input page
                window.location.href ="../Name_Input_Page/name.html"
                break;
                //Display work in progress message
            case "2. IronMan vs Computer":
                workInProgress.style.display = "block"
                break;
        }
    }
}

HomeButton = document.getElementById("home-button")

HomeButton.onclick = () =>{
    location.href = "../index.html"
}
