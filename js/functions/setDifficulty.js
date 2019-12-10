function setdifficulty(difficulty){ //if player chosed difficulty 
    speed=35/difficulty; //speed will be used to control the speed of the train
    difficultyWindow.remove();
    document.getElementById("mainMenu").style.display = "inline-block";
}