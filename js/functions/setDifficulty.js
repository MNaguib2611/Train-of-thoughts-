function setdifficulty(difficulty){ //if player chosed difficulty 
    speed=30/difficulty;
    difficultyWindow.remove();
    document.getElementById("mainMenu").style.display = "inline-block";
}