var firstSwitch =document.getElementById("first-switch");
var secondSwitch =document.getElementById("second-switch");
var thirdSwitch =document.getElementById("third-switch");
var fourthSwitch =document.getElementById("fourth-switch");
var fifthSwitch =document.getElementById("fifth-switch");


function changeFirstSwitcher(){
    if (firstSwitch.getAttribute("src")=="img/switch3.png") {
        firstSwitch.setAttribute("src","img/switch1.png");
    }else if(firstSwitch.getAttribute("src")=="img/switch1.png"){
        firstSwitch.setAttribute("src","img/switch3.png");
    }
}
function changeSecondSwitcher(){
    if (secondSwitch.getAttribute("src")=="img/switch6.png") {
        secondSwitch.setAttribute("src","img/switch1.png");
    }else if(secondSwitch.getAttribute("src")=="img/switch1.png"){
        secondSwitch.setAttribute("src","img/switch6.png");
    }
}
function changeThirdSwitcher(){
    if (thirdSwitch.getAttribute("src")=="img/switch4.png") {
        thirdSwitch.setAttribute("src","img/switch5.png");
    }else if(thirdSwitch.getAttribute("src")=="img/switch5.png"){
        thirdSwitch.setAttribute("src","img/switch4.png");
    }
}
function changeFourthSwitcher(){
    if (fourthSwitch.getAttribute("src")=="img/switch4.png") {
        fourthSwitch.setAttribute("src","img/switch5.png");
    }else if(fourthSwitch.getAttribute("src")=="img/switch5.png"){
        fourthSwitch.setAttribute("src","img/switch4.png");
    }
}
function changeFifthSwitcher(){
    if (fifthSwitch.getAttribute("src")=="img/switch4.png") {
        fifthSwitch.setAttribute("src","img/switch5.png");
    }else if(fifthSwitch.getAttribute("src")=="img/switch5.png"){
        fifthSwitch.setAttribute("src","img/switch4.png");
    }
}


firstSwitch.addEventListener('click',changeFirstSwitcher);
secondSwitch.addEventListener('click',changeSecondSwitcher);
thirdSwitch.addEventListener('click',changeThirdSwitcher);
fourthSwitch.addEventListener('click',changeFourthSwitcher);
fifthSwitch.addEventListener('click',changeFifthSwitcher);