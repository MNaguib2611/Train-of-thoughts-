var trains=new Array();  
var rails=new Array();
var switchs=new Array();
function trainHorn(){
    var audio = new Audio ('./SoundEffects/train-pass-by-02.WAV');
    audio.play();
}
function scoreSound(){
    var audio = new Audio ('./SoundEffects/Mario-coin-sound.MP3');
    audio.play();
}
function buzzerSound(){
    var buzzaudio = new Audio ('./SoundEffects/Buzzer.wav');
    buzzaudio.play();
}
//function GameInitializer(){
   // trainHorn();
var trainCharacter = 1;  //default charcter id is 1;
var trainIntervalId=new Array();
var speed=30; //(easy)default game speed if no difficulty was chosen 




//var switch1=document.getElementsByClassName("switch1")[0];
//var switch2=document.getElementsByClassName("switch2")[0];
//var switch1State=1;
//var switch2State=1;





  