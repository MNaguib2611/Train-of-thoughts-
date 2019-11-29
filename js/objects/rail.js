//----each railway will be created from the Rail object--
var railId=0;
var Rail = function(startPoint,startPoint2,direct){
    this.start=startPoint,
    this.end=startPoint2,
    this.direction=direct;
    this.id=++railId;
}



var rail1 = new Rail(point1,point2,1);
var rail2 = new Rail(point3,point4,0);
var rail3 = new Rail(point5,point6,1);

//----all railway objects will be stored in railsArr --
var railsArr=[rail1,rail2,rail3];       