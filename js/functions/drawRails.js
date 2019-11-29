canvas = document.getElementById("mainCanvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;



railsArr.forEach(element => {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(element.start.x, element.start.y);
    ctx.lineTo(element.end.x, element.end.y);
    ctx.stroke();
});



var point1