function logIn()
{
    var logInWidow = document.getElementById("logIn");
    // logInWidow.style.display = "none";
    document.body.removeChild(logInWidow);
    var mainMenuWindow = document.createElement("div");
    mainMenuWindow.innerHTML =  '<h1>Train of Thought</h1><button id="StartButton" class="btn-info btn-lg m-2" >Start</button><br><button id="characterButton" class="btn-info btn-lg m-2" >Choose Character</button><br><button id="DifficultyButton" class="btn-info btn-lg m-2" >Difficulty</button><br><button id="HowToPlayButton" class="btn-info btn-lg m-2" >How To Play</button><br><button id="CreditsButton" class="btn-info btn-lg m-2" >Credits</button>';
    mainMenuWindow.id = "mainMenu";
    document.body.appendChild(mainMenuWindow);
    var startButton = document.getElementById("StartButton");
startButton.onclick = startGame;
function startGame () {
    // document.getElementById("mainMenu").style.display = "none";        
    document.body.removeChild(mainMenuWindow);
    document.getElementsByClassName("game_screen")[0].style.display="block";
    GameInitializer();
    var trainIntervalId=setInterval(tainMove,10);
}