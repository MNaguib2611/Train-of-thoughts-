function switchFunc(id,pic1,pic2,lock){ //changes the image and the direction of the switch
    if(lock){
        if(switchs[id].state==0){
            switchs[id].imgObj.src="./img/switch"+pic1+".png";   //image swtiching
        }
        else{
            switchs[id].imgObj.src="./img/switch"+pic2+".png";
        }
        //swap rail direction
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
    }