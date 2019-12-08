function GameInitializer(){ //the function that starts the game
    trainHorn();
    
    // to dinamically changing character image with the user chosen character
    document.getElementById("characterImg").src = "./img/trainSide_"+trainCharacter+"_4.png";
    document.getElementById("characterImg").style.width = "80px";
    document.getElementById("characterImg").style.height = "50px";
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












    for(i=0;i<50;i++){
        trains[i]=new Train();
        trains[i].imgObj =document.createElement("img");
        trains[i].imgObj.classList.add("train");
        trains[i].imgObj.id="train"+i; 
        document.getElementsByClassName("game_screen")[0].appendChild(trains[i].imgObj);
        trains[i].imgObj=document.getElementById("train"+(i));
        trains[i].kind=Math.floor(Math.random() * 7)+1;
        //trains[i].kind=4;
        trains[i].imgObj.src="./img/train_"+trainCharacter+"_"+trains[i].kind+".png";
        trains[i].direction=1;
        trains[i].imgObj.style["margin-top"]="22px";
        trains[i].imgObj.style["margin-left"]="35px";
        trains[i].railId=0;
        trains[i].railType=0;
        trains[i].limit=new Point(rails[trains[i].railId].imgObj.height,0);
    }
    for(let j=0;j<50;j++){
    setTimeout(function(){trainIntervalId[j]=setInterval(function() { trainMove(j); },speed)},((10000/(30/speed)))*j);
}
}