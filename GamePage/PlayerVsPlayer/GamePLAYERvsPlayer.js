HomeButton = document.getElementById("home-button")

HomeButton.onclick = () =>{
    location.href = "/index.html"
}



let IronManText = localStorage.getItem("player1")
let ThanosText = localStorage.getItem("player2")

Text1 = document.getElementById("iron-text").innerText = IronManText;
Text2 = document.getElementById("thanos-text").innerText =ThanosText;



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

columns = document.getElementById("column")






val_c1 = 1
val_c2 = 1
val_c3 = 1
val_c4 = 1
val_c5 = 1
val_c6 = 1
val_c7 = 1
turn = 1

var timer1 = document.getElementById("timer")
var timer2 = document.getElementById("timer1")



var countDownTurn = 1


let time1 = 5;

if(countDownTurn === 1){
    player1over()
}

function player1over() {
    timer1.textContent = time1;
    if (time1 === 0) {
        player2over()
        time1 = 5;
    countDownTurn = 2
    } else {
    time1--;
    setTimeout( player1over, 1000); // Update the countdown every 1 second (1000 milliseconds)
    }
}

let time2 = 5;


function player2over() {
    timer2.textContent = time2;
    if (time2 === 0) {
    countDownTurn = 1
    player1over()
    time2=5;
    } else {
    time2--;
    setTimeout(player2over, 1000); // Update the countdown every 1 second (1000 milliseconds)
    }
}

// document.addEventListener("click", resetTimer);




// Start the countdown
    // player1over();
    // player2over();



//checking the winner

