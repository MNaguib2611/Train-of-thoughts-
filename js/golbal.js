var train1=new Train();
var rails=new Array();
var switchs=new Array();
function trainHorn(){
    var audio = new Audio ('./SoundEffects/train-pass-by-02.WAV');
    audio.play();
}
//function GameInitializer(){
    trainHorn();
var trainCharacter = 1;
var trainIntervalId;
var speed=30;

function switchCharacter1(){
    trainCharacter = 1;
    characterWindow.remove();
    document.getElementById("mainMenu").style.display = "inline-block";
}
function switchCharacter2(){
    trainCharacter = 2;
    characterWindow.remove();
    document.getElementById("mainMenu").style.display = "inline-block";
}
function setdifficulty(difficulty){
    speed=30/difficulty;
    difficultyWindow.remove();
    document.getElementById("mainMenu").style.display = "inline-block";
}

function GameInitializer(){
    trainHorn();
    trainIntervalId=setInterval(tainMove,speed);
    train1.kind=4;
    train1.imgObj=document.getElementById("train1");
    train1.imgObj.src="./img/train_"+trainCharacter+".png";
for(i=0;i<=21;i++){
rails[i]=new Rail();
rails[i].imgObj=document.getElementsByClassName("rail"+(i+1))[0];
}
for(i=0;i<6;i++){
    switchs[i]=new Switch();
    switchs[i].imgObj=document.getElementsByClassName("switch"+(i+1))[0];
}

//rails
rails[0].nextId=0;
rails[0].nextType=1;
rails[0].direction=1;

rails[1].nextId=1;
rails[1].nextType=1;
rails[1].direction=0;

 rails[2].nextId=17;
 rails[2].nextType=2;//turn
 rails[2].direction=0;

 rails[3].nextId=19;
 rails[3].nextType=2;
 rails[3].direction=1;

 rails[4].nextId=6;
 rails[4].nextType=3;
 rails[4].direction=0;

 rails[5].nextId=18;
 rails[5].nextType=2;
 rails[5].direction=2;

 rails[6].nextId=2;
 rails[6].nextType=1;
 rails[6].direction=0;

 rails[7].nextId=3;
 rails[7].nextType=1;
 rails[7].direction=0;

 rails[8].nextId=0;
 rails[8].nextType=3;
 rails[8].direction=1;

 rails[9].nextId=1;
 rails[9].nextType=3;
 rails[9].direction=1;
 
 rails[10].nextId=2;
 rails[10].nextType=3;
 rails[10].direction=0;

rails[11].nextId=4;
rails[11].nextType=1;
rails[11].direction=0;

rails[12].nextId=5;
rails[12].nextType=1;
rails[12].direction=0;

rails[13].nextId=5;
rails[13].nextType=3;
rails[13].direction=0;

rails[14].nextId=3;
rails[14].nextType=3;
rails[14].direction=1;

rails[15].nextId=4;
rails[15].nextType=3;
rails[15].direction=1;

//turns
rails[16].nextId=1;
rails[16].nextType=0;
rails[16].direction=1;

rails[17].nextId=5;
rails[17].nextType=0;
rails[17].direction=0;

rails[18].nextId=6;
rails[18].nextType=0;
rails[18].direction=2;

rails[19].nextId=4;
rails[19].nextType=0;
rails[19].direction=1;

//switches
switchs[0].nextId=2;
switchs[0].firstNextId=16;//turn
switchs[0].firstNextType=2;
switchs[0].direction=1;

switchs[1].nextId=3;
switchs[1].firstNextId=11;
switchs[1].direction=0;
switchs[1].state=1;

switchs[2].nextId=8;
switchs[2].firstNextId=7;
switchs[2].direction=0;
switchs[2].state=1;

switchs[3].nextId=9;
switchs[3].firstNextId=10;
switchs[3].direction=0;
switchs[3].state=1;

switchs[4].nextId=14;
switchs[4].firstNextId=12;
switchs[4].direction=0;
switchs[4].state=1;

switchs[5].nextId=15;
switchs[5].firstNextId=13;
switchs[5].firstNextType=0;
switchs[5].direction=0;
switchs[5].state=1;













train1.direction=1;
train1.imgObj.style["margin-top"]="22px";
train1.imgObj.style["margin-left"]="35px";
train1.railId=0;
train1.railType=0;
train1.limit=new Point(rails[train1.railId].imgObj.height,0);

}
//var switch1=document.getElementsByClassName("switch1")[0];
//var switch2=document.getElementsByClassName("switch2")[0];
//var switch1State=1;
//var switch2State=1;


