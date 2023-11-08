play_button = document.getElementById('Play-again');

play_button.onclick = () =>{
    window.open("/GamePage/PlayerVsPlayer/gamePLAYERvsPLAYER.html","_self")
}

Close_Tab = document.getElementById("Exit-button")

Close_Tab.addEventListener("click",() =>{
    window.close()
})

HomeButton = document.getElementById("home-button")

HomeButton.onclick =()=>{
    location.href ="/index.html"
}
