//----each railway will be created from the Rail object--
var railId=0;
var Rail = function(point1,point2){
    this.start=point1,
    this.end=point2,
    this.id=++railId;
}


//----all railway objects will be stored in railsArr --
var railsArr=[new Rail(new point(200,400),new point(700,400))];       