class Polygon{
    constructor(length,width){
        this.length=length;
        this.width=width;
    }
    getArea=()=>{
        let area=this.length*this.width;
        console.log(area)
    }
}
var q1=new Polygon(1,2)
q1.getArea();