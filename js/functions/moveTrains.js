function trainMove(index){  //the function responsible for moving the trains
    if(trains[index].direction==1){ //direction 1 ->the train is moving down
        if(trains[index].limit.x > 0){ //if there is still any length in the rail
            var old  =trains[index].imgObj.style["margin-top"];
            var newp=old.replace("px","");
            newp++;
            trains[index].limit.x--;
            trains[index].imgObj.style["margin-top"]=newp+"px";
        }else{
            //switching in x
            switch(trains[index].railType){ 
                case 0:
                case 2:
                        trains[index].railType=rails[trains[index].railId].nextType;        
                        trains[index].railId=rails[trains[index].railId].nextId;
                        
                break;
                case 1:
                    trains[index].railType=switchs[trains[index].railId].nextType;
                    trains[index].railId=switchs[trains[index].railId].nextId;
                        
                break;
                case 3: 
                    //alert("done1");
                break;
            }

            switch(trains[index].railType){
                case 0: //rail 0 meaning a horizontal railway
                        if(rails[trains[index].railId].direction==1||rails[trains[index].railId].direction==2){
                            //alert(trains[index].limit.x=rails[trains[index].railId].imgObj.height);
                            trains[index].limit.x+=rails[trains[index].railId].imgObj.height;
                            trains[index].direction=rails[trains[index].railId].direction;
                            if(rails[trains[index].railId].direction==1){
                                trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                            }
                            else{
                                trains[index].imgObj.src="./img/trainUp_"+trainCharacter+"_"+trains[index].kind+".png"
                            }
                        }
                        else{
                            trains[index].limit.y+=rails[trains[index].railId].imgObj.height;
                            trains[index].direction=0;
                            trains[index].imgObj.src="./img/trainSide_"+trainCharacter+"_"+trains[index].kind+".png";
                        }
                break;
                case 1:
                        if(!switchs[trains[index].railId].state){
                            trains[index].limit.x+=25;
                            trains[index].limit.y+=25;
                        }
                        else{
                            if(switchs[trains[index].railId].direction==1||switchs[trains[index].railId].direction==2){
                            trains[index].limit.x+=50;
                        }else if(switchs[trains[index].railId].direction==0){
                            trains[index].limit.y+=50;
                        }
                        }
                        trains[index].direction=switchs[trains[index].railId].direction;
                        if(trains[index].direction==1){
                            trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                        }else if(trains[index].direction==0){
                            trains[index].imgObj.src="./img/trainSide_"+trainCharacter+"_"+trains[index].kind+".png";
                        }else if(trains[index].direction==2){
                            trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                        }
                        switchs[trains[index]].imgObj.disabled="true";
                break;
                case 2:
                        //alert("hello");
                        trains[index].limit.x+=45;
                        trains[index].limit.y+=45;
                        //debugger    
                        trains[index].direction=rails[trains[index].railId].direction;
                        if(trains[index].direction==1){
                            trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                        }else if(trains[index].direction==0){
                            trains[index].imgObj.src="./img/trainSide_"+trainCharacter+"_"+trains[index].kind+".png";
                        }else if(trains[index].direction==2){
                            trains[index].imgObj.src="./img/trainUp_"+trainCharacter+"_"+trains[index].kind+".png";
                        }
                break;
                case 3:
                        if(trains[index].kind==trains[index].railId+1){
                            document.getElementById("scoreValue").innerText=parseInt(document.getElementById("scoreValue").innerText)+100;
                                scoreSound();
                            }else{
                                buzzerSound();
                            }
                           
                        clearInterval(trainIntervalId[index]);
                       
                        //alert("done2");
                break;
            }
        }
    }else if(trains[index].direction==0){ //direction 1 ->the train is moving right 
        if(trains[index].limit.y > 0){ //if there is still any length in the rail
            //alert(trains[index].limit.y );
            var old  =trains[index].imgObj.style["margin-left"];
            var newp=old.replace("px","");
            newp++;
            trains[index].limit.y--;
            trains[index].imgObj.style["margin-left"]=newp+"px";
        }else{
            //switching in y
            switch(trains[index].railType){ 
                case 0:
                case 2:
                    trains[index].railType=rails[trains[index].railId].nextType;
                    trains[index].railId=rails[trains[index].railId].nextId;
                    
                break;
                case 1:
                        trains[index].railType=switchs[trains[index].railId].nextType;
                        trains[index].railId=switchs[trains[index].railId].nextId;
                        
                break;
                case 3:
                       //alert("done3");
                break;
            }
            
            switch(trains[index].railType){
                case 0:
                        if(rails[trains[index].railId].direction==1||rails[trains[index].railId].direction==2){
                            trains[index].limit.x+=rails[trains[index].railId].imgObj.height;
                            trains[index].direction=rails[trains[index].railId].direction;
                            if(rails[trains[index].railId].direction==1){
                                trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                            }
                            else{
                                trains[index].imgObj.src="./img/trainUp_"+trainCharacter+"_"+trains[index].kind+".png"
                            }
                        }
                        else{
                            trains[index].limit.y+=rails[trains[index].railId].imgObj.height;
                            trains[index].direction=0;
                            trains[index].imgObj.src="./img/trainSide_"+trainCharacter+"_"+trains[index].kind+".png";
                        }
                break;
                case 1:
                        if(switchs[trains[index].railId].state){
                            trains[index].limit.x+=25;
                            trains[index].limit.y+=25;
                        }
                        else{
                            if(switchs[trains[index].railId].direction==1||switchs[trains[index].railId].direction==2){
                                trains[index].limit.x+=50;
                            }else if(switchs[trains[index].railId].direction==0){
                                trains[index].limit.y+=50;
                            }
                        }
                        trains[index].direction=switchs[trains[index].railId].direction;
                        if(trains[index].direction==1){
                            trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                        }else if(trains[index].direction==0){
                            trains[index].imgObj.src="./img/trainSide_"+trainCharacter+"_"+trains[index].kind+".png";
                        }else if(trains[index].direction==2){
                            trains[index].imgObj.src="./img/trainUp_"+trainCharacter+"_"+trains[index].kind+".png";
                        }
                        switchs[trains[index]].imgObj.disabled="true";
                break;
                case 2:
                        trains[index].limit.x+=45;
                        trains[index].limit.y+=45;
                        trains[index].direction=rails[trains[index].railId].direction;
                        if(trains[index].direction==1){
                            trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                        }else if(trains[index].direction==0){
                            trains[index].imgObj.src="./img/trainSide_"+trainCharacter+"_"+trains[index].kind+".png";
                        }else if(trains[index].direction==2){
                            trains[index].imgObj.src="./img/trainUp_"+trainCharacter+"_"+trains[index].kind+".png";
                        }
                break;
                case 3:
                        if(trains[index].kind==trains[index].railId+1){
                            document.getElementById("scoreValue").innerText=parseInt(document.getElementById("scoreValue").innerText)+100;
                            scoreSound();
                            }else{
                                buzzerSound();
                            }
                        clearInterval(trainIntervalId[index]);
                        //alert("done4");
                break;
            }
        }
    }else if(trains[index].direction==2){ //direction 1 ->the train is moving up
    if(trains[index].limit.x > 0){ //if there is still any length in the rail
        var old  =trains[index].imgObj.style["margin-top"];
        var newp=old.replace("px","");
        newp--;
        trains[index].limit.x--;
        trains[index].imgObj.style["margin-top"]=newp+"px";
    }else{
        //switching in x
        switch(trains[index].railType){ 
            case 0:
            case 2:
                trains[index].railType=rails[trains[index].railId].nextType;
                trains[index].railId=rails[trains[index].railId].nextId;
                
            break;
            case 1:
                    trains[index].railType=switchs[trains[index].railId].nextType;
                    trains[index].railId=switchs[trains[index].railId].nextId;
                    
            break;
            case 3:
                   //alert("done3");
            break;
        }
        
        switch(trains[index].railType){
            case 0:
                    if(rails[trains[index].railId].direction==1||rails[trains[index].railId].direction==2){
                        trains[index].limit.x+=rails[trains[index].railId].imgObj.height;
                        trains[index].direction=rails[trains[index].railId].direction;
                        if(rails[trains[index].railId].direction==1){
                            trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                        }
                        else{
                            trains[index].imgObj.src="./img/trainUp_"+trainCharacter+"_"+trains[index].kind+".png"
                        }
                    }
                    else{
                        trains[index].limit.y+=rails[trains[index].railId].imgObj.height;
                        trains[index].direction=0;
                        trains[index].imgObj.src="./img/trainSide_"+trainCharacter+"_"+trains[index].kind+".png";
                    }
            break;
            case 1:
                    if(switchs[trains[index].railId].state){
                        trains[index].limit.x+=25;
                        trains[index].limit.y+=25;
                    }
                    else{
                        if(switchs[trains[index].railId].direction==1||switchs[trains[index].railId].direction==2){
                            trains[index].limit.x+=50;
                        }else if(switchs[trains[index].railId].direction==0){
                            trains[index].limit.y+=50;
                        }
                    }
                    trains[index].direction=switchs[trains[index].railId].direction;
                    if(trains[index].direction==1){
                        trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                    }else if(trains[index].direction==0){
                        trains[index].imgObj.src="./img/trainSide_"+trainCharacter+"_"+trains[index].kind+".png";
                    }else if(trains[index].direction==2){
                        trains[index].imgObj.src="./img/trainUp_"+trainCharacter+"_"+trains[index].kind+".png";
                    }
                    switchs[trains[index]].imgObj.disabled="true";
            break;
            case 2:
                    trains[index].limit.x+=45;
                    trains[index].limit.y+=45;
                    trains[index].direction=rails[trains[index].railId].direction;
                    if(trains[index].direction==1){
                        trains[index].imgObj.src="./img/train_"+trainCharacter+"_"+trains[index].kind+".png";
                    }else if(trains[index].direction==0){
                        trains[index].imgObj.src="./img/trainSide_"+trainCharacter+"_"+trains[index].kind+".png";
                    }else if(trains[index].direction==2){
                        trains[index].imgObj.src="./img/trainUp_"+trainCharacter+"_"+trains[index].kind+".png";
                    }
            break;
            case 3:
                    if(trains[index].kind==trains[index].railId+1){
                        document.getElementById("scoreValue").innerText=parseInt(document.getElementById("scoreValue").innerText)+100;
                        scoreSound();
                        }else{
                            buzzerSound();
                        }
                    clearInterval(trainIntervalId[index]);
            break;
        }
    }
}
}
