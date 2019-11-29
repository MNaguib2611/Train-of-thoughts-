var switch1=document.getElementsByClassName("switch1")[0];
var switch2=document.getElementsByClassName("switch2")[0];
var train1=document.getElementById("train1");
switch1.addEventListener("click",f1);
switch2.addEventListener("click",f2);
var switch1State=1;
var switch2State=1;
var rails=new Array();
rails[0]=new rail();
console.log(rails);
rails[0].nextId = 1;
//rail[1].nextId=2;
//rail[2].nextId=3;
//rail[3].nextId=4;
//rail[4].nextId=-1;
function f1(){
if(switch1State){
    switch1.src="./img/switch1.png";
}
else{
    switch1.src="./img/switch3.png";
}
switch1State = !switch1State;
}

function f2(){
if(switch2State){
    switch2.src="./img/switch5.png";
}
else{
    switch2.src="./img/switch4.png";
}
switch2State = !switch2State;
}

var trainIntervalId=setInterval(tainMove,100);
var limet=new point(200,0);
train1Rail=0;
var direction=1;
train1.style["margin-top"]="22px";
var newp=22;
function tainMove(){
    if(direction){
        if(newp<limet.x){
            var old  =train1.style["margin-top"];
            newp=old.replace("px","");
            newp++;
            train1.style["margin-top"]=newp+"px";
        }else{
            train1.style["margin-top"]=newp+"px";
        }
    }else{

    }
}
