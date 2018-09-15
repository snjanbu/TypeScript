class Student{
    constructor(protected studentId:number,protected studentName:string){

    }

    getDetails():void{
        console.log(this);
    }

}

class FullTime extends Student{

    constructor(studentId:number,studentName:string,private course:string){
        super(studentId,studentName);
    }

    getFullTimeDetails(){
        this.getDetails();
        console.log(this.course);
    }

}

var x=new FullTime(6100,'Sanjay','FullTime');
x.getFullTimeDetails();
x.getDetails();