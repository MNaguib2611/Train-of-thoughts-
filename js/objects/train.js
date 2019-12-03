var Train = function(x,y) {
    this.point=new Point(x,y);
    this.railId;
    this.railType; //0->rail  1->switch 2->turn 3->station 
    this.imagid;
    this.speed=1;
    this.kind;
    this.direction;
    this.imgObj;
    this.limit=new Point(x,y);
}