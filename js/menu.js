var players = [];
var logInButton = document.getElementById("logInButton");
logInButton.onclick = logIn;
var user = document.getElementById("user");
var userName=document.getElementById("PlayerName");
function addPlayers (){
     var player ={
         id : Date.now(),
         Name : userName.value}
    players.push(player);
     localStorage.setItem('PlayerName', JSON.stringify(player));
     player = JSON.parse(localStorage.getItem('players'));
      }
logInButton.addEventListener('click',addPlayers);
function displayPlayerName  (){
    user.textContent = userName.value;
}
function trainHorn(){
    var audio = new Audio ('./SoundEffects/train-pass-by-01.WAV');
    audio.play();
}



function logIn()
{ 
    trainHorn();
    if (userName.value =="") {
        userName.style.border="3px solid red";
        userName.classList.add('red-placeholder');
       
    } else {
        var logInWidow = document.getElementById("logIn");
        addPlayers();
        displayPlayerName();
    
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
        difficultyWindow.innerHTML = "<h3>Difficulty </h3><button class=\"btn-primary btn-lg m-2\" id=\"EasyButton\" > Easy </button><br><button class=\"btn-warning btn-lg m-2\" id=\"MediumButton\" >Medium</button><br><button class=\"btn-danger btn-lg m-2\" id=\"HardButton\" >Hard</button><br>"
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
   
}

        

