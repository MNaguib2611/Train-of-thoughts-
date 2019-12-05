var logInButton = document.getElementById("logInButton");
logInButton.onclick = logIn;
function logIn()
{
    var logInWidow = document.getElementById("logIn");
    // logInWidow.style.display = "none";
    document.body.removeChild(logInWidow);
    var mainMenuWindow = document.createElement("div");
    mainMenuWindow.innerHTML = "<h1>Train of Thought</h1><input  id=\"StartButton\" type=\"button\" value=\"Start\"/><br><input id=\"characterButton\" type=\"button\" value=\"Choose Your Character\"/><br><input id=\"DifficultyButton\" type=\"button\" value=\"Difficulty\"/><br><input id=\"HowToPlayButton\" type=\"button\" value=\"How To Play\"/><br><input id=\"CreditsButton\" type=\"button\" value=\"Credits\"/>"
    mainMenuWindow.id = "mainMenu";
    document.body.appendChild(mainMenuWindow);
    var startButton = document.getElementById("StartButton");
startButton.onclick = startGame;
function startGame () {
    // document.getElementById("mainMenu").style.display = "none";        
    document.body.removeChild(mainMenuWindow);
    document.getElementsByClassName("game_screen")[0].style.display="block";
    GameInitializer();
    var trainIntervalId=setInterval(tainMove,20);
}
var howToPlayButton = document.getElementById("HowToPlayButton");
howToPlayButton.onclick = howToPlay;
function howToPlay () {
    document.getElementById("mainMenu").style.display = "none";
    howToPlayWindow = document.createElement("div");
    howToPlayWindow.id = "howToPlay";
    howToPlayWindow.innerHTML = "<p>Your task is to guide an increasing number of trains to their stations. You must divide your attention to guide them all simultaneously.<br> Attention is a limited resource that can track only so much information at once — so you must use your attention efficiently by planning ahead.</p>";
    howToPlayWindow.style.color = "white";
    var close = document.createElement("button");
    close.style.backgroundColor = "white";
    close.innerHTML = "Back";
    close.style.borderRadius = "10px";
    close.onclick = exit;
    function exit () {
        howToPlayWindow.remove();
        document.getElementById("mainMenu").style.display = "inline-block";
    }
    howToPlayWindow.appendChild(close);
    document.body.appendChild(howToPlayWindow);
}
var trainCharacter = 0;
var characterButton = document.getElementById("characterButton");
characterButton.onclick = chooseCharacter;
function chooseCharacter() {
    document.getElementById("mainMenu").style.display = "none";
    characterWindow = document.createElement("div");
    characterWindow.id = "character";
    characterWindow.innerHTML = "<div class=\"block\"><h3>Electric Train</h3><br><img id=\"train1\" onclick='switchCharacter1()' src=\"img/backGround.jpg\"></div><div class=\"block\"><h3>Steam Train</h3><br><img id=\"train2\" onclick=\"switchCharacter2()\" src=\"img/bg2.jpg\"></div>"
    characterWindow.style.margin = "0,auto";
    var close = document.createElement("button");
    close.style.backgroundColor = "white";
    close.style.borderRadius = "10px";
    close.innerHTML = "Back";
    close.onclick = exit;
    close.style.display="block";
    close.style.margin = "auto  "
    function exit () {
        characterWindow.remove();
        document.getElementById("mainMenu").style.display = "inline-block";
    }
    characterWindow.appendChild(close);
    document.body.appendChild(characterWindow);
}

function switchCharacter1(){
    trainCharacter = 1;
}
function switchCharacter2(){
    trainCharacter = 0;
}

var creditsButton = document.getElementById("CreditsButton");
creditsButton.onclick = credits;
function credits () {
    document.getElementById("mainMenu").style.display = "none";
    creditsWindow = document.createElement("div");
    creditsWindow.id = "credits";
    creditsWindow.innerHTML = "<h2><b>Credits</b></h2><ul><li>Ali Ismael</li><li>Islam Hanafi</li><li>Mena Emad</li><li>Mohamed Naguib </li><li>Mohamed Tarek</li></ul>"
    creditsWindow.style.color = "white";
    creditsWindow.style.margin = "0,auto";
    var close = document.createElement("button");
    close.style.backgroundColor = "white";
    close.style.borderRadius = "10px";
    close.innerHTML = "Back";
    close.onclick = exit;
    function exit () {
        creditsWindow.remove();
        document.getElementById("mainMenu").style.display = "inline-block";
    }
    creditsWindow.appendChild(close);
    document.body.appendChild(creditsWindow);
}
var difficultyButton = document.getElementById("DifficultyButton");
difficultyButton.onclick = difficulty;
function difficulty () {
    document.getElementById("mainMenu").style.display = "none";
    difficultyWindow = document.createElement("div");
    difficultyWindow.id = "difficulty";
    difficultyWindow.innerHTML = "<h3>Difficulty</h3><input id=\"EasyButton\" type=\"button\" value=\"Easy\"/><br><input id=\"MediumButton\" type=\"button\" value=\"Medium\"/><br><input id=\"HardButton\" type=\"button\" value=\"Hard\"/><br>"
    difficultyWindow.style.color = "white";
    difficultyWindow.style.width = "300px";
    var close = document.createElement("button");
    close.style.backgroundColor = "white";
    close.style.borderRadius = "10px";
    close.style.margin = "20px";
    close.innerHTML = "Back";
    close.onclick = exit;
    function exit () {
        difficultyWindow.remove();
        document.getElementById("mainMenu").style.display = "inline-block";
    }
    difficultyWindow.appendChild(close);
    document.body.appendChild(difficultyWindow);
}
}

        

