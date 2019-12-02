canvas = document.getElementById("mainCanvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight+300;



railsArr.forEach(element => {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(element.start.x, element.start.y);
    ctx.lineTo(element.end.x, element.end.y);
    if (element.direction ==1) {
        ctx.moveTo(element.start.x+13, element.start.y);
        ctx.lineTo(element.end.x+13, element.end.y); 
    }else{
        ctx.moveTo(element.start.x, element.start.y+13);
        ctx.lineTo(element.end.x, element.end.y+13);
    }

    ctx.stroke();
});


curvedRailsArr.forEach(curvedElement => {
    console.log(curvedElement.start.x);
    
    var ctx = canvas.getContext("2d"); 
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(curvedElement.start.x, curvedElement.start.y-20, 20 ,curvedElement.startAngle * Math.PI, curvedElement.endAngle * Math.PI, curvedElement.clockwise);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(curvedElement.start.x, curvedElement.start.y-20, 33 ,curvedElement.startAngle * Math.PI, curvedElement.endAngle * Math.PI, curvedElement.clockwise);
    ctx.stroke();
});
