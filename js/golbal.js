//var switch1=document.getElementsByClassName("switch1")[0];
//var switch2=document.getElementsByClassName("switch2")[0];
var train1=new Train();
train1.imgObj=document.getElementById("train1");
//var switch1State=1;
//var switch2State=1;
var rails=new Array();
for(i=0;i<6;i++){
rails[i]=new Rail();
rails[i].imgObj=document.getElementsByClassName("rail"+(i+1))[0];
}
var switchs=new Array();
for(i=0;i<2;i++){
    switchs[i]=new Switch();
    switchs[i].imgObj=document.getElementsByClassName("switch"+(i+1))[0];
}
switchs[0].imgObj.addEventListener("click",f1);
switchs[1].imgObj.addEventListener("click",f2);

switchs[0].nextId=2;
switchs[0].firstNextId=4;//turn
switchs[0].firstNextType=2;
switchs[0].direction=1;


switchs[1].nextId=3;
switchs[1].firstNextId=1;
switchs[1].direction=0;

rails[0].nextId=0;
rails[0].nextType=1;
rails[0].direction=1;

rails[1].nextId=1;
rails[1].nextType=3;
rails[1].direction=0;

rails[2].nextId=5;
rails[2].nextType=0;
rails[1].direction=0;

rails[3].nextId=3;
rails[3].nextType=3;
rails[3].direction=1;

rails[4].nextId=1;
rails[4].nextType=1;
rails[4].direction=1;
console.log(rails[4]);
rails[5].nextId=2;
rails[5].nextType=3;
rails[5].direction=0;


//rails[1].imgObj.style.display = "none";
function f1(){
if(switchs[0].state==0){
    switchs[0].imgObj.src="./img/switch1.png";
}
else{
    switchs[0].imgObj.src="./img/switch3.png";
}
//swap
var temp= switchs[0].firstNextId;
switchs[0].firstNextId=switchs[0].nextId;
switchs[0].nextId=temp;
temp= switchs[0].firstNextType;
switchs[0].firstNextType=switchs[0].nextType;
switchs[0].nextType=temp;
/////
switchs[0].state=!switchs[0].state;
//switch1State = !switch1State;
}

function f2(){
if(switchs[1].state==0){
    switchs[1].imgObj.src="./img/switch5.png";
}
else{
    switchs[1].imgObj.src="./img/switch4.png";
}
//swap
var temp= switchs[1].firstNextId;
switchs[1].firstNextId=switchs[1].nextId;
switchs[1].nextId=temp;
temp= switchs[1].firstNextType;
switchs[1].firstNextType=switchs[1].nextType;
switchs[1].nextType=temp;
/////
switchs[1].state=!switchs[1].state;
//switch2State = !switch2State;
}

var trainIntervalId=setInterval(tainMove,20);
train1.direction=1;
train1.imgObj.style["margin-top"]="22px";
train1.imgObj.style["margin-left"]="35px";
train1.railId=0;
train1.railType=0;
train1.limit=new Point(rails[train1.railId].imgObj.height,0);

function tainMove(){
    if(train1.direction){
        if(train1.limit.x > 0){
            var old  =train1.imgObj.style["margin-top"];
            var newp=old.replace("px","");
            newp++;
            train1.limit.x--;
            train1.imgObj.style["margin-top"]=newp+"px";
        }else{
            //switching in x
            switch(train1.railType){ 
                case 0:
                case 2:
                        train1.railType=rails[train1.railId].nextType;        
                        train1.railId=rails[train1.railId].nextId;
                        
                break;
                case 1:
                    train1.railType=switchs[train1.railId].nextType;
                    train1.railId=switchs[train1.railId].nextId;
                        
                break;
                case 3:
                    //alert("done1");
                break;
            }
//debugger
            switch(train1.railType){
                case 0:
                        if(rails[train1.railId].direction){
                            //alert(train1.limit.x=rails[train1.railId].imgObj.height);
                            train1.limit.x+=rails[train1.railId].imgObj.height;
                            train1.direction=1;
                            train1.imgObj.src="./img/train.png";
                        }
                        else{
                            train1.limit.y+=rails[train1.railId].imgObj.height;
                            train1.direction=0;
                            train1.imgObj.src="./img/trainSide.png";
                        }
                break;
                case 1:
                        if(!switchs[train1.railId].state){
                            train1.limit.x+=25;
                            train1.limit.y+=25;
                        }
                        else{
                            train1.limit.x+=50;
                        }
                        train1.direction=switchs[train1.railId].direction;
                        if(train1.direction){
                            train1.imgObj.src="./img/train.png";
                        }else{
                            train1.imgObj.src="./img/trainSide.png";
                        }
                break;
                case 2:
                        //alert("hello");
                        train1.limit.x+=45;
                        train1.limit.y+=45;
                        debugger    
                        train1.direction=rails[train1.railId].direction;
                        if(train1.direction){
                            train1.imgObj.src="./img/train.png";
                        }else{
                            train1.imgObj.src="./img/trainSide.png";
                        }
                break;
                case 3:
                        //alert("done2");
                break;
            }
        }
    }else{
        if(train1.limit.y > 0){
            //alert(train1.limit.y );
            var old  =train1.imgObj.style["margin-left"];
            var newp=old.replace("px","");
            newp++;
            train1.limit.y--;
            train1.imgObj.style["margin-left"]=newp+"px";
        }else{
            //switching in y
            switch(train1.railType){ 
                case 0:
                case 2:
                    train1.railType=rails[train1.railId].nextType;
                    train1.railId=rails[train1.railId].nextId;
                    
                break;
                case 1:
                        train1.railType=switchs[train1.railId].nextType;
                        train1.railId=switchs[train1.railId].nextId;
                        
                break;
                case 3:
                       //alert("done3");
                break;
            }
            
            switch(train1.railType){
                case 0:
                        if(rails[train1.railId].direction){
                            //alert(train1.limit.y=rails[train1.railId].imgObj.height);
                            train1.limit.x+=rails[train1.railId].imgObj.height;
                            train1.direction=1;
                            train1.imgObj.src="./img/train.png";
                        }
                        else{
                            train1.limit.y+=rails[train1.railId].imgObj.height;
                            train1.direction=0;
                            train1.imgObj.src="./img/trainSide.png";
                        }
                break;
                case 1:
                        if(switchs[train1.railId].state){
                            train1.limit.x+=25;
                            train1.limit.y+=25;
                        }
                        else{
                            train1.limit.x+=50;
                        }
                        train1.direction=switchs[train1.railId].direction;
                        if(train1.direction){
                            train1.imgObj.src="./img/train.png";
                        }else{
                            train1.imgObj.src="./img/trainSide.png";
                        }
                break;
                case 2:
                        alert("hello2");
                        train1.limit.x+=45;
                        train1.limit.y+=45;
                        train1.direction=rails[train1.railId].direction;
                        if(train1.direction){
                            train1.imgObj.src="./img/train.png";
                        }else{
                            train1.imgObj.src="./img/trainSide.png";
                        }
                break;
                case 3:
                        //alert("done4");
                break;
            }
        }
    }
}
