canvas = document.getElementById("mainCanvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;



railsArr.forEach(element => {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(element.start.x, element.start.y);
    ctx.lineTo(element.end.x, element.end.y);
    if (element.direction ==1) {
        ctx.moveTo(element.start.x+10, element.start.y);
        ctx.lineTo(element.end.x+10, element.end.y); 
    }else{
        ctx.moveTo(element.start.x, element.start.y+10);
        ctx.lineTo(element.end.x, element.end.y+10);
    }
    ctx.stroke();
});