function switchFunc(id,pic1,pic2){
    if(switchs[id].state==0){
        switchs[id].imgObj.src="./img/switch"+pic1+".png";
    }
    else{
        switchs[id].imgObj.src="./img/switch"+pic2+".png";
    }
    //swap
    var temp= switchs[id].firstNextId;
    switchs[id].firstNextId=switchs[id].nextId;
    switchs[id].nextId=temp;
    temp= switchs[id].firstNextType;
    switchs[id].firstNextType=switchs[id].nextType;
    switchs[id].nextType=temp;
    /////
    switchs[id].state=!switchs[id].state;
    //switch1State = !switch1State;
    }


function tainMove(){
    if(train1.direction==1){
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
                        if(rails[train1.railId].direction==1||rails[train1.railId].direction==2){
                            //alert(train1.limit.x=rails[train1.railId].imgObj.height);
                            train1.limit.x+=rails[train1.railId].imgObj.height;
                            train1.direction=rails[train1.railId].direction;
                            if(rails[train1.railId].direction==1){
                                train1.imgObj.src="./img/train_"+trainCharacter+".png";
                            }
                            else{
                                train1.imgObj.src="./img/trainUp_"+trainCharacter+".png"
                            }
                        }
                        else{
                            train1.limit.y+=rails[train1.railId].imgObj.height;
                            train1.direction=0;
                            train1.imgObj.src="./img/trainSide_"+trainCharacter+".png";
                        }
                break;
                case 1:
                        if(!switchs[train1.railId].state){
                            train1.limit.x+=25;
                            train1.limit.y+=25;
                        }
                        else{
                            if(switchs[train1.railId].direction==1||switchs[train1.railId].direction==2){
                            train1.limit.x+=50;
                        }else if(switchs[train1.railId].direction==0){
                            train1.limit.y+=50;
                        }
                        }
                        train1.direction=switchs[train1.railId].direction;
                        if(train1.direction==1){
                            train1.imgObj.src="./img/train_"+trainCharacter+".png";
                        }else if(train1.direction==0){
                            train1.imgObj.src="./img/trainSide_"+trainCharacter+".png";
                        }else if(train1.direction==2){
                            train1.imgObj.src="./img/train_"+trainCharacter+".png";
                        }
                break;
                case 2:
                        //alert("hello");
                        train1.limit.x+=45;
                        train1.limit.y+=45;
                        //debugger    
                        train1.direction=rails[train1.railId].direction;
                        if(train1.direction==1){
                            train1.imgObj.src="./img/train_"+trainCharacter+".png";
                        }else if(train1.direction==0){
                            train1.imgObj.src="./img/trainSide_"+trainCharacter+".png";
                        }else if(train1.direction==2){
                            train1.imgObj.src="./img/trainUp_"+trainCharacter+".png";
                        }
                break;
                case 3:
                        if(train1.kind==train1.railId){
                            document.getElementById("scoreValue").innerText=parseInt(document.getElementById("scoreValue").innerText)+1;
                            }
                        
                        clearInterval(trainIntervalId);
                        //alert("done2");
                break;
            }
        }
    }else if(train1.direction==0){
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
                        if(rails[train1.railId].direction==1||rails[train1.railId].direction==2){
                            train1.limit.x+=rails[train1.railId].imgObj.height;
                            train1.direction=rails[train1.railId].direction;
                            if(rails[train1.railId].direction==1){
                                train1.imgObj.src="./img/train_"+trainCharacter+".png";
                            }
                            else{
                                train1.imgObj.src="./img/trainUp_"+trainCharacter+".png"
                            }
                        }
                        else{
                            train1.limit.y+=rails[train1.railId].imgObj.height;
                            train1.direction=0;
                            train1.imgObj.src="./img/trainSide_"+trainCharacter+".png";
                        }
                break;
                case 1:
                        if(switchs[train1.railId].state){
                            train1.limit.x+=25;
                            train1.limit.y+=25;
                        }
                        else{
                            if(switchs[train1.railId].direction==1||switchs[train1.railId].direction==2){
                                train1.limit.x+=50;
                            }else if(switchs[train1.railId].direction==0){
                                train1.limit.y+=50;
                            }
                        }
                        train1.direction=switchs[train1.railId].direction;
                        if(train1.direction==1){
                            train1.imgObj.src="./img/train_"+trainCharacter+".png";
                        }else if(train1.direction==0){
                            train1.imgObj.src="./img/trainSide_"+trainCharacter+".png";
                        }else if(train1.direction==2){
                            train1.imgObj.src="./img/trainUp_"+trainCharacter+".png";
                        }
                break;
                case 2:
                        train1.limit.x+=45;
                        train1.limit.y+=45;
                        train1.direction=rails[train1.railId].direction;
                        if(train1.direction==1){
                            train1.imgObj.src="./img/train_"+trainCharacter+".png";
                        }else if(train1.direction==0){
                            train1.imgObj.src="./img/trainSide_"+trainCharacter+".png";
                        }else if(train1.direction==2){
                            train1.imgObj.src="./img/trainUp_"+trainCharacter+".png";
                        }
                break;
                case 3:
                        if(train1.kind==train1.railId){
                            document.getElementById("scoreValue").innerText=parseInt(document.getElementById("scoreValue").innerText)+1;
                            }
                        clearInterval(trainIntervalId);
                        //alert("done4");
                break;
            }
        }
    }else if(train1.direction==2){
    if(train1.limit.x > 0){
        var old  =train1.imgObj.style["margin-top"];
        var newp=old.replace("px","");
        newp--;
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
                   //alert("done3");
            break;
        }
        
        switch(train1.railType){
            case 0:
                    if(rails[train1.railId].direction==1||rails[train1.railId].direction==2){
                        train1.limit.x+=rails[train1.railId].imgObj.height;
                        train1.direction=rails[train1.railId].direction;
                        if(rails[train1.railId].direction==1){
                            train1.imgObj.src="./img/train_"+trainCharacter+".png";
                        }
                        else{
                            train1.imgObj.src="./img/trainUp_"+trainCharacter+".png"
                        }
                    }
                    else{
                        train1.limit.y+=rails[train1.railId].imgObj.height;
                        train1.direction=0;
                        train1.imgObj.src="./img/trainSide_"+trainCharacter+".png";
                    }
            break;
            case 1:
                    if(switchs[train1.railId].state){
                        train1.limit.x+=25;
                        train1.limit.y+=25;
                    }
                    else{
                        if(switchs[train1.railId].direction==1||switchs[train1.railId].direction==2){
                            train1.limit.x+=50;
                        }else if(switchs[train1.railId].direction==0){
                            train1.limit.y+=50;
                        }
                    }
                    train1.direction=switchs[train1.railId].direction;
                    if(train1.direction==1){
                        train1.imgObj.src="./img/train_"+trainCharacter+".png";
                    }else if(train1.direction==0){
                        train1.imgObj.src="./img/trainSide_"+trainCharacter+".png";
                    }else if(train1.direction==2){
                        train1.imgObj.src="./img/trainUp_"+trainCharacter+".png";
                    }
            break;
            case 2:
                    train1.limit.x+=45;
                    train1.limit.y+=45;
                    train1.direction=rails[train1.railId].direction;
                    if(train1.direction==1){
                        train1.imgObj.src="./img/train_"+trainCharacter+".png";
                    }else if(train1.direction==0){
                        train1.imgObj.src="./img/trainSide_"+trainCharacter+".png";
                    }else if(train1.direction==2){
                        train1.imgObj.src="./img/trainUp_"+trainCharacter+".png";
                    }
            break;
            case 3:
                    if(train1.kind==train1.railId){
                        document.getElementById("scoreValue").innerText=parseInt(document.getElementById("scoreValue").innerText)+1;
                        }
                    clearInterval(trainIntervalId);
                    //alert("done4");
            break;
        }
    }
}
}