function check(player) {
    setTimeout(() => {
        
        const IronImageURL = 'url("Group-1.svg")';
        const ThanosImageURL = 'url("Thanos.svg")';


        for (i = 1; i <= 7; i++) {
            for (j = 1; j <= 3; j++) {
                let cell1 = document.getElementById(`c${i}r${j}`);
                let cell2 = document.getElementById(`c${i}r${j + 1}`);
                let cell3 = document.getElementById(`c${i}r${j + 2}`);
                let cell4 = document.getElementById(`c${i}r${j + 3}`);{
                    if (
                        cell1.style.backgroundImage == IronImageURL &&
                        cell2.style.backgroundImage == IronImageURL &&
                        cell3.style.backgroundImage == IronImageURL &&
                        cell4.style.backgroundImage == IronImageURL
                    ){
                        window.open("/Result Pages/PlayerVsPlayer/IronManWin.html","_self") 
                    }else if(
                        cell1.style.backgroundImage == ThanosImageURL &&
                        cell2.style.backgroundImage == ThanosImageURL &&
                        cell3.style.backgroundImage == ThanosImageURL &&
                        cell4.style.backgroundImage == ThanosImageURL
                    ){
                        window.open("/Result Pages/PlayerVsPlayer/ThanosWin.html","_self") 
                    }else{
                        console.log("hii")
                    }
                }
            }
        }


        for (i = 1; i <= 6; i++) {
            for (j = 1; j <= 4; j++) {
                let cell1 = document.getElementById(`c${j}r${i}`);
                let cell2 = document.getElementById(`c${j + 1}r${i}`)
                let cell3 = document.getElementById(`c${j + 2}r${i}`)
                let cell4 = document.getElementById(`c${j + 3}r${i}`);{
                    if (
                        cell1.style.backgroundImage == IronImageURL &&
                        cell2.style.backgroundImage == IronImageURL &&
                        cell3.style.backgroundImage == IronImageURL &&
                        cell4.style.backgroundImage == IronImageURL
                    ){
                        window.open("/Result Pages/PlayerVsPlayer/IronManWin.html","_self") 
                    }else if(
                        cell1.style.backgroundImage == ThanosImageURL &&
                        cell2.style.backgroundImage == ThanosImageURL &&
                        cell3.style.backgroundImage == ThanosImageURL &&
                        cell4.style.backgroundImage == ThanosImageURL
                    ){
                        window.open("/Result Pages/PlayerVsPlayer/ThanosWin.html","_Self") 
                    }else{
                        console.log("hii")
                    }
                }
            }   
        }


        for (i = 1; i <= 4; i++) {
            for (j = 1; j <= 3; j++) {
                let cell1 = document.getElementById(`c${i}r${j}`);
                let cell2 = document.getElementById(`c${i + 1}r${j + 1}`);
                let cell3 = document.getElementById(`c${i + 2}r${j + 2}`);
                let cell4 = document.getElementById(`c${i + 3}r${j + 3}`);{
                    if (
                        cell1.style.backgroundImage == IronImageURL &&
                        cell2.style.backgroundImage == IronImageURL &&
                        cell3.style.backgroundImage == IronImageURL &&
                        cell4.style.backgroundImage == IronImageURL
                    ){
                        window.open("/Result Pages/PlayerVsPlayer/IronManWin.html","_self") 
                    }else if(
                        cell1.style.backgroundImage == ThanosImageURL &&
                        cell2.style.backgroundImage == ThanosImageURL &&
                        cell3.style.backgroundImage == ThanosImageURL &&
                        cell4.style.backgroundImage == ThanosImageURL
                    ){
                        window.open("/Result Pages/PlayerVsPlayer/ThanosWin.html","_self") 
                    }else{
                        console.log("hii")
                    }
                }
            }   
        }


            for (i = 1; i <= 4; i++) {
                for (j = 6; j >= 4; j--) {
                    let cell1 = document.getElementById(`c${i}r${j}`);
                    let cell2 = document.getElementById(`c${i + 1}r${j - 1}`);
                    let cell3 = document.getElementById(`c${i + 2}r${j - 2}`);
                    let cell4 = document.getElementById(`c${i + 3}r${j - 3}`)
                        if (
                            cell1.style.backgroundImage == IronImageURL &&
                            cell2.style.backgroundImage == IronImageURL &&
                            cell3.style.backgroundImage == IronImageURL &&
                            cell4.style.backgroundImage == IronImageURL
                        ){
                            window.open("/Result Pages/PlayerVsPlayer/ThanosWin.html","_Self") 
                        }else if(
                            cell1.style.backgroundImage == ThanosImageURL &&
                            cell2.style.backgroundImage == ThanosImageURL &&
                            cell3.style.backgroundImage == ThanosImageURL &&
                            cell4.style.backgroundImage == ThanosImageURL
                        ){
                        window.open("/Result Pages/PlayerVsPlayer/ThanosWin.html","_self") 
                        }else{
                            console.log("hii")
                        }
                    }
                }
}, 0)

}



const BgAudio = document.getElementById('bgAudio');

// Function to toggle audio play/pause
function toggleAudio() {
    if (BgAudio.paused) {
    BgAudio.play();
    } else {
        BgAudio.pause();
    }
}

//playing''

player1name = localStorage.getItem("player1")
player2name = localStorage.getItem("player2")




document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {
        sum = eval(`val_${e.id}`);
        eval(`val_${e.id}++`);

        

        if (sum <= 6 && turn % 2 != 0) {
            let circle = document.getElementById(`${e.id}r${sum}`);
            circle.style.backgroundImage = 'url("Group-1.svg")';
            circle.style.backgroundSize = "100%";
            circle.style.backgroundRepeat = "no-repeat";
            turn++;
            check('red');
            // document.getElementById("whosturn").innerText = player1name ;
        } else if (sum <= 6 && turn % 2 == 0) {
            let circle = document.getElementById(`${e.id}r${sum}`);
            circle.style.backgroundImage = 'url("Thanos.svg")';
            circle.style.backgroundSize = "100%";
            circle.style.backgroundRepeat = "no-repeat";
            turn++;
            check('yellow');
            // document.getElementById("whosturn").innerText = player2name;
        }
    });
});



Back_button = document.getElementById('Back');
Back_button.addEventListener("click",()=>{
    window.open("/GameModePage/gamemode.html","_self")
})

Restart_Button = document.getElementById("Game-Restart")

Restart_Button.addEventListener("click",()=>{
    location.reload()
})