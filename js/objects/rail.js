//----each railway will be created from the Rail object--
//(direct:1 ->vertical rail)(direct:1 ->horizontal rail) 
var railId=0;
var Rail = function(startPoint,startPoint2,direct){
    this.start=startPoint,
    this.end=startPoint2,
    this.direction=direct; 
    this.id=++railId;
}

//clocwise (bool)--angles in radients
var CurvedRail = function(startPoint,clockwise,startAngle,endAngle){
    this.start=startPoint,
    this.clockwise=clockwise;
    this.startAngle=startAngle; 
    this.endAngle=endAngle; 
    this.id=++railId;
}





var rail1 = new Rail(point1,point2,1);
var rail2 = new Rail(point3,point4,0);
var rail3 = new Rail(point5,point6,1);
var rail4 = new Rail(point7,point9,1);
var rail5 = new Rail(point10,point11,0);
var rail6 = new Rail(point12,point13,1);
var rail7 = new Rail(point14,point15,0);
var rail8 = new Rail(point16,point17,0);
var rail9 = new Rail(point18,point19,0);
var rail10 = new Rail(point20,point21,0);
var rail11 = new Rail(point22,point23,0);
var rail12 = new Rail(point24,point25,1);
var rail13 = new Rail(point26,point27,1);




var curvedRail1 = new CurvedRail(point4,true,0.5,2);
var curvedRail2 = new CurvedRail(point6Curve,false,.5,1);
var curvedRail3 = new CurvedRail(point9Curve,false,1,1.5);
var curvedRail4 = new CurvedRail(point17,true,0.5,2);

//----all railways objects will be stored in railsArr --
//----all curved railways objects will be stored in curvedRailsArr --
var railsArr=[rail1,rail2,rail3,rail4,rail5,rail6,rail7,rail8,rail9,rail10,rail11,rail12,rail13]; 
var curvedRailsArr=[curvedRail1,curvedRail2,curvedRail3,curvedRail4];       