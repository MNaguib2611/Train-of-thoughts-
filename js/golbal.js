var train1=new Train();
var rails=new Array();
var switchs=new Array();

function GameInitializer(){
    train1.imgObj=document.getElementById("train1");
for(i=0;i<=21;i++){
rails[i]=new Rail();
rails[i].imgObj=document.getElementsByClassName("rail"+(i+1))[0];
}
for(i=0;i<6;i++){
    switchs[i]=new Switch();
    switchs[i].imgObj=document.getElementsByClassName("switch"+(i+1))[0];
}






rails[0].nextId=0;
rails[0].nextType=1;
rails[0].direction=1;

switchs[0].nextId=2;
switchs[0].firstNextId=16;//turn
switchs[0].firstNextType=2;
switchs[0].direction=1;

rails[16].nextId=1;
rails[16].nextType=0;
rails[16].direction=1;

rails[1].nextId=1;
rails[1].nextType=1;
rails[1].direction=0;

switchs[1].nextId=3;
switchs[1].firstNextId=11;
switchs[1].firstNextType=0;
switchs[1].direction=0;

rails[3].nextId=19;
rails[3].nextType=2;
rails[3].direction=1;

rails[11].nextId=4;
rails[11].nextType=1;
rails[11].direction=0;

switchs[4].nextId=14;
switchs[4].firstNextId=12;
switchs[4].firstNextType=0;
switchs[4].direction=0;

rails[12].nextId=5;
rails[12].nextType=1;
rails[12].direction=0;

rails[14].nextId=3;
rails[14].nextType=3;
rails[14].direction=1;

switchs[5].nextId=15;
switchs[5].firstNextId=13;
switchs[5].firstNextType=0;
switchs[5].direction=0;

rails[15].nextId=4;
rails[15].nextType=3;
rails[15].direction=1;

rails[13].nextId=5;
rails[13].nextType=3;
rails[13].direction=0;

rails[19].nextId=5;
rails[19].nextType=0;
rails[19].direction=1;

rails[5].nextId=6;
rails[5].nextType=3;
rails[5].direction=0;




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
                            if(switchs[train1.railId].direction==1||switchs[train1.railId].direction==2){
                            train1.limit.x+=50;
                        }else if(switchs[train1.railId].direction==0){
                            train1.limit.y+=50;
                        }
                        }
                        train1.direction=switchs[train1.railId].direction;
                        if(train1.direction==1){
                            train1.imgObj.src="./img/train.png";
                        }else if(train1.direction==0){
                            train1.imgObj.src="./img/trainSide.png";
                        }else if(train1.direction==2){
                            train1.imgObj.src="./img/train.png";
                        }
                break;
                case 2:
                        //alert("hello");
                        train1.limit.x+=45;
                        train1.limit.y+=45;
                        //debugger    
                        train1.direction=rails[train1.railId].direction;
                        if(train1.direction==1){
                            train1.imgObj.src="./img/train.png";
                        }else if(train1.direction==0){
                            train1.imgObj.src="./img/trainSide.png";
                        }else if(train1.direction==2){
                            train1.imgObj.src="./img/train.png";
                        }
                break;
                case 3:
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
                            if(switchs[train1.railId].direction==1||switchs[train1.railId].direction==2){
                                train1.limit.x+=50;
                            }else if(switchs[train1.railId].direction==0){
                                train1.limit.y+=50;
                            }
                        }
                        train1.direction=switchs[train1.railId].direction;
                        if(train1.direction==1){
                            train1.imgObj.src="./img/train.png";
                        }else if(train1.direction==0){
                            train1.imgObj.src="./img/trainSide.png";
                        }else if(train1.direction==2){
                            train1.imgObj.src="./img/train.png";
                        }
                break;
                case 2:
                        train1.limit.x+=45;
                        train1.limit.y+=45;
                        train1.direction=rails[train1.railId].direction;
                        if(train1.direction==1){
                            train1.imgObj.src="./img/train.png";
                        }else if(train1.direction==0){
                            train1.imgObj.src="./img/trainSide.png";
                        }else if(train1.direction==2){
                            train1.imgObj.src="./img/train.png";
                        }
                break;
                case 3:
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
                        if(switchs[train1.railId].direction==1||switchs[train1.railId].direction==2){
                            train1.limit.x+=50;
                        }else if(switchs[train1.railId].direction==0){
                            train1.limit.y+=50;
                        }
                    }
                    train1.direction=switchs[train1.railId].direction;
                    if(train1.direction==1){
                        train1.imgObj.src="./img/train.png";
                    }else if(train1.direction==0){
                        train1.imgObj.src="./img/trainSide.png";
                    }else if(train1.direction==2){
                        train1.imgObj.src="./img/train.png";
                    }
            break;
            case 2:
                    train1.limit.x+=45;
                    train1.limit.y+=45;
                    train1.direction=rails[train1.railId].direction;
                    if(train1.direction==1){
                        train1.imgObj.src="./img/train.png";
                    }else if(train1.direction==0){
                        train1.imgObj.src="./img/trainSide.png";
                    }else if(train1.direction==2){
                        train1.imgObj.src="./img/train.png";
                    }
            break;
            case 3:
                    //alert("done4");
            break;
        }
    }
}
}
